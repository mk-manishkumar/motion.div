/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="mt-20 tracking-wide">
      {/* Heading */}
      <motion.h2 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </motion.h2>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div key={testimonial.user} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.2 }} viewport={{ once: true }} whileHover={{ scale: 1.03 }} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
            <div className="bg-neutral-900 rounded-xl p-6 text-md border border-neutral-800 font-thin shadow-md shadow-black/30 hover:shadow-orange-500/20 transition-all duration-500">
              {/* Quote */}
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="leading-relaxed text-neutral-300">
                “{testimonial.text}”
              </motion.p>

              {/* User Info */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="flex mt-8 items-center">
                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-500 shadow-md shadow-black/40" src={testimonial.image} alt={testimonial.user} />
                <div>
                  <h6 className="text-lg font-semibold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-500">{testimonial.company}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
