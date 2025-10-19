import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/Home/RightAside";
import Navbar from "../Components/Navbar";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetailsLayout = () => {
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();
  const news = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const matchedNews = news.find((n) => n.id == id);
    setNewsData(matchedNews);
  }, [id, news, newsData]);

  return (
    <div className="space-y-2">
      <Navbar />
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 container2">
        <div className="col-span-3">
          <h1 className="text-gray-800 font-semibold text-2xl sticky top-9 py-2 z-5 bg-white">
            Dragon News
          </h1>
          <NewsDetailsCard newsData={newsData} />
        </div>
        <RightAside />
      </div>
    </div>
  );
};

export default NewsDetailsLayout;
