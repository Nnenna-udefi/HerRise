"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import im1 from "@/assets/images/menstral-hygiene-2023/8.jpeg";
import im2 from "@/assets/images/girl-child-2023/1.jpeg";
import im3 from "@/assets/images/girl-child-2024/1.jpeg";
import im4 from "@/assets/images/lets-talk-period/2.jpeg";
import im5 from "@/assets/images/menstral-hygiene-2023/3.jpeg";
import im6 from "@/assets/images/book3.jpeg";
import Image from "next/image";
import heroImg from "@/assets/images/breaking-silence/7.png";
import { ProgramsBlock } from "@/utils/constant";
import { motion } from "framer-motion";
import { setupRevealOnScroll } from "./utils/revealOnScroll";
import { Impact } from "./impact";
import announcement from "@/assets/images/announcement.jpeg";
import bookLaunch from "@/assets/images/book-lauch.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const HomeContent = () => {
  useEffect(() => {
    const cleanup = setupRevealOnScroll();
    return cleanup;
  }, []);
  return (
    <div className="bg-white lg:px-12 px-6">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="lg:flex block reveal justify-between gap-10 text-gray-800  py-20"
      >
        <Image src={heroImg} alt="hero" width={500} height={500} />
        <div className="md:pt-4 lg:pt-0 ">
          <h1 className="md:text-5xl mt-4 md:mt-0 text-4xl tracking-widest font-bold leading-12">
            HerRise FOUNDATION
          </h1>
          <div className=" pt-10 w-full">
            <p className="tracking-widest leading-7 md:text-xl  text-lg">
              HerRise Foundation is more than an organization—it’s a movement
              dedicated to empowering women and girls through education,
              advocacy, and climate action. Founded on the principles of
              resilience, leadership, and inclusivity, we work with communities
              to break barriers and create opportunities. Through our programs
              in education, gender equality, and environmental stewardship, we
              equip girls with the tools they need to lead, innovate, and build
              sustainable futures. Join us in shaping a world where every girl
              can rise and thrive.
            </p>
            <Link href="/about">
              <button className="rounded-2xl transition-all duration-300 hover:scale-105 border mt-8 hover:bg-pnk hover:text-white border-gray-500 px-8 py-3">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="reveal">
        <Impact />
      </div>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col reveal justify-center items-center md:pt-10 pb-10"
      >
        <h2 className="md:text-6xl py-4 text-4xl font-bold text-center font-recoleta">
          Join Our Community
        </h2>
        <p className="tracking-widest py-4 leading-7 md:text-xl text-black text-lg text-center ">
          At HerRise Foundation, we believe in the power of community to drive
          meaningful change. We understand the challenges women and girls
          face—barriers to education, inequality, and the urgent need for
          climate action. That’s why we are committed to creating a supportive
          space where girls and women can rise, lead, and make an impact. By
          joining our movement, you become part of a network dedicated to
          empowerment, advocacy, and sustainable change. Together, we break down
          barriers, uplift voices, and create opportunities for a brighter, more
          inclusive future. Be the change. Join us today.
        </p>

        <div className="flex md:flex-row flex-col md:gap-10 gap-4 items-center py-10">
          <div>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
              target="_blank"
            >
              <button className="rounded-2xl transition-all duration-300 hover:scale-105 text-black hover:bg-pnk hover:text-white border border-gray-500 px-10 py-4">
                Volunteer
              </button>
            </Link>
          </div>
          <div>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
              target="_blank"
            >
              <button className="rounded-2xl transition-all duration-300 hover:scale-105 text-black hover:bg-pnk hover:text-white border border-gray-500 px-10 py-4">
                Partner With Us
              </button>
            </Link>
          </div>
          <div>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
              target="_blank"
            >
              <button className="rounded-2xl transition-all duration-300 hover:scale-105 text-black hover:bg-pnk hover:text-white border border-gray-500 px-10 py-4">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Programs Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col reveal items-center pb-10"
      >
        <h2 className="md:text-6xl pb-4 text-4xl font-bold">Programs</h2>
        <div className="flex lg:flex-row flex-col gap-10 text-gray-700 pt-6">
          {ProgramsBlock.filter((_, index) => [1, 3, 5].includes(index)).map(
            (program, index) => (
              <motion.div
                key={program.title}
                className="my-6 md:w-[300px] w-full rounded-xl bg-gray-100 flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform"
                variants={cardVariants}
                custom={index}
              >
                <Image
                  src={program.img}
                  alt={program.title}
                  width={500}
                  height={500}
                  className="rounded-t-xl w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl overflow-hidden text-ellipsis">
                    {program.title}
                  </h2>
                  <Link href={`/programs/${program.slug}`}>
                    <button className="font-bold text-xl transition-all duration-300 hover:scale-105 hover:border-b border-gray-500 py-2">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          )}
        </div>
        <Link href="/programs">
          <button className="rounded-2xl transition-all duration-300 hover:scale-105 border text-black hover:border-none hover:bg-pnk hover:text-white border-gray-500 px-10 py-4">
            See More
          </button>
        </Link>
      </motion.div>

      {/* News */}

      <motion.div className="reveal md:flex block gap-10 justify-between items-center">
        <Link href={"/programs/gbv-club-manual"} className="w-full">
          <Image
            src={bookLaunch}
            alt="book launch"
            width={500}
            height={500}
            className="w-full"
          />
        </Link>

        <div className="font-bold md:pt-0 pt-10">
          <h3 className="font-black text-2xl md:text-4xl font-roboto">
            Exciting News!!! &#127881; &#127881;
          </h3>
          <p className="text-[#fc1997] py-2 text-3xl font-extrabold lg:text-6xl">
            Launching the GBV Club Manual: A Living Legacy
          </p>
          <p className="text-[#fc1997] py-4 text-2xl lg:text-4xl">
            We are thrilled to announce, 📖 The GBV Club Manual is here.
          </p>
          <p className="text-lg md:text-2xl">
            This manual is more than ink and paper. It is a tool of resistance.
            It is a beacon of hope. It is the voice we once wished someone gave
            us when we faced systemic barriers. With this, students will not
            just learn about gender-based violence
          </p>
        </div>
      </motion.div>

      <motion.div className="reveal flex justify-center items-center">
        <Image
          src={announcement}
          alt="announcement"
          width={1000}
          height={1000}
          className="max-w-full"
        />
      </motion.div>

      {/* Gallery Section */}
      <div className="reveal grid md:grid-cols-3 grid-cols-2 bg-white w-full">
        {[im1, im2, im3, im4, im5, im6].map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="gallery"
            width={300}
            height={300}
            className="w-full object-cover "
          />
        ))}
      </div>
    </div>
  );
};
