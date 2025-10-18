import React, { use } from "react";
import CategoryItem from "./CategoryItem";
const fetcher = fetch("./public/data/categories.json").then((res) =>
  res.json()
);
const LeftAside = () => {
  const categories = use(fetcher);
  console.log(categories);
  return (
    <div className="col-span-1">
      <h1 className="font-medium text-xl">All Category</h1>
      <div>
        <ul className="flex flex-col">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category}></CategoryItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftAside;
