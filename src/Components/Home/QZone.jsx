import React from "react";
import playGroundImg from "../../assests/playground.png";
import swimingImg from "../../assests/swimming.png";
import classImg from "../../assests/class.png";
import adBg from "../../assests/bg.png";
const QZone = () => {
  return (
    <>
      <div className="bg-gray-100 p-3 mt-5 rounded-md">
        <h1 className="text-xl font-medium mt-2 mb-4">Q-Zone</h1>
        <div className="flex flex-col gap-6">
          <img src={playGroundImg} alt="" />
          <img src={swimingImg} alt="" />
          <img src={classImg} alt="" />
        </div>
      </div>
      <div className="mt-5">
        <img src={adBg} alt="" />
      </div>
    </>
  );
};

export default QZone;
