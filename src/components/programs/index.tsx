"use client";
import { ProgramsBlock } from "@/utils/constant";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { setupRevealOnScroll } from "../utils/revealOnScroll";
import { useRouter } from "next/navigation";

export const Programs = ({
  setLoading,
}: {
  setLoading: (val: boolean) => void;
}) => {
  const router = useRouter();
  const [visiblePrograms, setVisiblePrograms] = useState(6);

  useEffect(() => {
    const cleanup = setupRevealOnScroll();
    return cleanup;
  }, []);

  return (
    <div className="pt-24 bg-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white m-8 bg-hero"
      >
        <div className="md:h-[300px] h-[200px] md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white md:text-6xl text-4xl tracking-widest px-14">
            Programs
          </h1>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:px-14 flex flex-col justify-center items-center px-6 pt-10 pb-4 bg-white"
      >
        <p className="text-center text-black leading-12 md:w-[70%] w-full text-2xl">
          Our programs aim at tackling some of the most pressing issues facing
          girls today, from quality education and gender equality to climate
          action, menstrual hygiene, and reproductive health rights
        </p>

        <div className="text-gray-700 gap-6 block md:grid grid-cols-2 py-14">
          {ProgramsBlock.slice(0, visiblePrograms).map((program) => (
            <div
              key={program.title}
              className=" reveal block my-6 gap-10 p-4 bg-gray-100"
            >
              <div className="flex justify-center">
                <Image
                  src={program.img}
                  alt={program.title}
                  // layout="responsive"
                  width={500}
                  height={500}
                  className="md:pb-0 pb-4 w-full md:w-fit md:h-[500px]"
                />
              </div>
              <div className="leading-8 my-auto pt-4">
                <h2 className="text-3xl">{program.title}</h2>
                <p className="py-6">{program.shortText}</p>

                <button
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      router.push(`/programs/${program.slug}`);
                    }, 500);
                  }}
                  className="rounded-2xl border mt-8 hover:border-none hover:bg-pnk hover:text-white border-gray-500 px-8 py-3"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {visiblePrograms < ProgramsBlock.length && (
        <div className="pb-10 flex items-center justify-center bg-white">
          <button
            onClick={() => setVisiblePrograms((prev) => prev + 6)}
            className="text-2xl font-bold text-black hover:border-none hover:bg-pnk hover:text-white  mr-4 border-b  border-gray-500 px-8 py-3"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};
