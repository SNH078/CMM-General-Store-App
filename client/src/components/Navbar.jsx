import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import logo2 from "../assets/logo2.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    cartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");

      if (data.success) {
        setUser(null);
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Navigate when search query updates
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav
      className="h-20 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3 border-b border-gray-300 bg-white relative transition-all shadow-2xl bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/06/48/82/52/360_F_648825223_TBcDqLeHKE8uHkhTJq43YFS3opzTF0KJ.jpg')",
        boxShadow: "0 4px 1px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* --------------------- Logo --------------------- */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo2} alt="CMM" className="w-60 h-60 object-contain" />
      </Link>

      {/* --------------------- Desktop Menu --------------------- */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link
          to="/seller"
          className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          Seller Panel
        </Link>

        {/*  Search bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-400 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-orange-500 w-[18px] h-[18px] rounded-full">
            {cartCount()}
          </button>
        </div>

        {/* Profile / Login */}
        {user ? (
         <div className="relative group flex items-center gap-2">
    <span className="text-sm font-medium text-gray-700 hidden md:inline">
      Hi, {user.name?.split(" ")[0]}
    </span>
            <img src={assets.profile_icon} alt="" className="w-10" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2 w-30 rounded-md z-40 text-sm">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-1.5 cursor-pointer"
              >
                Order History
              </li>
              <li className="cursor-pointer p-1.5" onClick={logout}>
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="border border-orange-300 rounded-full text-sm px-4 py-1 text-orange-600 hover:bg-orange-100"
          >
            Login
          </button>
        )}
      </div>

      {/* --------------------- Mobile Menu --------------------- */}
      <div className="flex items-center gap-6 md:hidden">
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-orange-500 w-[18px] h-[18px] rounded-full">
            {cartCount()}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <svg
            width="21"
            height="15"
            fill="none"
            viewBox="0 0 21 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}
      >
        <Link onClick={() => setOpen(false)} to={"/"}>Home</Link>
        <Link onClick={() => setOpen(false)} to={"/products"}>Products</Link>

        {user ? (
          <>
          
            <p onClick={() => navigate("/my-orders")} className="cursor-pointer">
              Order History
            </p>
            <p className="cursor-pointer" onClick={logout}>
              Logout
            </p>
          </>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-8 py-2 bg-orange-400 hover:bg-orange-500 transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
