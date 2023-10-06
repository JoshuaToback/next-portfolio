import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const linkStyles =
    "text-white transition-colors hover:text-blue-500 cursor-pointer select-none";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] text-white">
      <div className="container mx-auto px-12 py-4 flex justify-between items-center">
        <div className="text-white font-light text-xl">JOSHUA TOBACK</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={linkStyles}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={linkStyles}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={linkStyles}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
