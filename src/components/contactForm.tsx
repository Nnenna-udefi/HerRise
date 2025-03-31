"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { ContactProp } from "./shared/organism/contactProp";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

import Link from "next/link";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Something went wrong");

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully 🎉",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });

      setFormData({ email: "", message: "" });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again. ❌",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Retry",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:py-20 py-10 md:px-24 px-3 bg-white text-text-dark">
      <h2 className="uppercase lg:text-4xl pb-10 lg:pb-16 font-semibold text-xl text-center">
        Reach out to Us
      </h2>
      <div className="flex md:flex-row gap-10  justify-between flex-col-reverse">
        <form
          onSubmit={handleSubmit}
          className="lg:text-2xl flex flex-col  w-full text-xl"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="rounded-xl border-[0.5px] w-full  p-3 border-gray-700 text-gray-700"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            className="rounded-xl border-[0.5px] w-full mt-4 p-3  border-gray-700 text-gray-700 "
          />
          <div className="mt-8">
            <button
              className="text-pnk w-full hover:border-none hover:bg-pnk hover:text-white rounded-2xl mr-4 border mt-8 border-gray-800 px-8 py-3 lg:text-2xl text-[20px] transition duration-300 transform hover:scale-105"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <h2 className="uppercase md:hidden block  py-4  font-semibold text-xl text-center">
          Or Send Us a message
        </h2>
        <div className="rounded-2xl w-full lg:text-2xl text-xl ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:text-lg"
          >
            <div className=" px-2">
              <Link href="mailto:herrisefoundation@gmail.com">
                {" "}
                <ContactProp
                  Icon={Mail}
                  details="herrisefoundation@gmail.com"
                />
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
        </div>
      </div>
    </div>
  );
};
