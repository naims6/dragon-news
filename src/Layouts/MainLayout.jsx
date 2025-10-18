import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 xl:grid-cols-4">
        {/* left aside  */}
        <aside className="col-span-1">left aside</aside>
        <main className="col-span-2">main</main>
        <aside className="col-span-1">right side</aside>
      </div>
    </div>
  );
};

export default MainLayout;
