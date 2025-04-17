import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import IndiImg from "../assets/indi.webp";
import MediImg from "../assets/medi.jpeg";
import SelfImg from "../assets/self.jpg"
import StressImg from "../assets/stress.jpeg"
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";

const Services = () => {
  return (
    <div id="services" className="bg-gray-300">
      <div className="pt-30 px-4 container mx-auto">
        <motion.div
         variants={fadeIn('up',0.2)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        
        className="text-center space-y-4">
          <h1 className="text-5xl font-bold font-serif text-gray-800">
            What can we do together
          </h1>
          <p className="md:w-1/2 mx-auto text-xl">
            Our services are crafted to help you build mental strength, reduce
            stress, and lead a balanced life.
          </p>
        </motion.div>

        {/* services category */}

        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList
             variants={fadeIn('up',0.3)}
             initial = "hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
            
            className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>Individual Counseling</Tab>
              <Tab>Meditation Sessions</Tab>
              <Tab>Self-Confidence</Tab>
              <Tab>Stress Management</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div
               variants={fadeIn('right',0.2)}
               initial = "hidden"
               whileInView={"show"}
               viewport={{once:false, amount:0.7}}
              className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="md:w-1/2 bg-white rounded-lg p-12 ">
                  <h3 className="text-3xl font-semibold text-green-700 mb-4">
                    Individual Counseling
                  </h3>
                  <p className="mb-6">
                    One-on-one sessions with licensed therapists to help you
                    manage stress, anxiety, depression, and personal challenges.
                  </p>
                  <h4 className="text-xl font-semibold mb-2">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Personalized mental health support</li>
                    <li>Safe and confidential environment</li>
                    <li>Helps build emotional resilience</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={IndiImg}
                    alt=""
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>


            <TabPanel>
              <motion.div
              
              variants={fadeIn('left',0.3)}
              initial = "hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              
              className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="md:w-1/2 bg-white rounded-lg p-12 ">
                  <h3 className="text-3xl font-semibold text-green-700 mb-4">
                    Meditation Sessions
                  </h3>
                  <p className="mb-6">
                    Guided meditation sessions designed to help you reconnect
                    with yourself, cultivate mindfulness, and find inner peace.
                    Whether you're a beginner or experienced, our sessions are
                    crafted to promote relaxation and emotional clarity.
                  </p>
                  <h4 className="text-xl font-semibold mb-2">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Reduces stress and anxiety </li>
                    <li>Enhances self-awareness and mindfulness</li>
                    <li>Improves concentration and focus</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={MediImg}
                    alt=""
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
              
              variants={fadeIn('up',0.2)}
              initial = "hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              
              className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="md:w-1/2 bg-white rounded-lg p-12 ">
                  <h3 className="text-3xl font-semibold text-green-700 mb-4">
                    Self-Confidence
                  </h3>
                  <p className="mb-6">
                    Short sessions designed to help you overcome self-doubt,
                    boost self-esteem, and build a confident mindset in everyday
                    life.
                  </p>
                  <h4 className="text-xl font-semibold mb-2">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Builds a strong and positive self-image</li>
                    <li>Boosts motivation and personal growth</li>
                    <li>Improves communication skills</li>
                  </ul>
                </div>
                <div className="md:w-1/2 ">
                  <img
                    src={SelfImg}
                    alt=""
                    className="w-full h-full rounded-2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>


            <TabPanel>
              <motion.div
               variants={fadeIn('down',0.2)}
               initial = "hidden"
               whileInView={"show"}
               viewport={{once:false, amount:0.7}}
              
              className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="md:w-1/2 bg-white rounded-lg p-12 ">
                  <h3 className="text-3xl font-semibold text-green-700 mb-4">
                  Stress Management
                  </h3>
                  <p className="mb-6">
                  Effective techniques and practices to help you manage stress, stay calm, and maintain emotional balance in daily life.
                  </p>
                  <h4 className="text-xl font-semibold mb-2">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Reduces anxiety and mental fatigue</li>
                    <li>Improves sleep and relaxation</li>
                    <li>Promotes overall well-being and clarity</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={StressImg}
                    alt=""
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
            
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
