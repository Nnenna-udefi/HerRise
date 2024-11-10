"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import React from "react";
import { ContactProp } from "./shared/organism/contactProp";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="bg-pnk text-white px-6 md:px-14 pt-32 h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-white text-4xl md:text-5xl">Contact Us</h1>
        <p className="text-3xl md:text-4xl my-6">
          We&apos;d love to hear from you
        </p>
      </motion.div>
      <p className="text-xl md:text-2xl">
        Whether you’re new to HerRise or have been with us for years, we’re glad
        you’re here.
      </p>

      <p className="text-2xl my-2">
        Get in touch for more information about our work.
      </p>
      <div className="mt-14">
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
      </div>
    </div>
  );
};
