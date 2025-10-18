import React from "react";
import { NavLink } from "react-router";

const CategoryItem = ({ category }) => {
  return (
    <>
      <NavLink
        to={`category/${category.id}`}
        className="w-full py-2.5 px-5  text-gray-500 mt-2"
      >
        {category.name}
      </NavLink>
    </>
  );
};

export default CategoryItem;
