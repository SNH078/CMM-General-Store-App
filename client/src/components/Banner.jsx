import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="relative ">
      {/* Background Images */}
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="hidden md:block w-full  h-125 "
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner small"
        className="block md:hidden w-full h-180 object-fit"
      />

      {/* Buttons Positioned Bottom-Left */}
      <div className="absolute bottom-25 left-6  flex gap-4  ">
        <Link
          to="/products"
className="group flex items-center gap-2 px-3 md:py-2 sm:py-1  rounded text-white bg-orange-400 md:text-base sm:text-sm"

        >
       Get All What You Need
          <img
            src={assets.white_arrow_icon}
            alt="arrow"
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

       
      </div>
    </div>
  );
};

export default Banner;
