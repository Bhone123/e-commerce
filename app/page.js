import Category from "@/components/Homepage/Category";
import Image from "next/image";
import PopularProduct from "@/components/Homepage/Popularproduct";
import ForYouproduct from "@/components/Homepage/ForYouProducts";

export default async function Home() {
  return (
      <main className="mt-20">
        <div className="container mx-auto px-4">
          <h1 className="font-semibold text-lg">E-commerce Website</h1>
          <br />
          <Category />
          <PopularProduct />
          <ForYouproduct/>
        </div>
      </main>
  );
}
