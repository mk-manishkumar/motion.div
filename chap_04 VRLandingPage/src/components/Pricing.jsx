/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <section className="mt-20">
      {/* Heading */}
      <motion.h2 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <motion.div key={option.title} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.2 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-10 border border-neutral-700 rounded-xl bg-neutral-900/40 backdrop-blur-lg shadow-md shadow-black/40 hover:shadow-orange-500/30 transition-all duration-500">
              {/* Title */}
              <p className="text-4xl mb-8 font-semibold flex items-center">
                {option.title}
                {option.title === "Pro" && <span className="ml-2 text-sm px-2 py-1 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text font-bold uppercase tracking-wide">(Most Popular)</span>}
              </p>

              {/* Price */}
              <p className="mb-8">
                <span className="text-5xl font-bold mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>

              {/* Features */}
              <ul>
                {option.features.map((feature, i) => (
                  <motion.li key={feature} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }} className="mt-6 flex items-center text-neutral-300">
                    <CheckCircle2 className="text-green-400" />
                    <span className="ml-2">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgb(124, 45, 18)", // tailwind orange-900
                  color: "#fff",
                }}
                transition={{ duration: 0.3 }}
                className="inline-flex justify-center items-center w-full h-12 p-5 mt-12 text-xl border border-orange-900 rounded-lg tracking-tight transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
