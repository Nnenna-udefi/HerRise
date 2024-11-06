import Link from "next/link";
import React from "react";
import im1 from "../../../public/images/menstral-hygiene-2023/8.jpeg";
import im2 from "../../../public/images/girl-child-2023/1.jpeg";
import im3 from "../../../public/images/girl-child-2024/1.jpeg";
import im4 from "../../../public/images/lets-talk-period/2.jpeg";
import im5 from "../../../public/images/menstral-hygiene-2023/3.jpeg";
import im6 from "../../../public/images/modle-girls-2023/1.jpeg";
import Image from "next/image";

export const HomeContent = () => {
  return (
    <div className="">
      <div className="md:flex gap-10 text-gray-800 px-12 py-20">
        <p className="text-5xl tracking-widest font-bold leading-12">
          HerRise FOUNDATION
        </p>
        <div className="pt-24 w-full md:w-[50%] font-roboto">
          <p className="tracking-widest leading-7">
            HerRise Foundation empowers girls in underserved communities to
            become confident leaders and changemakers. Through programs focused
            on quality education (SDG 4), gender equality (SDG 5), and climate
            action (SDG 13)...
          </p>
          <Link href="/about">
            <button className="rounded-2xl border mt-8 border-gray-500 px-8 py-3">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <Image
          src={im1}
          alt="collage"
          width={300}
          height={300}
          className="w-1/3"
        />
        <Image
          src={im2}
          alt="collage"
          width={300}
          height={300}
          className="w-1/3"
        />
        <Image
          src={im3}
          alt="collage"
          width={300}
          height={300}
          className="w-1/3"
        />
        <Image
          src={im4}
          alt="collage"
          width={300}
          height={300}
          className="w-1/3"
        />
        <Image
          src={im5}
          alt="collage"
          width={300}
          height={300}
          className="w-1/3"
        />
        <Image
          src={im6}
          alt="collage"
          width={300}
          height={300}
          className="w-1/3"
        />
      </div>
    </div>
  );
};
