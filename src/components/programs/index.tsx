import { ProgramsBlock } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Programs = () => {
  return (
    <div className="pt-24">
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-hero2 bg-left-bottom bg-cover opacity-50"></div>
        <div className="absolute inset-10 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white text-6xl tracking-widest px-14">
            Programs
          </h1>
        </div>
      </section>

      <section className="px-14 py-20">
        <p className="text-center leading-8 text-2xl">
          Our programs aim at tackling some of the most pressing issues facing
          girls today, from quality education and gender equality to climate
          action, menstrual hygiene, and reproductive health rights
        </p>

        <div className="text-gray-700 py-14">
          {ProgramsBlock.map((program) => (
            <div
              key={program.title}
              className="md:grid grid-cols-2 block my-6 gap-10 bg-gray-100"
            >
              <Image
                src={program.img}
                alt={program.title}
                className="w-full h-[500px]"
              />
              <div className="leading-8 my-auto ">
                <h2 className="text-5xl">{program.title}</h2>
                <p className="py-6">{program.shortText}</p>
                <Link href={`/programs/${encodeURIComponent(program.title)}`}>
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