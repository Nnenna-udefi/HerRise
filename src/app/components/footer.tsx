import Image from "next/image";
import React from "react";
import WhiteLogo from "../../../public/images/logo-white.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-12">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl tracking-widest w-[30%] text-white">
          Join Our Transformation
        </h1>
        <Image
          src={WhiteLogo}
          alt="logo"
          width={200}
          height={100}
          className="text-right"
        />
      </div>
      <div className="flex gap-20">
        <div>
          <Link href="/about">
            <button className="rounded-2xl mr-4 border mt-8 border-gray-500 px-8 py-3">
              Volunteer
            </button>
          </Link>

          <Link href="/about">
            <button className="rounded-2xl border mt-8 border-gray-500 px-8 py-3">
              Become a Partner
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl text-white">About</h2>

          <p>Who We Are</p>
          <p>Meet The Founder</p>
          <p>Blog</p>
        </div>
      </div>

      <div>
        <h3 className="text-3xl text-white my-6">Reach Us</h3>
        <p className="text-right">
          &#169; 2024 HerRise Foundation. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
