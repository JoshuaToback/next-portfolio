'use client'
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import promptopia from "@/images/promptopia.png";
import worlds from "@/images/worlds.png";
import helmsdale from "@/images/helmsdale.png";
import HTML from "@/images/html5.ico";
import CSS from "@/images/css.png";
import JS from "@/images/js.png";
import ReactImg from "@/images/react.png";
import NextImg from "@/images/next.png";
import NodeImg from "@/images/node.png";
import MongoImg from "@/images/mongodb.png";
import TailwindImg from "@/images/tailwind.png";
import Image from "next/image";

const projectCardStyle = {
  height: "100%", // Set a fixed height for the project cards
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#333",
  padding: "20px",
  borderRadius: "8px",
};

const imageStyle = {
  width: "100%",
  height: "250px", // Set a fixed height for the images
  objectFit: "cover",
  borderRadius: "8px",
};

const ProjectsSection = () => {
  const controls = useAnimation();
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust this threshold as needed
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [controls]);

  return (
    <section className="text-white" id="projects">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            ref={projectRef}
            style={projectCardStyle}
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <Image src={promptopia} width={500} height={500} alt="promptopia" style={imageStyle} />
            <h3 className="text-2xl font-bold my-4">Promptopia</h3>
            <p className="text-lg mb-4">A full stack prompt-sharing app.</p>
            <ul className="flex flex-row justify-center space-x-4 my-4">
              <li>
                <Image src={NextImg} width={100} height={100} alt="icon" />
              </li>
              <li>
                <Image src={TailwindImg} width={100} height={100} alt="icon"/>
              </li>
              <li>
                <Image src={MongoImg} width={100} height={100} alt="icon"/>
              </li>
            </ul>
            <div className="flex flex-row space-x-4">
              <motion.button
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://github.com/JoshuaToback/Promptopia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-800 text-white py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://promptopia-joshuatoback.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </motion.button>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            ref={projectRef}
            style={projectCardStyle}
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <Image src={worlds} width={500} height={500} alt="metaverse" style={imageStyle} />
            <h3 className="text-2xl font-bold my-4">Metaverse</h3>
            <p className="text-lg mb-4">A single-page app powered by framer-motion.</p>
            <ul className="flex flex-row justify-center space-x-4 my-4">
              <li>
                <Image src={NextImg}  alt="icon" width={100} height={100} />
              </li>
              <li>
                <Image src={TailwindImg}  alt="icon" width={100} height={100} />
              </li>
              <li>
                <Image src={ReactImg} alt="icon" width={100} height={100} />
              </li>
            </ul>
            <div className="flex flex-row space-x-4">
              <motion.button
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://github.com/JoshuaToback/metaverse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-800 text-white py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://metaverse-rose-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </motion.button>
            </div>
          </motion.div>

          {/* Project 3 */}

          <motion.div
            ref={projectRef}
            style={projectCardStyle}
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <Image src={helmsdale} width={500} height={500} alt="helmsdale" style={imageStyle} />
            <h3 className="text-2xl font-bold my-4">Helmsdale Media</h3>
            <p className="text-lg mb-4">A digital storefront on a custom domain.</p>
            <ul className="flex flex-row justify-center space-x-4 my-4">
              <li>
                <Image src={ReactImg} width={100} height={100} alt="icon"/>
              </li>
              <li>
                <Image src={CSS} width={100} height={100} alt="icon"/>
              </li>
              <li>
                <Image src={JS} width={100} height={100} alt="icon"/>
              </li>
            </ul>
            <div className="flex flex-row space-x-4">
              <motion.button
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://github.com/JoshuaToback/helmsdalemedia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-800 text-white py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://www.helmsdalemedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
