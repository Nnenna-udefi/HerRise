import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ProgramsBlock } from "@/utils/constant";
import { motion } from "framer-motion";

export const ProgramDetails = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const program = ProgramsBlock.find((p) => p.slug === slug);

  if (!program) {
    return <p>Loading...</p>;
  }
  return (
    <div className="pt-24 bg-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="m-8 bg-hero"
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
        className="md:px-14 px-6 py-20"
      >
        <h2 className="text-5xl text-gray-800">{program.title}</h2>

        {program?.fullText?.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-8 my-4">
            {paragraph}
          </p>
        ))}

        <ul className="list-disc list-inside text-lg text-gray-700 my-4">
          {program?.fullText?.lists?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="text-lg text-gray-700 leading-8 my-4">
          {program?.fullText?.conclusion}
        </p>

        <div className="lg:grid grid-cols-2 place-items-center my-6">
          {program.imgGallery.map((imgG, index) => (
            <div key={index} className="md:w-[500px] w-full">
              <Image
                src={imgG}
                alt={program.title}
                layout="responsive"
                width={500}
                height={500}
                className=" my-2"
              />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
