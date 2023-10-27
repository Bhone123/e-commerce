"use client";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";
import ProductCard from "../utils/ProductCard";
import EmptyFavorite from "./EmptyFavorite";

const FavoritesComp = () => {
  const { favoriteItem } = useContext(ProductContext);
  console.log(favoriteItem);
  return (
    <div className="flex flex-wrap gap-y-5 mt-5">
      {favoriteItem.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
       {favoriteItem.length <= 0 && <EmptyFavorite />}
    </div>
  );
};

export default FavoritesComp;
