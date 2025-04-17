import React from "react";
import BgImg from "../assets/BG.avif";
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";

const Workingstep = () => {
  return (
    <div
      className="relative bg-cover bg-center py-12  "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="absolute inset-0 bg-black/80 z-10 "> </div>

      <div className="relative z-20 container mx-auto px-4 py-20">
        <motion.div
         variants={fadeIn('up',0.2)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        
        className="text-gray-300 text-center mb-20">
          <h2 className="text-4xl  font-bold font-serif mb-4">
            How It's Works
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto ">
            We guide you through a simple, step-by-step process to help you get
            the support and care you need with ease and confidence.
          </p>
        </motion.div>

        <motion.div
         variants={fadeIn('up',0.3)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white size-14 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a From</h3>
            <p className="my-2 text-lg text-gray-700 text-justify">
              Step-1: Start by completing a quick form with your basic information and
              what you're looking for.
            </p>
          </div>

          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white size-14 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">Get Matched</h3>
            <p className="my-2 text-lg text-gray-700 text-justify">
              Step-2: Start by completing a quick form with your basic information and
              what you're looking for.
            </p>
          </div>

          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white size-14 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">Schedule a Session</h3>
            <p className="my-2 text-lg text-gray-700 text-justify">
            Take the first step towards your mental wellness journey. Book a session with our licensed professionals at a time that works best for you. Whether you need individual counseling, stress relief guidance, or confidence building — we’re here to support you every step of the way.

            </p>
          </div>



        </motion.div>
      </div>
    </div>
  );
};

export default Workingstep;
