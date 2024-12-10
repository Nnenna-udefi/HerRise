import Link from "next/link";
import React from "react";
import im1 from "@/assets/images/menstral-hygiene-2023/8.jpeg";
import im2 from "@/assets/images/girl-child-2023/1.jpeg";
import im3 from "@/assets/images/girl-child-2024/1.jpeg";
import im4 from "@/assets/images/lets-talk-period/2.jpeg";
import im5 from "@/assets/images/menstral-hygiene-2023/3.jpeg";
import im6 from "@/assets/images/modle-girls-2023/1.jpeg";
import Image from "next/image";

export const HomeContent = () => {
  return (
    <div className="bg-white">
      <div className="md:flex justify-between gap-10 text-gray-800 px-12 py-20">
        <p className="md:text-5xl text-4xl tracking-widest font-bold leading-12">
          HerRise FOUNDATION
        </p>
        <div className="md:pt-24 pt-12 w-full md:w-[50%] font-roboto">
          <p className="tracking-widest leading-7 md:text-xl text-lg">
            Since 2022, HerRise Foundation has been committed to advancing
            gender equality, quality education, and climate action.
          </p>
          <Link href="/about">
            <button className="rounded-2xl border mt-8 border-gray-500 px-8 py-3">
              Learn More
            </button>
          </Link>
        </div>
      </div>

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
          className=" w-full h-full"
        />
        <Image
          src={im3}
          alt="collage"
          width={300}
          layout="responsive"
          height={300}
          className=" w-full h-full"
        />
        <Image
          src={im4}
          alt="collage"
          layout="responsive"
          width={300}
          height={300}
          className=" w-full h-full"
        />
        <Image
          src={im5}
          alt="collage"
          layout="responsive"
          width={300}
          height={300}
          className=" w-full h-full"
        />
        <Image
          src={im6}
          alt="collage"
          layout="responsive"
          width={300}
          height={300}
          className=" w-full h-full"
        />
      </div>
    </div>
  );
};
