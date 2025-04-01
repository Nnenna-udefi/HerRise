import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div className="relative z-0 pt-10 w-full bg-hero bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      <div className="relative flex flex-col justify-center items-center h-[700px] text-center px-4">
        <p className="md:text-5xl uppercase font-bold font-recoleta tracking-widest leading-10 text-white px-4 text-4xl md:w-[60%] w-full">
          Empowering Women, Educating Communities
        </p>
        <p className="text-white text-2xl py-4">
          Advocating for a Sustainable Future
        </p>

        <div className="mt-6">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="rounded-2xl text-2xl hover:border-none hover:bg-pnk hover:text-white  mr-4 border bg-white w-full text-black  border-gray-500 px-8 py-3">
              Join Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
