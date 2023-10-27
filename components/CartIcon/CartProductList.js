"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import CartProduct from "./CartProduct";

const CartProductList = () => {
  const { CartProducts } = useContext(CartContext);
  return (
    <div className="px-5 h-[69vh] overflow-y-auto">
      {CartProducts.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProductList;