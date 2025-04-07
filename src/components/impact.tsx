import {
  CalendarDaysIcon,
  Handshake,
  LucideUserRoundPlus,
  Users2Icon,
} from "lucide-react";
import React from "react";
import CountUp from "react-countup";

export const Impact = () => {
  return (
    <div className="text-black">
      <h2 className="md:text-6xl py-4 text-4xl font-bold text-center font-recoleta">
        Our Impact
      </h2>
      <div className="grid font-bold text-xl md:text-2xl grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-6 transition-all duration-300 hover:scale-105 rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
          <Users2Icon className="text-pnk" size={50} />
          <h3 className="text-center">Women & Girls Impacted</h3>
          <p>
            <CountUp end={8000} duration={5} />+
          </p>
        </div>
        <div className="bg-gray-100 p-6 transition-all duration-300 hover:scale-105 rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
          <CalendarDaysIcon className="text-pnk" size={50} />
          <h3 className="text-center">Years of Advocacy</h3>
          <p>
            <CountUp end={2} duration={2} />+
          </p>
        </div>
        <div className="bg-gray-100 p-6 transition-all duration-300 hover:scale-105 rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
          <LucideUserRoundPlus className="text-pnk" size={50} />
          <h3 className="text-center">Outreach Programs</h3>
          <p>
            <CountUp end={30} duration={2.5} />+
          </p>
        </div>
        <div className="bg-gray-100 p-6 transition-all duration-300 hover:scale-105 rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
          <Handshake className="text-pnk" size={50} />
          <h3 className="text-center">Volunteers Engaged</h3>
          <p>
            {" "}
            <CountUp end={50} duration={2} />+
          </p>
        </div>
      </div>
    </div>
  );
};
