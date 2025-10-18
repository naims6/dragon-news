import React from "react";
import userIcon from "../assests/user.png";
const Navbar = () => {
  return (
    <div className="container2 flex justify-between items-center mb-16">
      <div></div>
      <nav>
        <ul className="flex gap-10">
          <li className="cursor-pointer text-gray-500">Home</li>
          <li className="cursor-pointer text-gray-500">About</li>
          <li className="cursor-pointer text-gray-500">Carrer</li>
        </ul>
      </nav>
      <div className="flex items-center gap-2.5">
        <img src={userIcon} alt="userIcon" />
        <button className="btn bg-gray-800 text-white px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
