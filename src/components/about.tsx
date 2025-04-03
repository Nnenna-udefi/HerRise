"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Founder from "@/assets/images/founder.jpg";
import { motion } from "framer-motion";
import Volunteer from "@/assets/images/volunteers.jpg";
import period from "@/assets/images/lets-talk-period/8.jpeg";
import { setupRevealOnScroll } from "./utils/revealOnScroll";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const About = () => {
  useEffect(() => {
    const cleanup = setupRevealOnScroll();
    return cleanup;
  }, []);
  return (
    <div className="bg-white text-black">
      <div className="px-10 md:px-20 md:text-xl text-base  bg-white tracking-wider pt-32 text-gray-700">
        <motion.div
          variants={container}
          viewport={{ once: true }}
          initial="hidden"
          animate="show"
          id="who-we-are"
        >
          <div className="reveal">
            <div className="my-8 md:mx-8 mx-0 bg-hero">
              <div className="md:h-[300px] h-[200px]  md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
                <h1 className="text-white md:text-6xl text-4xl text-center tracking-widest px-14">
                  About Us
                </h1>
              </div>
            </div>
            <p className="pb-4 font-bold">
              <span className="text-3xl font-bold">F</span>ounded in 2022,
              HerRise Foundation champions gender equality, quality education,
              and climate action. Through community-driven programs and
              initiatives, we work towards a world where women and girls are
              empowered to lead and thrive.
            </p>
            <p>
              HerRise Foundation empowers girls in underserved communities to
              become confident leaders and changemakers. Through programs
              focused on quality education (SDG 4), gender equality (SDG 5), and
              climate action (SDG 13), we break down barriers, shatter taboos,
              and equip girls with the skills to lead, innovate, and build
              sustainable futures for themselves and their communities. Our
              mission is to inspire resilience, leadership, and purpose in every
              girl we reach.
            </p>
          </div>
          <motion.div className="py-10 reveal">
            <div>
              <div className="lg:flex block gap-10">
                <div>
                  <h2 className="font-bold text-3xl lg:text-5xl my-4">
                    Our <span className="underline">Mission</span>
                  </h2>
                  <p className=" px-4 py-8 leading-relaxed">
                    HerRise Foundation is dedicated to creating opportunities,
                    uplifting women and girls, and addressing environmental
                    challenges through impactful initiatives rooted in the
                    Sustainable Development Goals (SDGs).
                  </p>
                </div>
                <Image
                  src={period}
                  alt="mission"
                  width={500}
                  height={300}
                  className="md:h-[500px] h-[300px] rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="lg:flex justify-between gap-10 py-10 bg-gray-50">
              {/* Vision Section */}
              <div className="lg:w-1/2">
                <h2 className="font-bold text-3xl lg:text-5xl my-4 text-primary">
                  Our <span className="underline">Vision</span>
                </h2>

                <p className="px-6 py-8 bg-gradient-to-r from-[#977759] to-[#8C6B49] text-white rounded-md shadow-lg">
                  A world where every girl is empowered to rise, lead, and shape
                  a sustainable future.
                </p>
              </div>

              {/* Core Values Section */}
              <div className="lg:w-1/2">
                <h2 className="font-bold text-3xl lg:text-5xl my-4 text-primary">
                  Our Core <span className="underline">Values</span>
                </h2>

                <div className="space-y-4">
                  <p className="bg-gradient-to-r from-[#959fa3] to-[#646a6b] rounded-md text-white px-6 py-8 shadow-md">
                    Empowerment, Inclusivity, Resilience, Co-operation, and
                    Collaboration.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="">
            <div className="pb-10 reveal">
              <h2 className="font-bold text-3xl lg:text-6xl text-center my-4">
                Our Thematic <span className="underline">Areas</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center lg:grid-cols-3 gap-6">
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl mb-2">
                    Education and Leadership Development
                  </h3>
                  <p>
                    Empowering individuals with the skills and knowledge to lead
                    and thrive in society.
                  </p>
                </div>

                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl mb-2">
                    Gender Equality and Advocacy
                  </h3>
                  <p>
                    Promoting equal opportunities and rights for all genders in
                    society.
                  </p>
                </div>

                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl mb-2">
                    Menstrual Hygiene and Education
                  </h3>
                  <p>
                    Creating awareness and providing access to menstrual hygiene
                    solutions.
                  </p>
                </div>

                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl mb-2">
                    Sexual and Reproductive Health Rights
                  </h3>
                  <p>
                    Ensuring access to sexual health services and advocating for
                    reproductive rights.
                  </p>
                </div>

                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl mb-2">
                    Climate Action and Environmental Stewardship
                  </h3>
                  <p>
                    Fostering sustainable practices to protect the environment
                    for future generations.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-10 reveal">
              <h2 className="font-bold text-3xl lg:text-6xl text-center my-4">
                Focus <span className="underline">Areas</span>
              </h2>
              <div className="flex gap-10 md:flex-row flex-col text-base lg:text-xl py-4">
                <div className="bg-[#8d8888] text-white px-4 py-8 rounded-md text-center">
                  <p>SDG 4 – Quality Education</p>
                  <p className="pt-4">
                    &quot;We work to ensure inclusive, equitable education for
                    all, focusing on lifelong learning opportunities.”
                  </p>
                </div>

                <div className="bg-[#008080] text-white px-4 py-8 rounded-md text-center">
                  <p> SDG 5 – Gender Equality</p>
                  <p className="pt-4">
                    &quot;Empowering women and girls through advocacy,
                    leadership programs, and community initiatives.&quot;
                  </p>
                </div>

                <div className="bg-[#977759] text-white px-4 py-8 rounded-md text-center">
                  <p>SDG 13 – Climate Action</p>
                  <p className="pt-4">
                    &quot;Taking action on climate change through community
                    education and sustainable practices.”
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="text-left py-12 reveal" id="founder"></div>
      </div>

      <motion.section
        className="mt-16 text-center reveal"
        id="founder"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-3xl lg:text-6xl text-center my-4">
          Meet the <span className="underline">Founder</span>
        </h2>
        <Image
          src={Founder}
          alt="Founder"
          width={300}
          height={300}
          className="mx-auto  rounded-full shadow-lg hover:scale-105 transition-all"
        />
        <h2 className="text-2xl font-bold mt-4">Nwankwo Praise Chidiebube</h2>
        <p className="text-gray-600 md:text-xl text-base mt-2 max-w-xl mx-auto">
          Praise is a passionate advocate for gender equality and youth
          empowerment, dedicated to equipping young women with the knowledge and
          tools to become confident leaders. As the founder of HerRise
          Foundation, she has led impactful initiatives addressing gender
          inequality, menstrual hygiene, sexual and reproductive health rights,
          and climate action. With a background in Mass Communication from
          Ebonyi State University, she leverages the power of storytelling to
          inspire change. Her unwavering belief in the potential of every girl
          drives her mission to break societal barriers and foster a generation
          of empowered young women.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="https://www.linkedin.com/in/praise-chidiebube-nwankwo-8a582523a/"
            className="text-blue-500 text-2xl hover:text-blue-700"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://www.instagram.com/the_global_praiz/"
            className="text-pink-500 text-2xl hover:text-pink-700"
          >
            <Instagram />
          </Link>
        </div>
      </motion.section>

      <div className="py-6 reveal  flex items-center flex-col bg-white">
        <h2 className="font-bold text-3xl lg:text-6xl text-center my-4">
          Meet Our <span className="underline">Volunteers</span>
        </h2>
        <div className="md:w-[800px] w-full">
          <Image
            src={Volunteer}
            alt="volunteer"
            layout="responsive"
            width={500}
            height={500}
            className="w-full shadow-lg"
          />
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoS_wJtgZddOwUNETzdiHdINg9dsf8zYOQOgvIJfqby6NguQ/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="rounded-2xl shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105 text-2xl hover:border-none hover:bg-pnk hover:text-white border bg-white w-full text-black  border-gray-500 px-6 py-2">
              Join Us As Volunteers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
