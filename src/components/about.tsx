"use client";
import Image from "next/image";
import React from "react";
import Founder from "@/assets/images/founder.jpg";
import { motion } from "framer-motion";
import Volunteer from "@/assets/images/volunteers.jpg";
import IG24 from "@/assets/images/girl-child-2024/14.jpeg";
import model from "@/assets/images/modle-girls-2023/1.jpeg";
import model2 from "@/assets/images/modle-girls-2023/2.jpeg";
import period from "@/assets/images/lets-talk-period/8.jpeg";
import vision from "@/assets/images/girl-child-2024/5.jpeg";

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
  return (
    <div className="px-10 md:px-20 md:text-xl text-base  bg-white tracking-wider pt-32 text-gray-700">
      <motion.div
        variants={container}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        id="who-we-are"
      >
        <div>
          <div className="my-8 md:mx-8 mx-0 bg-hero">
            <div className="md:h-[300px] h-[200px]  md:inset-10 inset-0 bg-pnk bg-opacity-90 flex items-center justify-center">
              <h1 className="text-white md:text-6xl text-4xl text-center tracking-widest px-14">
                About Us
              </h1>
            </div>
          </div>
          <p className="pb-4 font-bold">
            <span className="text-3xl font-bold">F</span>ounded in 2022, HerRise
            Foundation champions gender equality, quality education, and climate
            action. Through community-driven programs and initiatives, we work
            towards a world where women and girls are empowered to lead and
            thrive.
          </p>
          <p>
            HerRise Foundation empowers girls in underserved communities to
            become confident leaders and changemakers. Through programs focused
            on quality education (SDG 4), gender equality (SDG 5), and climate
            action (SDG 13), we break down barriers, shatter taboos, and equip
            girls with the skills to lead, innovate, and build sustainable
            futures for themselves and their communities. Our mission is to
            inspire resilience, leadership, and purpose in every girl we reach.
          </p>
        </div>
        <div className="py-10">
          <div>
            <div className="lg:flex block gap-10">
              <div>
                <h2 className="font-bold text-3xl lg:text-5xl my-4">
                  Our <span className="underline">Mission</span>
                </h2>
                <p className=" px-4 py-8 ">
                  HerRise Foundation is dedicated to creating opportunities,
                  uplifting women and girls, and addressing environmental
                  challenges through impactful initiatives rooted in the
                  Sustainable Development Goals (SDGs).
                </p>
              </div>
              <Image
                src={period}
                alt="im"
                width={500}
                height={300}
                className="h-[500px]"
              />
            </div>
          </div>
          <div className="lg:flex justify-between block gap-10 py-10">
            <div className="">
              <h2 className="font-bold text-3xl lg:text-5xl my-4">
                Our <span className="underline">Vision</span>{" "}
              </h2>

              <p className="px-4 py-8 bg-[#977759] text-white rounded-md">
                A world where every girl is empowered to rise, lead, and shape a
                sustainable future.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-3xl lg:text-5xl my-4">
                Our Core <span className="underline">Values</span>
              </h2>

              <div className=" ">
                <p className="bg-[#98AEB6] rounded-md text-white px-4 py-8">
                  Empowerment, Inclusivity, Resilience. Co-operation and
                  Collaboration
                </p>

                <p className="bg-[#98AEB6] rounded-md text-white px-4 py-8 mt-2">
                  {" "}
                  At HerRise Foundation, we believe in empowering every girl to
                  reach her full potential, fostering inclusivity to create
                  equal opportunities, and building resilience to overcome
                  challenges and drive lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="pb-10">
            <h2 className="font-bold text-3xl lg:text-6xl text-center my-4">
              Our Thematic <span className="underline">Areas</span>
            </h2>

            <ul className="list-disc">
              <li>Education and Leadership Development</li>
              <li>Gender Equality and Advocacy</li>
              <li>Menstrual Hygiene and Education</li>
              <li>Sexual and Reproductive Health Rights</li>
              <li>Climate Action and Environmental Stewardship</li>
            </ul>
          </div>

          <div className="py-10">
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
                  &quot;Empowering women and girls through advocacy, leadership
                  programs, and community initiatives.&quot;
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
        </div>
      </motion.div>

      <div className="text-left my-12" id="founder">
        <h2 className="font-bold text-3xl lg:text-6xl text-center my-4">
          Meet the <span className="underline">Founder</span>
        </h2>
        <div className="md:flex justify-between gap-12">
          <div className="md:w-[500px] w-full">
            <Image
              src={Founder}
              alt="Founder"
              layout="responsive"
              width={500}
              height={500}
              className="w-full h-full border rounded-lg border-r-8 border-gray-500"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="tracking-wider md:w-[50%] w-full"
          >
            <p className="leading-8">
              Nwankwo Praise Chidiebube is a passionate advocate for gender
              equality and youth empowerment, driven by a deep-seated commitment
              to creating positive change in her community. As the founder of
              HerRise Foundation, she has dedicated her life to empowering young
              women and girls in underserved areas, equipping them with the
              tools and knowledge needed to become confident leaders and
              changemakers.
            </p>
            <p className="leading-8 my-4">
              Born and raised in Ebonyi State, Nigeria, Praise&#39;s journey
              into activism began at a young age, sparked by her own experiences
              navigating the challenges faced by girls in her community. Her
              academic excellence in Mass Communication, where she graduated as
              the third-best student from Ebonyi State University, fueled her
              desire to leverage the power of communication for social impact.
            </p>
            <p className="leading-8">
              Through HerRise Foundation, established to address the pressing
              issues of gender inequality, menstrual hygiene, sexual and
              reproductive health rights, and climate action, Praise has
              spearheaded numerous initiatives that resonate deeply with her
              mission. Notable campaigns, such as &quot;Pad Up a Girl
              Child&quot; and various leadership summits, reflect her dedication
              to breaking taboos, fostering open dialogue, and inspiring a new
              generation of resilient young women.
            </p>
          </motion.div>
        </div>
        <p className="mt-3 leading-8">
          Praise&#39;s emotional connection to HerRise Foundation is rooted in
          her unwavering belief that every girl deserves the opportunity to rise
          and lead. She recognizes the transformative power of education and
          support, having seen firsthand the impact of her work on the lives of
          countless young girls.
        </p>
        <p className="my-3 tracking-wider leading-8">
          By providing them with a platform to share their stories and
          aspirations, she aims to shatter societal limitations and ignite their
          potential. As a Climate Change Ambassador for ECoverse Green
          Initiative and an advocate for the Sustainable Development Goals,
          Praise&#39;s vision extends beyond her immediate community.
        </p>
        <p className="leading-8">
          She envisions a world where every girl is empowered to take charge of
          her future, where barriers are dismantled, and where the voices of
          young women are amplified in the conversations that shape our society.
          With a heart dedicated to service and a spirit fueled by resilience,
          Praise continues to champion the cause of young women through HerRise
          Foundation, believing that together, they can build a sustainable and
          equitable future for all.
        </p>
      </div>

      <div className="py-6  flex items-center flex-col bg-white">
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
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
