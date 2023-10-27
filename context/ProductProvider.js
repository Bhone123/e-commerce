"use client";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [foryouProduct, setForyouProduct] = useState([]);
  const [favoriteItem, setfavoriteItem] = useState([]);

  const addFavoriteProduct = (product) => {
    setfavoriteItem([...favoriteItem, product]);
  };

  const removeFavoriteProduct = (product_id) => {
    // console.log(product_id);
    const FilterFavorite = favoriteItem.filter((fp) => fp.id !== product_id);
    setfavoriteItem([...FilterFavorite]);
  };

  const loadProduct = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();

    setProducts([...products]);
    const productFilter = products.filter((product) => product.rating > 4.5);
    const pProduct = productFilter.slice(0, 4);

    const RamdomProducts = [];
    while (RamdomProducts.length != 8) {
      const RandomForYouProducts =
        products[Math.floor(Math.random() * products.length)];
      // console.log(RandomForYouProducts);
      const isExist = RamdomProducts.find(
        (item) => item.id == RandomForYouProducts.id
      );
      if (!isExist) {
        RamdomProducts.push(RandomForYouProducts);
      }
    }

    setForyouProduct([...RamdomProducts]);

    console.log(RamdomProducts);
    console.log(pProduct);
    // productFilter = productFilter.slice(0, 5);
    setPopularProducts([...pProduct]);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        popularProducts,
        foryouProduct,
        setForyouProduct,
        favoriteItem,
        setfavoriteItem,
        addFavoriteProduct,
        removeFavoriteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
