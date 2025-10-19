import React from "react";
import { Link, useNavigate } from "react-router";

const NewsDetailsCard = ({ newsData }) => {
  const { image_url, details, title, category_id } = newsData;
  const navigate = useNavigate();
  console.log(category_id);
  const handleRederect = () => {
    navigate(-1);
  };
  return (
    <div className="pb-7 p-4 mb-16 border border-gray-200 rounded-md mt-5 shadow">
      <img className="w-full rounded-sm" src={image_url} alt="" />
      <h1 className="text-3xl text-gray-800 font-bold my-5">{title}</h1>
      <p className="text-gray-500">{details}</p>
      <button onClick={handleRederect} className="btn btn-secondary mt-7">
        All news in this category
      </button>
    </div>
  );
};

export default NewsDetailsCard;
