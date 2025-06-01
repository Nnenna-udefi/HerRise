"use client";
import { Programs } from "@/components/programs";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import React, { useState } from "react";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";

const ProgramsPage = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="grid h-screen place-items-center bg-white">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <Programs setLoading={setLoading} />
      <Footer />
    </div>
  );
};

export default ProgramsPage;
