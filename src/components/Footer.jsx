import React from "react";
import { FaEnvelope, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";

const Footer = () => {
  return (
    <div className="py-12 bg-gray-100 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <motion.div
           variants={fadeIn('up',0.2)}
           initial = "hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
         className="space-y-6 mr-14">
          <div className="flex items-center space-x-2 ">
            <div className="flex items-center space-x-2">
              <img
                className="h-auto w-12 rounded-full border-2 border-gray-600"
                src="/logo.jpg"
                alt="Suman"
              />
              <div>
                <h1 className="text-2xl font-bold text-white-800">MennCare</h1>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
          Empowering men's mental health through support, resources, and community.
          </p>

          <div className="flex space-x-2">
            <a
              href="#"
              className="bg-gray-200 text-green-700 rounded-full size-10 flex items-center justify-center hover:bg-green-800 hover:text-white"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-green-700 rounded-full size-10 flex items-center justify-center hover:bg-green-800 hover:text-white"
            >
              <FaSquareXTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-green-700 rounded-full size-10 flex items-center justify-center hover:bg-green-800 hover:text-white"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-green-700 rounded-full size-10 flex items-center justify-center hover:bg-green-800 hover:text-white"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </motion.div>

        < motion.div
           variants={fadeIn('down',0.2)}
           initial = "hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
        className="space-y-6 ml-14">
          <h3 className="text-xl   font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>


        <motion.div
         variants={fadeIn('up',0.2)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        className="space-y-6 mr-14">
          <h3 className="text-xl   font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline text-gray-700">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-700">
               Terms of Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-700">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700">
                Support center
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
         variants={fadeIn('down',0.2)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        
        className="space-y-6 mr-14">
          <h3 className="text-xl   font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
               <FaMapMarkerAlt className="text-green-700"/>
               <p className="text-gray-700"> 342 Street,City,Country</p>
            </li>
            <li className="flex items-center gap-2">
               <FaPhoneAlt className="text-green-700"/>
               <p className="text-gray-700"> +123 456 7890 </p>
            </li>
            <li className="flex items-center gap-2">
               <FaEnvelope className="text-green-700"/>
               <p className="text-gray-700"> info@menncare.com</p>
            </li>
        
          </ul>
        </motion.div>



      </div>
    </div>
  );
};

export default Footer;
