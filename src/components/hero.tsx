import React from "react";
import heroImg from "@/assets/images/klingAI.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" pt-20 w-full ">
      <div className="  bg-right mt-5  bg-cover bg-no-repeat w-full h-[700px]">
        <div className=" flex flex-col md:flex-row gap-4 pt-20 md:px-12 px-4">
          <p className="md:text-5xl bg-pnk text-white p-4 flex items-center text-4xl w-full md:w-2/3">
            Empowering Women, Educating Communities, Advocating for a
            Sustainable Future
          </p>
          <Image src={heroImg} alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
