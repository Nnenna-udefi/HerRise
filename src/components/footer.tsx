import Image from "next/image";
import React from "react";
import WhiteLogo from "@/assets/images/logo-white.png";
import Link from "next/link";
import { ContactProp } from "./shared/organism/contactProp";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

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
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="rounded-2xl mr-4 border mt-8 border-gray-500 px-8 py-3">
              Volunteer
            </button>
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
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

      <div className="my-6">
        <h3 className="text-3xl text-white ">Reach Us</h3>

        <div className="mt-2">
          <ContactProp Icon={Mail} details="herrisefoundation@gmail.com" />
          <ContactProp Icon={Phone} details="+234 813 027 6164" />

          <p>You can also follow us on our social media platforms:</p>
          <div className="flex gap-3 my-4">
            <Link href="https://www.instagram.com/herrise_foundation?igsh=MWM1b296dHdpaTVoeA==">
              {" "}
              <Instagram />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100082207645159">
              <Facebook />
            </Link>
          </div>
          <p className="text-right">
            &#169; 2024 HerRise Foundation. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
