import CategoryComp from "@/components/CategoryComp";
import Image from "next/image";

const getProductsByCategory = async (category_) => {
  const res = await fetch(
    "https://dummyjson.com/products/category/" + category_
  );
  const data = await res.json();
  return data;
};
const Category = async ({ params }) => {
  console.log(params);
  const category_product = await getProductsByCategory(params.slug);
  console.log(category_product);

  return (
    <>
      <h1 className="text-lg font-semibold mt-20 mb-3">{params.slug}</h1>
     <CategoryComp category_product={category_product}/>  
    </>
  );
};

export default Category;
