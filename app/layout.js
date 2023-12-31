import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CartProvider from "@/context/CartProvider";
import ProductProvider from "@/context/ProductProvider";
import CartIcon from "@/components/CartIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Generated by BMZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ProductProvider>
            <header className="z-40">
              <Navbar />
            </header>
            <div>{children}</div>
            <CartIcon />
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
