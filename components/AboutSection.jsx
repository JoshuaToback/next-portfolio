"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TabButton from "./TabButton";

import joshua from "@/images/joshua.jpg";

import HTML from "@/images/html5.ico";
import CSS from "@/images/css.png";
import JS from "@/images/js.png";
import ReactImg from "@/images/react.png";
import NextImg from "@/images/next.png";
import NodeImg from "@/images/node.png";
import MongoImg from "@/images/mongodb.png";
import TailwindImg from "@/images/tailwind.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap gap-4">
        <li className="mx-2 sm:mx-3">
          <Image
            src={HTML}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={CSS}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={JS}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={ReactImg}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={NextImg}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={TailwindImg}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={NodeImg}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={MongoImg}
            width={100}
            height={100}
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-xl text-center font-semibold">
        <li>B.A in Arts</li>
        <li>Elon University</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <ul className="text-xl text-center font-semibold">
        <li>Full Stack Web Development</li>
        <li>University of North Carolina - Chapel Hill </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  // Define the animation properties
  const fadeInAnimation = {
    hidden: { opacity: 0, x: 100 }, // Start with opacity 0 and shifted to the right
    visible: { opacity: 1, x: 0, transition: { delay: 0.25 } }, // End with opacity 1 and original position with a 1-second delay
  };

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <motion.section
      className="text-white"
      id="about"
      initial="hidden" // Initial animation state
      animate="visible" // Animation state when component is mounted
      variants={fadeInAnimation} // Use the animation properties defined above
    >
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src={joshua} width={700} height={700} className="rounded-xl"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            I am a full stack web developer with a constant drive to learn and
            grow as a programmer. I have experience working with React.js,
            Next.js, and many React libraries, as well as Back end technologies
            like Node.js and MongoDB. I believe that my passion for web
            development and collaborating with a team can benefit any project.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInAnimation}
              key={tab} // Key prop for React to re-render the content when the tab changes
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
