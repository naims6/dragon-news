import React, { Suspense } from "react";
import LeftAside from "../Components/Home/LeftAside";
import RightAside from "../Components/Home/RightAside";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <div className="container2 grid grid-cols-1 xl:grid-cols-4 gap-6">
        <Suspense fallback={<h1>Loading...</h1>}>
          <LeftAside></LeftAside>
        </Suspense>
        <main className="col-span-2">
          <h1 className="text-xl font-medium">Dragon News Home</h1>
          <Outlet></Outlet>
        </main>
        <RightAside></RightAside>
      </div>
    </>
  );
};

export default Home;
