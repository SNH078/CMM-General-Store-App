import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return (
    product && (
      <div
        onClick={() => {
          navigate(`/product/${product.category.toLowerCase()}/${product._id}`);
          scrollTo(0, 0);
        }}
        className="border-2 border-gray-200 rounded-lg p-3 bg-white w-full max-w-[220px] hover:shadow-md transition flex flex-col justify-between cursor-pointer"
      >
        {/* Image */}
        <div className="flex items-center justify-center h-36 mb-4">
          <img
            className="object-contain max-h-full max-w-full transition-transform group-hover:scale-105"
            src={`http://localhost:5000/images/${product.image[0]}`}
            alt={product.name}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <p className="text-xs text-gray-400">{product.category}</p>

          <p className="text-gray-800 font-semibold text-base truncate">
            {product.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={
                    i <4
                      ? assets.star_icon
                      : assets.star_dull_icon
                  }
                  alt="star"
                  className="w-4"
                />
              ))}
            <p className="text-sm ml-1">({product.rating || 4})</p>
          </div>

          {/* Price + Add-to-cart */}
          <div className="flex items-end justify-between mt-2">
            <p className="text-orange-600 font-semibold text-base">
              ₹{product.offerPrice}
              <span className="line-through text-gray-400 text-sm ml-1">
                ₹{product.price}
              </span>
            </p>

            <div onClick={(e) => e.stopPropagation()}>
              {!cartItems?.[product._id] ? (
                <button
                  onClick={() => addToCart(product._id)}
                  className="flex items-center gap-2 bg-orange-100 border border-orange-300 px-2 py-1 rounded text-orange-600 text-sm"
                >
                   <svg
            width="15"
            height="15"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
                  Add
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-orange-100 border border-orange-300 px-2 py-1 rounded text-orange-600 text-sm">
                  <button onClick={() => removeFromCart(product._id)}>-</button>
                  <span>{cartItems[product._id]}</span>
                  <button onClick={() => addToCart(product._id)}>+</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
