import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { ProgramsBlock } from "@/utils/constant";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const ProgramDetails = ({ slug }: { slug: string }) => {
  const [program, setProgram] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSingleProgram() {
      try {
        const query = `*[_type == "program" && slug.current == $slug][0]{
          title,
          fullTextParagraphs,
          lists,
          conclusion,
          imgGallery
        }`;
        const data = await client.fetch(query, { slug });
        setProgram(data);
      } catch (err) {
        console.error("Error retrieving custom profiles", err);
      } finally {
        setLoading(false);
      }
    }
    if (slug) getSingleProgram();
  }, [slug]);

  if (loading)
    return <p className="text-center py-20">Loading profile data...</p>;
  if (!program) return <p className="text-center py-20">Program not found.</p>;
  return (
    <div className="pt-24 bg-white">
      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="m-8 bg-hero"
      >
        <div className="md:h-[300px] h-[200px] md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white md:text-6xl text-4xl tracking-widest px-14">
            Programs
          </h1>
        </div>
      </motion.section> */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:px-14 px-6 py-20"
      >
        <h2 className="text-5xl text-gray-800">{program.title}</h2>

        {program.fullTextParagraphs?.map((paragraph: string, index: number) => (
          <p key={index} className="text-lg text-gray-700 leading-8 my-4">
            {paragraph}
          </p>
        ))}

        {program.lists && (
          <ul className="list-disc list-inside text-lg text-gray-700 my-4">
            {program.lists.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {program.conclusion && (
          <p className="text-lg text-gray-700 leading-8 my-4">
            {program.conclusion}
          </p>
        )}

        {/* Handling Asset Reference Arrays smoothly with urlFor builder */}
        {program.imgGallery && (
          <div className="lg:grid grid-cols-2 place-items-center my-6 gap-4">
            {program.imgGallery.map((imgG: any, index: number) => (
              <div key={index} className="md:w-[500px] w-full">
                <Image
                  src={urlFor(imgG).url() || "/placeholder.jpg"}
                  alt={`${program.title} Gallery element ${index}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="my-2 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </motion.section>
    </div>
  );
};
