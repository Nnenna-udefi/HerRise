import React from "react";

export const Hero = () => {
  return (
    <div className="relative z-0 pt-20 w-full bg-hero bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex flex-col justify-center items-center h-[700px] text-center px-4">
        <p className="md:text-5xl text-white p-4 text-4xl md:w-1/2 w-full">
          Empowering Women, Educating Communities, Advocating for a Sustainable
          Future
        </p>
      </div>
    </div>
  );
};
