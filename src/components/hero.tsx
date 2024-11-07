import React from "react";

export const Hero = () => {
  return (
    <div className="bg-gray-300 w-full text-pnk">
      <div className="bg-hero bg-cover bg-no-repeat w-full h-[700px]">
        <div className="flex flex-col gap-4 pt-96 md:px-12 px-4">
          <p className="text-5xl w-2/3">
            A world where every girl is empowered to rise, lead, and shape a
            sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};
