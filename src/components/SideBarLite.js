import React from "react";
import { useSelector } from "react-redux";

const SideBarLite = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    !isMenuOpen && (
      <div className="pt-4 text-white text-xs">
        <div className="p-2 flex flex-col items-center">
          <img
            alt="home"
            src={require("../img/home-icon.png")}
            className="w-4  invert mx-2"
          ></img>
          <span className="mt-2">Home</span>
        </div>
        <div className="  p-2 flex flex-col items-center">
            <img
              alt="shorts"
              src={require("../img/shorts-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="mt-2">Shorts</span>
          </div>
          <div className=" p-2 flex flex-col items-center">
            <img
              alt="subscription"
              src={require("../img/subscription-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="mt-2">Subscriptions</span>
          </div>
          <div className=" p-2 flex flex-col items-center">
            <img
              alt="You-img"
              src={require("../img/you-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="mt-2">You</span>
          </div>
      </div>
    )
  );
};

export default SideBarLite;
