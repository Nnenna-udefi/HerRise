import Image from "next/image";
import React from "react";
import Founder from "../../../public/images/founder.jpg";
import HeroImage from "../../../public/images/sexual-productivity/3.jpeg";

export const About = () => {
  return (
    <div className="p-10 text-center tracking-wider text-gray-700">
      <Image src={HeroImage} alt="hero" className="w-full h-[500px]" />
      <div>
        <h1 className="font-bold text-4xl my-4">About Us</h1>

        <p>
          HerRise Foundation empowers girls in underserved communities to become
          confident leaders and changemakers. Through programs focused on
          quality education (SDG 4), gender equality (SDG 5), and climate action
          (SDG 13), we break down barriers, shatter taboos, and equip girls with
          the skills to lead, innovate, and build sustainable futures for
          themselves and their communities. Our mission is to inspire
          resilience, leadership, and purpose in every girl we reach.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-2xl my-4">Mission statement</h2>

        <p>
          Empowering girls to lead, innovate, and drive sustainable change in
          their communities.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-2xl my-4">Vision statement </h2>

        <p>
          A world where every girl is empowered to rise, lead, and shape a
          sustainable future.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-2xl my-4">Our core values</h2>

        <p className="font-semibold">
          Empowerment, Inclusivity, Resilience. Co-operation and Collaboration
        </p>

        <p>
          {" "}
          At HerRise Foundation, we believe in empowering every girl to reach
          her full potential, fostering inclusivity to create equal
          opportunities, and building resilience to overcome challenges and
          drive lasting change.
        </p>

        <div>
          <h2 className="font-bold text-2xl my-4">Our Thematic Areas</h2>

          <ul>
            <li>Education and Leadership Development</li>
            <li>Gender Equality and Advocacy</li>
            <li>Menstrual Hygiene and Education</li>
            <li>Sexual and Reproductive Health Rights</li>
            <li>Climate Action and Environmental Stewardship</li>
          </ul>
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-5xl text-center mt-8 mb-4">Meet the Founder</h2>
        <div className="md:flex justify-between gap-12">
          <Image
            src={Founder}
            alt="Founder"
            width={300}
            height={100}
            className="w-full h-full border rounded-lg border-r-8 border-pnk"
          />
          <p className="tracking-wider">
            Nwankwo Praise Chidiebube is a passionate advocate for gender
            equality and youth empowerment, driven by a deep-seated commitment
            to creating positive change in her community. As the founder of
            HerRise Foundation, she has dedicated her life to empowering young
            women and girls in underserved areas, equipping them with the tools
            and knowledge needed to become confident leaders and changemakers.
            Born and raised in Ebonyi State, Nigeria, Praise&#39;s journey into
            activism began at a young age, sparked by her own experiences
            navigating the challenges faced by girls in her community. Her
            academic excellence in Mass Communication, where she graduated as
            the third-best student from Ebonyi State University, fueled her
            desire to leverage the power of communication for social impact.
            Through HerRise Foundation, established to address the pressing
            issues of gender inequality, menstrual hygiene, sexual and
            reproductive health rights, and climate action, Praise has
            spearheaded numerous initiatives that resonate deeply with her
            mission. Notable campaigns, such as &quot;Pad Up a Girl Child&quot;
            and various leadership summits, reflect her dedication to breaking
            taboos, fostering open dialogue, and inspiring a new generation of
            resilient young women. Praise&#39;s emotional connection to HerRise
            Foundation is rooted in her unwavering belief that every girl
            deserves the opportunity to rise and lead. She recognizes the
            transformative power of education and support, having seen firsthand
            the impact of her work on the lives of countless young girls.
          </p>
        </div>
        <p className="my-3 tracking-wider">
          By providing them with a platform to share their stories and
          aspirations, she aims to shatter societal limitations and ignite their
          potential. As a Climate Change Ambassador for ECoverse Green
          Initiative and an advocate for the Sustainable Development Goals,
          Praise&#39;s vision extends beyond her immediate community. She
          envisions a world where every girl is empowered to take charge of her
          future, where barriers are dismantled, and where the voices of young
          women are amplified in the conversations that shape our society. With
          a heart dedicated to service and a spirit fueled by resilience, Praise
          continues to champion the cause of young women through HerRise
          Foundation, believing that together, they can build a sustainable and
          equitable future for all.
        </p>
      </div>
    </div>
  );
};