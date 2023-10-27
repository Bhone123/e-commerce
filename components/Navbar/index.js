"use client";

import { CartContext } from "@/context/CartProvider";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { cartCount, setIsOpenCartPanel } = useContext(CartContext);

  return (
    <div className="top-0 fixed w-screen mb-4 px-3 py-4 bg-violet-300 z-20">
      <div className="flex justify-between container mx-auto">
        <Link href={"/"} className="font-bold text-[22px] text-violet-950">Logo</Link>
      <div className="flex gap-4">
      <Link href={"/Favorites"} className="font-bold text-md pt-1">Favorite Products
      </Link>
          <div className="relative text-violet-950">
          <AiOutlineShoppingCart
            size={35}
            onClick={() => setIsOpenCartPanel(true)}
          />
          <p className="absolute -top-3 -right-2 bg-violet-950 text-white px-1 rounded-md">
            <span>{cartCount}</span>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
useContext;
