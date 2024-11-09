import Image from "next/image";
import React from "react";
import WhiteLogo from "@/assets/images/logo-white.png";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="bg-pnk p-2 flex text-white items-center fixed w-full">
      <Image
        src={WhiteLogo}
        alt="logo"
        width={200}
        height={100}
        className="w-40 p-0"
      />

      <ul className="flex gap-6 justify-evenly w-full hover:tracking-wider">
        <li className="hover:text-gray-600">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href="/about">About Us</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href="/programs">Programs</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href="/media">Media</Link>
        </li>
        <li className="hover:text-gray-600">
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};
