"use client";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ProgramDetails } from "@/components/programs/programDetails";

import React from "react";

const ProgramDetailsPage = () => {
  return (
    <div>
      <Nav />
      <ProgramDetails />
      <Footer />
    </div>
  );
};

export default ProgramDetailsPage;
