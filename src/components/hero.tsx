import React from "react";

export const Hero = () => {
  return (
    <div className=" pt-20 w-full ">
      <div className="relative bg-hero2 bg-right  bg-cover bg-no-repeat w-full h-[700px]">
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="relative flex flex-col gap-4 pt-96 md:px-12 px-4">
          <p className="md:text-5xl bg-pnk text-white p-4 text-4xl w-full md:w-2/3">
            A world where every girl is empowered to rise, lead, and shape a
            sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};
