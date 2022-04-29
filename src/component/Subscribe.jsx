import React from "react";
import wallpaper from "../assets/subscribe.jpg";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16  text-white  text-center flex flex-col justify-center items-center">
      <img src={wallpaper} className="object-cover absolute z-[-1]   " />

      <div className="mb-">
        <h1>Join OUr DeFi Communtiy</h1>
        <div className="py-4">
          <input
            className="p-3 rounded-3xl mr-4"
            type="email"
            placeholder="Enter your email"
          />
          <button className="hover:text-black">Sign UP</button>
        </div>
        <div className="flex justify-center items-center p-2 ">
          <input type="checkbox" className="mr-2 text-black" />
          <p>Yes, I agree to recive email communications from DeFi</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
