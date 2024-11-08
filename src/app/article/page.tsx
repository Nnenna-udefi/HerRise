import { Article } from "@/components/article";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import React from "react";

const ArticlePage = () => {
  return (
    <div>
      <Nav />
      <Article />
      <Footer />
    </div>
  );
};

export default ArticlePage;
