import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h1 className="text-xl font-medium mb-4 mt-6">Find Us On</h1>
      <div className="">
        <button className="flex gap-2 items-center py-4 px-5 cursor-pointer w-full text-left border border-gray-100">
          <FaFacebook /> Facebook
        </button>
        <button className="flex gap-2 items-center py-4 px-5 cursor-pointer w-full text-left border border-gray-100">
          <FaTwitter /> Twiter
        </button>
        <button className="flex gap-2 items-center py-4 px-5 cursor-pointer w-full text-left border border-gray-100">
          <FaInstagram /> Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
