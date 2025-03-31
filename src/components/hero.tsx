import React from "react";

export const Hero = () => {
  return (
    <div className=" pt-20 w-full bg-hero bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className=" inset-0 bg-black/50"></div>

      <div className=" flex flex-col justify-center items-center h-[500px] text-center px-4">
        <p className="md:text-5xl bg-black/50 text-white p-4 text-4xl md:w-1/2 w-full drop-shadow-lg">
          Empowering Women, Educating Communities, Advocating for a Sustainable
          Future
        </p>
      </div>
    </div>
  );
};
