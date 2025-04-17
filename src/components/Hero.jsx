import React from "react";
import HeroImg from "../assets/Hero.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";


const Hero = () => {
  return (
    <section id="home" className=" bg-gray-900 text-gray-300 px-4 md:px-20 pt-35 pb-12">
      <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between  gap-12  ">
        {/* left Side */}
        <motion.div 
        
        variants={fadeIn('down',0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        
        className="md:w-1/2">
          <h1 className="text-4xl font-sans font-bold mb-6 leading-snug ">
            Empowering your mind with tools for balance and wellness.
          </h1>
          <p className="text-xl mb-12">
            ✨we believe that mental health is just as important as physical
            health. Whether you're feeling overwhelmed, anxious, or simply
            looking to find peace in your daily life, we're here to support you.
          </p>
           
          <button className="flex gap-2 items-center  bg-green-700 hover:bg-green-800 px-6 py-4 rounded-2xl text-white">
            <a href="#contact">
              <span className="">Get Started</span>
            </a>
            <FaRegArrowAltCircleRight />
          </button>
        </motion.div>

        {/* right sight */}
        <motion.div
         variants={fadeIn('left',0.2)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        
        
        className="md:w-1/2">
          <img src={HeroImg} alt="Hero" className="w-full h-auto object-contain" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
