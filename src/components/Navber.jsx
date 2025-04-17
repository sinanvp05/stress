import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { TbMenu3 } from "react-icons/tb";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMennu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const section = ["home", "services", "about", "priseing", "testimonial"];
    const scrollPosition = window.scrollY + 100;
    section.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <ul className="font-medium  flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-2 md:p-0">
      <li className="">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMennu();
            handleScrollTo("home");
          }}
          href="#home"
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMennu();
            handleScrollTo("services");
          }}
          className={`text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMennu();
            handleScrollTo("about");
          }}
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#priseing"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMennu();
            handleScrollTo("priseing");
          }}
          className={`text-white ${
            activeSection === "priseing" ? "isActive" : ""
          }`}
        >
          Priseing
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#testimonial"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMennu();
            handleScrollTo("testimonial");
          }}
          className={`text-white ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-gray-900 text-white py-8 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex  justify-between items-center h-full">
        {/* logo */}
        <div className="flex items-center space-x-4">
          <img
            className="h-14 w-14 rounded-full border-2 border-gray-600"
            src="/logo.jpg"
            alt="Suman"
          />
          <div>
            <h1 className="text-3xl font-medium text-white-800">MennCare</h1>
          </div>
        </div>

        {/* navitems */}

        <div className="hidden md:flex flex-grow justify-center">
          {navLinks}
        </div>

        {/* button */}

        <div className="hidden md:block">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("contact");
            }}
            href="#contact"
            className="text-white bg-green-700 hover:bg-green-800 px-4 py-4 rounded-2xl transform transition duration-300 scale-110 "
          >
            Contact Us
          </a>
        </div>

        {/* humberger menu */}

        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : " "
            }`}
          >
            <TbMenu3 className="size-8" />
          </button>
        </div>
      </div>

      {/* mobail nav items */}

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3.5">
            {navLinks.props.children}
            <li className="py-2 mb-2 ">
              <a
                href="#contact"
                className="text-white  bg-green-700 hover:bg-green-800 px-3 py-2 rounded-2xl "
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMennu();
                  handleScrollTo("contact");
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navber;
