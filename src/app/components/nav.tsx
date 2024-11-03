import Image from "next/image";
import React from "react";
import WhiteLogo from "@/images/logo-white.png";

export const Nav = () => {
  return (
    <div className="bg-pnk p-2 flex  text-white items-center">
      <Image
        src={WhiteLogo}
        alt="logo"
        width={200}
        height={100}
        className=" w-40 p-0"
      />

      <ul className="flex gap-6 m-auto">
        <li>Home</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Partnerships</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};
