import Image from "next/image";
import React from "react";
import WhiteLogo from "../../../public/images/logo-white.png";
import Link from "next/link";

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

      <ul className="flex gap-6 m-auto hover:tracking-wider">
        <li className="hover:text-gray-600">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href="/about">About Us</Link>
        </li>
        <li className="hover:text-gray-600">Events</li>
        <li className="hover:text-gray-600">Partnerships</li>
        <li className="hover:text-gray-600">Contact Us</li>
      </ul>
    </div>
  );
};
