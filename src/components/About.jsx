import React, { useState } from "react";
import ThumImg from "../assets/thum.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";


const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-gray-900 pt-20 pb-16 text-gray-300 mt-24">
      <div className="container mx-auto">
        <motion.div 
          variants={fadeIn('right',0.2)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
        className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={ThumImg}
                  alt=""
                  className="w-full md:h-[400px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-700 p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <FaRegCirclePlay className="size-12" />
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          {/* right side */}
          <div className="md:w-1/2 w-full text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 leading-snug ">
                     Individual Consult And Therapy
                    </h2>
                    <p className="text-lg mb-6 leading-relaxed">
                    We provide personalized therapy sessions tailored to your unique needs.Whether you're dealing with stress, anxiety, or seeking personal growth,our licensed professionals are here to support your journey.
                    </p>
                     
                    <button className=" flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300">
                      <a href="#contact"
                      
                      >
                        <span className=""> Get Started</span>
                      </a>
                      <FaRegArrowAltCircleRight />
                    </button>
          
          </div>
        </motion.div>

        {isVideoPlaying && (

        <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DulNz2CkoHI?si=WWX3uRQMm9AHn-Ss"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

         <button onClick={handleCloseVideo}  className="absolute top-4 right-4 text-2xl text-white cursor-pointer">X</button>

          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default About;
