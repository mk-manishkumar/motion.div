/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase inline-block">
          Feature
        </motion.span>

        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your code</span>
        </motion.h2>
      </div>

      {/* Features grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex flex-wrap mt-10 lg:mt-20"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.text}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="w-full sm:w-1/2 lg:w-1/3"
          >
            <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }} className="flex group">
              <div className="flex mx-6 h-12 w-12 p-3 bg-neutral-900 text-orange-700 justify-center items-center rounded-full shadow-md shadow-orange-900/30 group-hover:shadow-orange-500/40 transition-shadow">{feature.icon}</div>
              <div>
                <h5 className="mt-1 mb-4 text-xl font-semibold tracking-tight">{feature.text}</h5>
                <p className="text-md p-2 mb-16 text-neutral-500 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSection;
