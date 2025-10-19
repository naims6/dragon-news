import React, { Suspense } from "react";
import LeftAside from "../Components/Home/LeftAside";
import RightAside from "../Components/Home/RightAside";
import { Outlet, useNavigation } from "react-router";

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <div className="container2 grid grid-cols-1 xl:grid-cols-4 gap-6">
        <Suspense fallback={<h1>Loading...</h1>}>
          <LeftAside></LeftAside>
        </Suspense>
        <main className="col-span-2">
          <h1 className="text-xl font-medium">Dragon News Home</h1>
          {navigation.state === "loading" ? (
            <h1 className="mt-5 text-4xl text-pink-500">Loading...</h1>
          ) : (
            <Outlet></Outlet>
          )}
        </main>
        <RightAside></RightAside>
      </div>
    </>
  );
};

export default Home;
