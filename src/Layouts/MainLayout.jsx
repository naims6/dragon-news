import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default MainLayout;
