import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <Link href={"/products/category/"+category} className=" py-2 px-2 text-sm bg-violet-100 text-violet-950 basis-[12.5%] cursor-pointer text-center rounded-md">
      {category}
    </Link>
  );
};

export default CategoryCard;