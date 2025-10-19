import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const [allNews, setAllNews] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  const categoryNews = useLoaderData();
  // set data
  useEffect(() => {
    if (id == 0) {
      setAllNews(categoryNews);
    } else if (id == 1) {
      const filteredNews = categoryNews.filter(
        (news) => news.others.is_today_pick
      );
      setAllNews(filteredNews);
    } else {
      const filteredNews = categoryNews.filter(
        (news) => news.category_id == id
      );
      setAllNews(filteredNews);
    }
  }, [categoryNews, id]);

  return (
    <div className="mt-5 space-y-5">
      <h1>{location?.state?.category}</h1>
      <h2>
        {allNews.length === 0 && (
          <span className="text-red-500">No News Found here</span> // if no news found
        )}
      </h2>
      <div className="overflow-y-scroll">
        {allNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
