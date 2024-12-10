"use client";
import { gallery } from "@/utils/constant";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface GalleryType {
  id: number;
  img: StaticImageData;
}

export const Media = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryType | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const imageId = searchParams.get("imageId")
      ? Number(searchParams.get("imageId"))
      : null;
    if (imageId) {
      const image = gallery.find((item) => item.id === imageId);
      setSelectedImage(image || null);
    } else {
      setSelectedImage(null);
    }
  }, [searchParams]);

  const onImageClick = (image: GalleryType) => {
    router.push(`/media?imageId=${image.id}`, undefined);
  };

  const closeModal = () => {
    setSelectedImage(null);
    router.replace("/media", undefined);
  };
  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=" m-8"
      >
        <div className="h-[300px]  md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white text-6xl tracking-widest px-14">
            HerRise Foundation Media
          </h1>
        </div>
      </motion.div>

      <div className="py-12 px-14 bg-white">
        <h2 className="uppercase text-2xl text-center ">image gallery</h2>
        <div className="my-4 grid md:grid-cols-4 grid-cols-2 gap-3">
          {gallery.map((med) => (
            <div
              key={med.id}
              onClick={() => onImageClick(med)}
              className="cursor-pointer bg-black hover:opacity-90"
            >
              <Link href={`/media/${med.id}`}>
                <Image
                  src={med.img}
                  alt="media"
                  className="md:w-[300px] md:h-[300px] w-full"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
            <Image
              src={selectedImage.img}
              alt="Fullscreen Image"
              width={800}
              height={800}
              className="w-auto h-auto max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
