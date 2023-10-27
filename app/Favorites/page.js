"use client"
import FavoritesComp from "@/components/FavoritesComp";
import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";
import AddToCartAllProduct from "@/components/FavoritesComp/AddToCartAllProduct";

const Favorites = () => {
    const { favoriteItem } = useContext(ProductContext);
  return (
    <div className="container px-4 mt-20">
      <h1 className="text-lg font-bold">Favorite Items</h1>
      {favoriteItem.length>0 && <AddToCartAllProduct/>}
      <FavoritesComp />
    </div>
  );
};

export default Favorites;
