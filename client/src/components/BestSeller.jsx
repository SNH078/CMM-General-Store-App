import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium mb-4">Grocer’s Choice</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 auto-rows-fr">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <div key={index} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
