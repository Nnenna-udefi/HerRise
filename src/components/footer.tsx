import Image from "next/image";
import React from "react";
import PinkLogo from "@/assets/images/logo-pink.png";
import Link from "next/link";
import { ContactProp } from "./shared/organism/contactProp";
import { Copyright, Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-white border-t border-t-gray-700 text-gray-700 py-10 md:px-12 px-8">
      <Image
        src={PinkLogo}
        alt="logo"
        width={100}
        height={50}
        className="w-20"
      />

      <div className="md:flex justify-between gap-10 block ">
        <div className="p-0">
          <h1 className="text-3xl text-gray-800">Join Our Transformation</h1>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="rounded-2xl hover:border-none hover:bg-pnk hover:text-white  mr-4 border  border-gray-500 px-8 py-3">
              Volunteer
            </button>
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="rounded-2xl hover:border-none hover:bg-pnk hover:text-white  border mt-2 md:mt-8 border-gray-500 px-8 py-3">
              Become a Partner
            </button>
          </Link>
        </div>

        <div className="flex text-lg flex-col gap-3 mt-4 md:mt-0">
          <h3 className="text-3xl text-gray-800">Quick Links</h3>
          <Link href="/about">About Us</Link>
          <Link href="/about/#founder">Meet The Founder</Link>
          <Link href="/programs">Our Programs</Link>
          <Link href="/programs">Impact Stories</Link>
          <Link href="/contact-us/#donate">Donate</Link>
        </div>

        <div className="md:mt-0 mt-6 mb-6">
          <h3 className="text-3xl text-gray-800 ">Reach Us</h3>

          <div className="mt-2">
            <Link href="mailto:contact@herrisefoundation.org">
              {" "}
              <ContactProp
                Icon={Mail}
                details="contact@herrisefoundation.org"
              />
            </Link>
            <Link href="tel:+2348130276164">
              {" "}
              <ContactProp Icon={Phone} details="+234 813 027 6164" />
            </Link>

            <p>You can also follow us on our social media platforms:</p>
            <div className="flex md:justify-normal justify-center gap-3 my-4">
              <Link href="https://www.instagram.com/herrise_foundation?igsh=MWM1b296dHdpaTVoeA==">
                {" "}
                <Instagram className="hover:text-pnk" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100082207645159">
                <Facebook className="hover:text-pnk" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center md:justify-end justify-center">
        <Copyright />
        <p>2024 HerRise Foundation. All Rights Reserved.</p>
      </div>
    </div>
  );
};
