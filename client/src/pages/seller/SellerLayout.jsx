import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const SellerLayout = () => {
  const { isSeller, setIsSeller, axios, navigate } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        setIsSeller(false);
        toast.success("Logged out successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error("Failed to logout");
      console.error(error);
    }
  };

  return (
    <>
      {/* ------------------ NAVBAR FIXED ------------------ */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white bg-no-repeat bg-cover shadow-md border-b border-gray-300"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/06/48/82/52/360_F_648825223_TBcDqLeHKE8uHkhTJq43YFS3opzTF0KJ.jpg')",
          boxShadow: "0 4px 2px -1px rgba(0,0,0,0.1)"
        }}
      >
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          <Link to={"/"}>
            <h1 className="text-2xl font-semibold">CMM </h1>
          </Link>
          <div className="flex items-center gap-5 text-gray-600">
            <p>Let’s Get to Work, Admin</p>
            <button
              onClick={logout}
              className="border border-orange-300 rounded-full text-sm px-4 py-1 text-orange-600 hover:bg-orange-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* ------------------ SELLER MENU STICKY ------------------ */}
      <div className="sticky top-[65px] z-40 bg-white border-b border-gray-300 flex gap-2 px-4 md:px-8 py-2 shadow-sm">
        {sidebarLinks.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === "/seller"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition
               ${isActive
                 ? "bg-orange-100 border border-orange-400 text-orange-500"
                 : "hover:bg-gray-100 border border-transparent text-gray-600"}`
            }
          >
            <img src={item.icon} alt="" className="w-6 h-6" />
            <span className="hidden md:inline">{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* ------------------ PAGE CONTENT ------------------ */}
      <div className="pt-[130px] px-4 md:px-8">
        <Outlet />
      </div>
    </>
  );
};

export default SellerLayout;
