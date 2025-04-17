import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import { motion } from "motion/react"
import { fadeIn } from "../utilis/animationVariants";



const testimonials = [
  {
    name: "Amit john",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: review1,
  },
  {
    name: "John Sawa",
    location: "Los Angeles, CA",
    review:
      "I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-green-100 py-12  px-6 md:px-10">
      <div className="container mx-auto pb-20">
        <motion.div
         variants={fadeIn('left',0.2)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        
        className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto">
            Real stories from people who have taken the journey to better mental
            health.
          </p>
        </motion.div>

        < motion.div
         variants={fadeIn('right',0.2)}
         initial = "hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.7}}
        
        className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonials.map((testimonials, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsChatQuoteFill className="size-12 text-green-600" />
              </div>

              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{testimonials.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonials.image}
                    alt=""
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-green-700">{testimonials.name}</p>
                    <p className="text-gray-600">{testimonials.location}</p>
                   
                    </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;




