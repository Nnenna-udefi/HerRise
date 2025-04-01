"use client";
import Image from "next/image";
import React, { useState } from "react";
import WhiteLogo from "@/assets/images/logo-white.png";
import PinkLogo from "@/assets/images/logo-pink.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About Us", href: "/about" },
    { id: 3, text: "Programs", href: "/programs" },
    { id: 4, text: "Media", href: "/media" },
    { id: 5, text: "Contact Us", href: "/contact-us" },
  ];
  return (
    <div className="bg-pnk px-8 z-50  flex justify-between  text-white items-center fixed w-full">
      <Link href="/">
        <Image
          src={WhiteLogo}
          alt="logo"
          width={200}
          height={100}
          className="lg:w-32 w-20"
        />
      </Link>

      <ul className="md:flex hidden gap-6  w-full hover:tracking-wider justify-end">
        {navItems.map((items) => {
          const isActive = pathname === items.href;
          return (
            <li
              key={items.id}
              className={`hover:text-gray-600 lg:text-xl text-base ${
                isActive ? `font-extrabold border-b border-white` : ``
              }  `}
            >
              <Link href={items.href}>{items.text}</Link>
            </li>
          );
        })}
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <X size={20} className="text-white" /> : <Menu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] pl-4 h-full text-gray-700 border-r border-r-gray-700 bg-white ease-in-out duration-500"
            : "ease-in-out w-[60%]  duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <Link href="/">
          <Image
            src={PinkLogo}
            alt="logo"
            width={200}
            height={100}
            className="w-20"
          />
        </Link>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="hover:text-pnk hover:font-bold py-2 text-xl"
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
