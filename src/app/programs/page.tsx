"use client";

import { client } from "@/sanity/lib/client";
import { Programs } from "@/components/programs";
import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";

const ProgramsPage = () => {
  const [loading, setLoading] = useState(true);
  const [programsData, setProgramsData] = useState([]);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        // Fetch all fields and resolve image sources to absolute asset URLs
        const data = await client.fetch(`*[_type == "program"]{
          title,
          "slug": slug.current,
          "img": img.asset->url,
          shortText
        }`);
        setProgramsData(data);
      } catch (err) {
        console.error("Error pulling database profiles", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="grid h-screen place-items-center bg-white">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      {/* Pass fetched data into component props */}
      <Programs setLoading={setLoading} programsList={programsData} />
    </div>
  );
};

export default ProgramsPage;
