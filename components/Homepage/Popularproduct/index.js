"use client";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";
import ProductCard from "@/components/utils/ProductCard";

const PopularProduct = () => {
  const { popularProducts } = useContext(ProductContext);
  console.log(popularProducts);
  return (
    <section className="my-12">
        <h2 className="text-lg font-semibold">Popular Products</h2>
      <div className="flex flex-wrap gap-y-5 mt-5 ">
        {popularProducts.map((product) => (
          <ProductCard key={product.title + product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;