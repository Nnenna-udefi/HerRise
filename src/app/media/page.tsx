import { Media } from "@/components/media";

import React, { Suspense } from "react";

const MediaPage = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading Media...</p>}>
        <div className="bg-white">
          <Media />
        </div>
      </Suspense>
    </div>
  );
};

export default MediaPage;
