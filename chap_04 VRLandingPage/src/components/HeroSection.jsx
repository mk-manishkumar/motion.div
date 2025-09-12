/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Title */}
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span>VirtualR build tools</span> <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">for developers</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
      </motion.p>

      {/* Buttons */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center my-10">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">
          Start for free
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="py-3 px-4 mx-3 rounded-md border cursor-pointer">
          Documentation
        </motion.button>
      </motion.div>

      {/* Videos */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.3 }} className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
        {[video1, video2].map((vid, idx) => (
          <motion.video
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-md shadow-orange-400 mx-2 my-4"
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;
