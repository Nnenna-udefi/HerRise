"use client";
import React, { use } from "react";
import { ProgramDetails } from "@/components/programs/programDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ProgramDetailsPage = ({ params }: PageProps) => {
  // Safe async unwrap of standard params inside Next.js 15+ patterns
  const resolvedParams = use(params);

  return (
    <div>
      <div className="bg-white">
        <ProgramDetails slug={resolvedParams.slug} />
      </div>
    </div>
  );
};

export default ProgramDetailsPage;
