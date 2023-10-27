import Image from "next/image";
import ProductCard from "../utils/ProductCard";

const CategoryComp = ({ category_product }) => {
  return (
    <div className="flex gap-4 justify-center">
      {category_product.products.map((cp) => {
        console.log(category_product);
        return <ProductCard product={cp} />;
      })}
    </div>
  );
};

export default CategoryComp;
