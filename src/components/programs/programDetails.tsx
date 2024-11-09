import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ProgramsBlock } from "@/utils/constant";

export const ProgramDetails = () => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();
  console.log("Current slug:", slug);

  // Find the specific program based on the slug from the URL
  const program = ProgramsBlock.find((p) => p.slug === slug);

  if (!program) {
    return <p>Loading...</p>; // Optional loading state
  }

  return (
    <div className="pt-24">
      <section className="relative h-[300px] md:h-[500px]">
        <div className="absolute md:block hidden inset-0 bg-hero2 bg-left-bottom bg-cover opacity-50"></div>
        <div className="absolute md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white text-6xl tracking-widest px-14">
            Programs
          </h1>
        </div>
      </section>

      <section className="md:px-14 px-6 py-20">
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

        <div className="md:grid grid-cols-2 place-items-center my-6">
          {program.imgGallery.map((imgG, index) => (
            <div key={index} className="md:w-[500px] w-full">
              <Image
                src={imgG}
                alt={program.title}
                className="w-full md:h-[500px] my-2"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
