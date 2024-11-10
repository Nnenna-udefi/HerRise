import Image from "next/image";
import React from "react";
import PinkLogo from "@/assets/images/logo-pink.png";
import Link from "next/link";
import { ContactProp } from "./shared/organism/contactProp";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-white border-t border-t-gray-700 text-gray-700 py-10 md:px-12 px-8">
      <Image
        src={PinkLogo}
        alt="logo"
        width={100}
        height={50}
        className="block md:hidden w-20"
      />
      <div className="flex justify-between items-center">
        <h1 className="text-4xl tracking-widest w-full md:w-[30%] text-gray-700">
          Join Our Transformation
        </h1>
        <Image
          src={PinkLogo}
          alt="logo"
          width={100}
          height={50}
          className="text-right md:block hidden"
        />
      </div>
      <div className="md:flex block gap-20">
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
            <button className="rounded-2xl border mt-2 md:mt-8 border-gray-500 px-8 py-3">
              Become a Partner
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-3 mt-4 md:mt-0">
          <h2 className="text-xl text-gray-800 white">About Us</h2>

          <Link href="/about/#who-we-are">Who We Are</Link>
          <Link href="/about/#founder">Meet The Founder</Link>

          <Link href="/programs">Our Programs</Link>
        </div>
      </div>

      <div className="my-6">
        <h3 className="text-3xl text-gray-800 ">Reach Us</h3>

        <div className="mt-2">
          <Link href="mailto:herrisefoundation@gmail.com">
            {" "}
            <ContactProp Icon={Mail} details="herrisefoundation@gmail.com" />
          </Link>
          <Link href="tel:+2348130276164">
            {" "}
            <ContactProp Icon={Phone} details="+234 813 027 6164" />
          </Link>

          <p>You can also follow us on our social media platforms:</p>
          <div className="flex md:justify-normal justify-center gap-3 my-4">
            <Link href="https://www.instagram.com/herrise_foundation?igsh=MWM1b296dHdpaTVoeA==">
              {" "}
              <Instagram />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100082207645159">
              <Facebook />
            </Link>
          </div>
          <p className="md:text-right text-center">
            &#169; 2024 HerRise Foundation. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
