import React from 'react'
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";



const Priseing = () => {

  const handleScrollToContact = () =>{
    const targetElement = document.getElementById('contact')
    if(targetElement){
      window.scrollTo({
        top:targetElement.offsetTop,
        behavior: "smooth"
      })
    }
  }


  return (
    <section id="priseing" className="bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <motion.div
     variants={fadeIn('right',0.2)}
     initial = "hidden"
     whileInView={"show"}
     viewport={{once:false, amount:0.7}}
    >
    <h2 className="text-4xl font-bold text-green-700 mb-4">Our Pricing Plans</h2>
    <p className="text-gray-600 mb-10">
      Choose a plan that suits your needs. No hidden charges, just clear and flexible pricing.
    </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Basic Plan */}
      <motion.div
       variants={fadeIn('up',0.2)}
       initial = "hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}
      
      className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h3>
        <p className="text-4xl font-bold text-green-600 mb-4">₹499<span className="text-lg text-gray-500">/session</span></p>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>1-on-1 Counseling Session</li>
          <li>30 Minutes Duration</li>
          <li>Basic Mental Health Support</li>
        </ul>
        <button
        onClick={handleScrollToContact}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full font-medium">
          Get Started
        </button>
      </motion.div>

      {/* Standard Plan */}
      <motion.div
       variants={fadeIn('down',0.2)}
       initial = "hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}
      
      className="bg-white rounded-xl shadow-lg p-8 border-4 border-green-500">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Standard</h3>
        <p className="text-4xl font-bold text-green-600 mb-4">₹999<span className="text-lg text-gray-500">/session</span></p>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>Licensed Therapist Session</li>
          <li>60 Minutes Duration</li>
          <li>Mindfulness & Stress Coaching</li>
        </ul>
        <button
         onClick={handleScrollToContact}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full font-medium">
          Choose Plan
        </button>
      </motion.div>

      {/* Premium Plan */}
      <motion.div
       variants={fadeIn('up',0.2)}
       initial = "hidden"
       whileInView={"show"}
       viewport={{once:false, amount:0.7}}
      
      className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium</h3>
        <p className="text-4xl font-bold text-green-600 mb-4">₹1499<span className="text-lg text-gray-500">/session</span></p>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>Full 90-min Therapy + Follow-up</li>
          <li>Personal Growth & Confidence Coaching</li>
          <li>Priority Booking Support</li>
        </ul>
        <button 
        onClick={handleScrollToContact}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full font-medium">
          Book Now
        </button>
      </motion.div>
    </div>
  </div>
</section>

  )
}

export default Priseing