import React from "react";
import LeftAside from "../Components/Home/LeftAside";
import RightAside from "../Components/Home/RightAside";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <div className="container2 grid grid-cols-1 xl:grid-cols-4 gap-6">
        <LeftAside></LeftAside>
        <main className="col-span-2">
          <h1 className="text-xl font-medium">Dragon News Home</h1>
        </main>
        <RightAside></RightAside>
      </div>
    </>
  );
};

export default Home;
