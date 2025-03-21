"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import React from "react";
import { ContactProp } from "./shared/organism/contactProp";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="px-6 md:px-14 pt-32 pb-10 bg-white text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-8 md:mx-8 mx-0"
      >
        <div className="md:h-[300px] h-[200px] md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white md:text-6xl text-4xl tracking-widest px-14">
            Contact us
          </h1>
        </div>
      </motion.div>
      <motion.section className="block md:flex justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:w-1/2 w-full md:text-lg"
        >
          <p className="text-3xl md:text-4xl my-6">
            We&apos;d love to hear from you
          </p>
          <p>
            Whether you’re new to HerRise or have been with us for years, we’re
            glad you’re here.
          </p>

          <p className=" my-2">
            Get in touch for more information about our work.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:text-lg"
        >
          <div className="mt-14">
            <Link href="mailto:herrisefoundation@gmail.com">
              {" "}
              <ContactProp Icon={Mail} details="herrisefoundation@gmail.com" />
            </Link>
            <Link href="tel:+2348130276164">
              {" "}
              <ContactProp Icon={Phone} details="+234 813 027 6164" />
            </Link>
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
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pt-10 pb-6 md:flex block justify-between  items-center"
      >
        <div className="md:w-2/5 mt-4 w-full">
          <h2 className="text-3xl md:text-4xl">Get Involved</h2>
          <p className="text-lg">
            Join our community of volunteers and make a difference in the lives
            of women and girls.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="text-pnk hover:border-none hover:bg-pnk hover:text-white rounded-2xl mr-4 border mt-8 border-gray-800 px-8 py-3">
              Volunteer
            </button>
          </Link>
        </div>

        <div className=" md:w-2/5 mt-4 w-full" id="donate">
          <h2 className="text-3xl md:text-4xl">Donate</h2>
          <p className="text-lg">
            Your support helps us reach more communities and expand our impact.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="text-pnk hover:border-none hover:bg-pnk hover:text-white rounded-2xl mr-4 border mt-8 border-gray-800 px-8 py-3">
              Donate
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};
