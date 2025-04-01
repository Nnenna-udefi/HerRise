"use client";
import Link from "next/link";
import React from "react";
import im1 from "@/assets/images/menstral-hygiene-2023/8.jpeg";
import im2 from "@/assets/images/girl-child-2023/1.jpeg";
import im3 from "@/assets/images/girl-child-2024/1.jpeg";
import im4 from "@/assets/images/lets-talk-period/2.jpeg";
import im5 from "@/assets/images/menstral-hygiene-2023/3.jpeg";
import im6 from "@/assets/images/modle-girls-2023/1.jpeg";
import Image from "next/image";
import heroImg from "@/assets/images/breaking-silence/7.png";
import { ProgramsBlock } from "@/utils/constant";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const HomeContent = () => {
  return (
    <div className="bg-white lg:px-12 px-6">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="md:flex block justify-between gap-10 text-gray-800  py-20"
      >
        <Image src={heroImg} alt="hero" width={500} height={500} />
        <div>
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
              <button className="rounded-2xl border mt-8 hover:bg-pnk hover:text-white border-gray-500 px-8 py-3">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="flex flex-col justify-center items-center pb-10"
      >
        <h2 className="md:text-6xl py-4 text-4xl font-bold font-recoleta">
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
              <button className="rounded-2xl hover:border-none text-black hover:bg-pnk hover:text-white border  border-gray-500 px-8 py-3">
                Volunteer
              </button>
            </Link>
          </div>
          <div>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
              target="_blank"
            >
              <button className="rounded-2xl hover:border-none text-black hover:bg-pnk hover:text-white  border  border-gray-500 px-8 py-3">
                Become a Partner
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center pb-10"
      >
        <h2 className="md:text-6xl pb-4 text-4xl font-bold font-roboto ">
          Programs
        </h2>
        <div className="">
          <div className="flex md:flex-row flex-col gap-10 text-gray-700 pt-14">
            {ProgramsBlock.filter((_, index) => [0, 1, 3].includes(index)).map(
              (program) => (
                <div
                  key={program.title}
                  className="my-6 md:w-[300px] w-full rounded-xl bg-gray-100 flex flex-col h-full"
                >
                  <Image
                    src={program.img}
                    alt={program.title}
                    width={500}
                    height={500}
                    className="md:w-[300px] rounded-t-xl w-full h-[200px] object-cover"
                  />
                  <div className="flex flex-col  p-4 justify-between">
                    <h2 className="text-2xl">
                      {program.title.split(" ").slice(0, 5).join(" ")}
                      {program.title.split(" ").length > 5 ? "..." : ""}
                    </h2>
                    {/* <p className="py-6">{program.shortText}</p> */}
                    <div className="items-end">
                      <Link href={`/programs/${program.slug}`}>
                        <button className="font-bold text-xl hover:border-b hover:border-pnk border-gray-500 py-2">
                          See More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <Link href={`/programs`}>
          <button className="rounded-2xl border text-black hover:border-none hover:bg-pnk hover:text-white border-gray-500 px-8 py-3">
            See More
          </button>
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 grid-cols-2 w-full">
        <Image
          src={im1}
          alt="collage"
          width={300}
          height={300}
          className=" w-full"
        />
        <Image
          src={im2}
          alt="collage"
          layout="responsive"
          width={300}
          height={300}
          className=" w-[500px] h-full"
        />
        <Image
          src={im3}
          alt="collage"
          width={300}
          layout="responsive"
          height={300}
          className=" w-[500px] h-full"
        />
        <Image
          src={im4}
          alt="collage"
          layout="responsive"
          width={300}
          height={300}
          className=" w-[500px] h-full"
        />
        <Image
          src={im5}
          alt="collage"
          layout="responsive"
          width={300}
          height={300}
          className=" w-[500px] h-full"
        />
        <Image
          src={im6}
          alt="collage"
          layout="responsive"
          width={300}
          height={300}
          className=" w-[500px] h-full bg-black"
        />
      </div>
    </div>
  );
};
