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
            alt="html"
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={CSS}
            width={100}
            height={100}
            alt="css"
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={JS}
            width={100}
            height={100}
            alt="js"
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={ReactImg}
            width={100}
            height={100}
            alt="react"
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={NextImg}
            width={100}
            height={100}
            alt="next"
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={TailwindImg}
            width={100}
            height={100}
            alt="tailwind"
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={NodeImg}
            width={100}
            height={100}
            alt="node"
            className="bg-slate-100 p-2 rounded-lg"
          />
        </li>
        <li className="mx-2 sm:mx-3">
          <Image
            src={MongoImg}
            width={100}
            height={100}
            alt="mongo"
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
        <Image
          src={joshua}
          width={700}
          height={700}
          alt="Joshua"
          className="rounded-xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            I am a passionate front-end developer with a keen eye for design and
            a strong commitment to creating exceptional user experiences. With a
            background in web development and a knack for turning ideas into
            visually appealing and functional websites, I am constantly
            exploring the latest technologies and trends in the field. My goal
            is to craft seamless, responsive, and user-friendly interfaces that
            not only meet the needs of clients but also exceed the expectations
            of users. I am currently seeking new opportunities to contribute my
            skills and creativity to innovative projects. Let's collaborate to
            bring your web vision to life!
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
