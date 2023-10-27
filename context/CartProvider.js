"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [CartProducts, setCartProducts] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [isOpenCartPanel, setIsOpenCartPanel] = useState(false);
  const [cartCalculate, setCartCalculate] = useState(0);

  useEffect(() => {
    setcartCount(CartProducts.length);
    console.log(cartCount);
  }, [CartProducts]);

  useEffect(() => {
    let cartTotalCost = 0;
    CartProducts.forEach((product) => {
      const eachProductCost = product.discountAmount
        ? product.discountAmount * product.orderQuantity
        : product.price * product.orderQuantity;
      cartTotalCost += eachProductCost;
    });
    console.log({ cartTotalCost });
    setCartCalculate(cartTotalCost);
  }, [CartProducts]);

  const addCard = (product) => {
    const isExitCard = CartProducts.find((pro) => pro.id === product.id);
    console.log(isExitCard);
    if (isExitCard) {
      return;
    } else {
      setCartProducts([...CartProducts, product]);
    }
  };

  const cartUpdate = (update_product) => {
    console.log(update_product);
    const updatedProducts = CartProducts.map((product) => {
      if (product.id == update_product.id) {
        return update_product;
      }
      return product;
    });
    setCartProducts([...updatedProducts]);
  };

  const removeCart = (product_id) => {
    const deletedProduct = CartProducts.filter(
      (product) => product.id !== product_id
    );
    setCartProducts([...deletedProduct]);
  };

  const AddAllFavoriteProductsToCart = (favoriteItem) => {
    debugger;
    let checkFavoriteProducts = [];
    favoriteItem.forEach((product) => {
      const isExit = CartProducts.find((p) => p.id == product.id);
      if (!isExit) {
        product.orderQuantity = 1;
        if (product.discountPercentage) {
          product.discountAmount = Math.round(
            product.price - product.price * (product.discountPercentage / 100)
          );
        }
        checkFavoriteProducts.push(product);
      }
    });
    setCartProducts([...CartProducts, ...checkFavoriteProducts]);
  };

  return (
    <CartContext.Provider
      value={{
        CartProducts,
        cartCount,
        addCard,
        isOpenCartPanel,
        setIsOpenCartPanel,
        cartUpdate,
        cartCalculate,
        removeCart,
        AddAllFavoriteProductsToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
