/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function DarkCTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Larger range for noticeable parallax

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation variants for SVG
  const svgVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            <motion.h2 className="text-3xl lg:text-4xl font-bold" variants={textVariants} initial="hidden" animate="visible" custom={0}>
              Make your business more profitable
            </motion.h2>
            <motion.p className="text-xl text-gray-300 leading-relaxed" variants={textVariants} initial="hidden" animate="visible" custom={1}>
              Unlock your business potential with our proven marketing strategies that have helped companies increase revenue by an average of 150%.
            </motion.p>
            <motion.button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 cursor-pointer" variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              Learn more
            </motion.button>
          </div>
          <motion.div
            className="flex justify-center"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            style={{ y }} // Apply parallax effect
          >
            <svg width="200" height="120" viewBox="0 0 200 120" className="text-brand-orange">
              <polyline fill="none" stroke="currentColor" strokeWidth="3" points="20,100 60,80 100,40 140,20 180,10" />
              <circle cx="20" cy="100" r="4" fill="currentColor" />
              <circle cx="60" cy="80" r="4" fill="currentColor" />
              <circle cx="100" cy="40" r="4" fill="currentColor" />
              <circle cx="140" cy="20" r="4" fill="currentColor" />
              <circle cx="180" cy="10" r="4" fill="currentColor" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
