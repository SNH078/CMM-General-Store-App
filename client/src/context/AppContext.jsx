import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error("Failed to parse cartItems from localStorage:", e);
      return {};
    }
  });

  // Sync cartItems to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cartItems:", e);
    }
  }, [cartItems]);

  // Fetch seller status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      setIsSeller(data.success);
    } catch (error) {
      setIsSeller(false);
    }
  };

  // Fetch user + cart + merge with local cart
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        const localCart = JSON.parse(localStorage.getItem("cartItems")) || {};
        const backendCart = data.user.cart || {};
        const mergedCart = { ...backendCart, ...localCart };
        setCartItems(mergedCart);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Fetch product list
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      updated[itemId] = (updated[itemId] || 0) + 1;
      return updated;
    });
    toast.success("Added to cart");
  };

  // Update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: quantity };
      return updated;
    });
    toast.success("Cart updated");
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId]) {
        updated[itemId] -= 1;
        if (updated[itemId] <= 0) delete updated[itemId];
      }
      return updated;
    });
    toast.success("Removed from cart");
  };

  // Clear cart (after logout or order)
  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };

  // Cart count
  const cartCount = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  // Total cart amount
  const totalCartAmount = () => {
    if (!products || !cartItems) return 0;
    let total = 0;
    for (const itemId in cartItems) {
      const item = products.find((p) => p._id === itemId);
      if (item) total += item.offerPrice * cartItems[itemId];
    }
    return Math.floor(total * 100) / 100;
  };

  // Debounced cart sync
  useEffect(() => {
    if (!user) return;

    const timer = setTimeout(async () => {
      try {
        const { data } = await axios.post("/api/cart/update", { cartItems });
        if (!data.success) toast.error(data.message);
      } catch (err) {
        toast.error("Failed to sync cart with server.");
        console.error(err);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [cartItems, user]);

  // Initial fetch
  useEffect(() => {
    const init = async () => {
      try {
        await fetchSeller();
        await fetchProducts();
        await fetchUser();
      } catch (err) {
        toast.error("Initialization failed");
        console.error(err);
      }
    };
    init();
  }, []);

  const logout = () => {
    setUser(null);
    clearCart();
    // Optionally: call /api/logout endpoint if it exists
  };

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    searchQuery,
    setSearchQuery,
    cartCount,
    totalCartAmount,
    axios,
    fetchProducts,
    setCartItems,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

