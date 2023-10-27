"use client";
import { ProductContext } from "@/context/ProductProvider";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Favorite = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteItem, addFavoriteProduct, removeFavoriteProduct } =
    useContext(ProductContext);

    useEffect(() => {
      const isFindProduct = favoriteItem.find((pd) => pd.id == product.id);
      if (isFindProduct) {
        setIsFavorite(true);
      }
    }, [favoriteItem, product.id]);

  const onClickFavoriteHandler = () => {
    console.log(favoriteItem);
    if (!isFavorite) {
      addFavoriteProduct(product);
    } else {
      removeFavoriteProduct(product.id);
    }
    setIsFavorite(!isFavorite);
    console.log({ update: favoriteItem });
  };
  return (
    <button className=" top-2 right-2" onClick={() => onClickFavoriteHandler()}>
      {isFavorite ? (
        <AiFillHeart size={24} className="text-violet-900 cursor-pointer" />
      ) : (
        <AiOutlineHeart size={24} className="text-violet-900 cursor-pointer" />
      )}
    </button>
  );
};

export default Favorite;
