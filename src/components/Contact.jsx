
import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    if (!name || !email || !phone || !country || !message) {
      e.preventDefault(); // stop form submission if invalid
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    toast.success("Appointment submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  }

  return (
    <div className='bg-gray-900 flex items-center justify-center py-28 px-6' id="contact">
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>

          {/* Left Side */}
          <motion.div
           variants={fadeIn('right',0.2)}
           initial = "hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
          className='space-y-8'>
            <h2 className='text-4xl font-bold font-sans mb-4 text-white'>Make an appointment</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
              {[
                {
                  icon: <FaUserAlt className='text-green-700' />,
                  title: "24 Hours Services",
                  desc: "Ready to take a step towards better mental wellness?"
                },
                {
                  icon: <MdMessage className='text-green-700' />,
                  title: "Expert Therapist",
                  desc: "Professional therapists helping you heal, grow, and feel balanced again."
                },
                {
                  icon: <IoCall className='text-green-700' />,
                  title: "Let’s Talk",
                  desc: "Expert support for anxiety, stress, growth, and emotional well-being."
                },
                {
                  icon: <VscWorkspaceTrusted className='text-green-700' />,
                  title: "Trusted Clinic",
                  desc: "Safe, professional, and trusted care for your mental health journey."
                }
              ].map((item, idx) => (
                <div key={idx} className='flex items-start gap-4'>
                  <div className='flex items-center justify-center rounded-full bg-gray-700 p-3'>
                    {item.icon}
                  </div>
                  <div className='space-y-1'>
                    <h3 className='text-lg font-medium'>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
          
          variants={fadeIn('left',0.2)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          
          className='space-y-8 p-8 bg-white shadow-2xl rounded-md'>
            <h3 className='text-2xl font-bold mb-4'>Book Appointment</h3>
            <form
              action="https://getform.io/f/aroydvwb"
              method="POST"
              onSubmit={handleSubmit}
              className='space-y-8'
            >
              <div className='flex sm:flex-row flex-col gap-4'>
                <input
                  name='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                  placeholder='Name'
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 shadow'
                />
                <input
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder='Email Address'
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 shadow'
                />
              </div>

              <div className='flex sm:flex-row flex-col gap-4'>
                <input
                  name='contact'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type="tel"
                  placeholder='Contact Number'
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 shadow'
                />
                <input
                  name='country'
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  type="text"
                  placeholder='Country'
                  className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 shadow'
                />
              </div>

              <textarea
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows="5"
                className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 shadow'
                placeholder='Write your message...'
              ></textarea>

              <button
                type='submit'
                className='w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition'
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  )
}

export default Contact

