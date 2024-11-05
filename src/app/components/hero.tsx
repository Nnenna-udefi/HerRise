import React from "react";

export const Hero = () => {
  return (
    <div className=" text-white w-full">
      <div className="bg-hero bg-cover bg-no-repeat p-8 h-[500px]">
        <div className="flex flex-col gap-4 mt-60 p-3">
          <h1 className="uppercase text-lg">HerRise FOUNDATION</h1>
          <p className="text-5xl w-3/4">
            A world where every girl is empowered to rise, lead, and shape a
            sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};
