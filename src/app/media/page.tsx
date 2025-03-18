import { Footer } from "@/components/footer";
import { Media } from "@/components/media";
import { Nav } from "@/components/nav";
import React, { Suspense } from "react";

const MediaPage = () => {
  return (
    <div>
      <Nav />
      <Suspense fallback={<p>Loading Media...</p>}>
        <div className="bg-white">
          <Media />
        </div>
      </Suspense>

      <Footer />
    </div>
  );
};

export default MediaPage;
