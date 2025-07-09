import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Category = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center sm:text-left">
        Product Range
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer w-28 sm:w-32 md:w-36 lg:w-40 h-36 sm:h-40 md:h-44 p-3 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 shadow bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://static.vecteezy.com/system/resources/previews/015/278/060/non_2x/trendy-soft-retro-gradient-background-design-minimalistic-soft-gradient-in-pastel-colors-elegant-soft-blur-texture-colorful-mesh-gradient-background-vector.jpg')",
            }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className=" sm:w-20 md:w-35  sm:h-20 md:h-35 object-contain mb-2 transition group-hover:scale-110"
            />
            <p className="text-center text-xs sm:text-sm font-semibold text-white drop-shadow">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
