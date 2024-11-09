import { ProgramsBlock } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProgramDetails = () => {
  const router = useRouter();
  const { title } = router.query;

  // Find the specific program based on the title from the URL
  const program = ProgramsBlock.find((p) => p.title === title);

  if (!program) {
    return <p>Loading...</p>; // Optional loading state
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-hero2 bg-left-bottom bg-cover opacity-50"></div>
        <div className="absolute inset-10 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white text-6xl tracking-widest px-14">
            Programs
          </h1>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="px-14 py-20">
        <h2 className="text-5xl text-gray-800">{program.title}</h2>
        <Image
          src={program.img}
          alt={program.title}
          className="w-full h-[500px] my-6"
        />

        {/* Render paragraphs */}
        {program?.fullText?.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-8 my-4">
            {paragraph}
          </p>
        ))}

        {/* Render list */}
        <ul className="list-disc list-inside text-lg text-gray-700 my-4">
          {program?.fullText?.lists.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Render conclusion */}
        <p className="text-lg text-gray-700 leading-8 my-4">
          {program?.fullText?.conclusion}
        </p>
      </section>
    </div>
  );
};

export default ProgramDetails;
