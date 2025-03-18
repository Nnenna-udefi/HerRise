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
  const [visibleImage, setVisibleImage] = useState(20);
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

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = gallery.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    // Ensure looping through images
    if (newIndex >= gallery.length) newIndex = 0;
    if (newIndex < 0) newIndex = gallery.length - 1;

    setSelectedImage(gallery[newIndex]);
    router.push(`/media?imageId=${gallery[newIndex].id}`, undefined);
  };

  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="m-8"
      >
        <div className="h-[200px] md:h-[200px]  md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white md:text-6xl text-4xl tracking-widest px-14">
            HerRise Foundation Media
          </h1>
        </div>
      </motion.div>

      <div className="py-12 px-14 bg-white">
        <h2 className="uppercase text-2xl text-center ">image gallery</h2>
        <div className="my-4 grid md:grid-cols-3 grid-cols-2 gap-3">
          {gallery.slice(0, visibleImage).map((med) => (
            <div
              key={med.id}
              onClick={() => onImageClick(med)}
              className="cursor-pointer bg-black hover:opacity-90 w-full"
            >
              <Link href={`/media/${med.id}`}>
                <Image
                  src={med.img}
                  alt="media"
                  width={500}
                  height={500}
                  className="md:h-[300px] w-full"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {visibleImage < gallery.length && (
        <div className="mb-10 flex items-center justify-center">
          <button
            onClick={() => setVisibleImage((prev) => prev + 20)}
            className="rounded-2xl hover:border-none hover:bg-pnk hover:text-white  mr-4 border  border-gray-500 px-8 py-3"
          >
            See More
          </button>
        </div>
      )}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative flex items-center justify-center">
            {/* Left Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 text-white text-3xl bg-gray-800 bg-opacity-60 p-3 rounded-full hover:bg-opacity-90"
            >
              &#10094;
            </button>

            {/* Image Display */}
            <div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                X
              </button>
              <Image
                src={selectedImage.img}
                alt="Fullscreen Image"
                width={800}
                height={800}
                className="w-auto h-auto max-w-full max-h-[600px]"
              />
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 text-white text-3xl bg-gray-800 bg-opacity-60 p-3 rounded-full hover:bg-opacity-90"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
