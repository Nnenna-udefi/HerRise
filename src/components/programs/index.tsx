import { ProgramsBlock } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Programs = () => {
  return (
    <div className="pt-24">
      <section className=" m-8">
        <div className="h-[300px] md:h-[500px] md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white text-6xl tracking-widest px-14">
            Programs
          </h1>
        </div>
      </section>

      <section className="md:px-14 flex flex-col justify-center items-center px-6 py-20 bg-white">
        <p className="text-center leading-12 md:w-[70%] w-full text-2xl">
          Our programs aim at tackling some of the most pressing issues facing
          girls today, from quality education and gender equality to climate
          action, menstrual hygiene, and reproductive health rights
        </p>

        <div className="text-gray-700 py-14">
          {ProgramsBlock.map((program) => (
            <div
              key={program.title}
              className="md:grid grid-cols-2 block my-6 gap-10 p-2 bg-gray-100"
            >
              <Image
                src={program.img}
                alt={program.title}
                className="w-full md:pb-0 pb-4 md:h-[500px]"
              />
              <div className="leading-8 my-auto ">
                <h2 className="text-3xl">{program.title}</h2>
                <p className="py-6">{program.shortText}</p>
                <Link href={`/programs/${program.slug}`}>
                  <button className="rounded-2xl border mt-8 border-gray-500 px-8 py-3">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
