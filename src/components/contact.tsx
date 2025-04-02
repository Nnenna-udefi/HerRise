"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Link from "next/link";
import { ContactForm } from "./contactForm";
import { setupRevealOnScroll } from "./utils/revealOnScroll";

export const Contact = () => {
  useEffect(() => {
    const cleanup = setupRevealOnScroll();
    return cleanup;
  }, []);
  return (
    <div className="px-6 md:px-14 pt-32 md:text-2xl text-xl pb-10 bg-white text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-8 md:mx-8 mx-0 bg-hero "
      >
        <div className="md:h-[300px] h-[200px] md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white md:text-6xl text-4xl tracking-widest px-14">
            Contact us
          </h1>
        </div>
      </motion.div>
      <motion.section className="reveal flex flex-col gap-10 text-center justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" "
        >
          <p className="text-3xl md:text-4xl my-6 text-center">
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

        <ContactForm />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pt-10 pb-6 reveal lg:px-24 md:flex block justify-between  items-center"
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
