/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

export default function HeroSection({ heroImages }) {
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

  // Animation variants for images
  const imageVariants = {
    hidden: (i) => {
      let xValue;
      if (i === 0) {
        xValue = -50;
      } else if (i === 1) {
        xValue = 50;
      } else {
        xValue = 0;
      }
      return {
        opacity: 0,
        x: xValue,
        y: i === 2 ? 50 : 0,
      };
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay: 0.8 + i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-blue-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" variants={textVariants} initial="hidden" animate="visible" custom={0}>
              Drive growth 🔥 and build your brand with our marketing experts
            </motion.h1>
            <motion.p className="text-xl text-gray-600 leading-relaxed" variants={textVariants} initial="hidden" animate="visible" custom={1}>
              Transform your business with data-driven marketing strategies that deliver measurable results and sustainable growth.
            </motion.p>
            <motion.button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl cursor-pointer" variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              Get started
            </motion.button>
          </div>
          <div className="relative h-96 hidden lg:block">
            {heroImages.map((image, index) => {
              let positionClass = "";
              if (index === 0) {
                positionClass = "top-5 right-24";
              } else if (index === 1) {
                positionClass = "bottom-12 right-5";
              } else {
                positionClass = "top-44 right-48";
              }
              const key = typeof image === "string" ? image : image.id || index;
              return (
                <motion.div key={key} className={`absolute w-32 h-32 ${positionClass}`} variants={imageVariants} initial="hidden" animate="visible" custom={index}>
                  <img src={typeof image === "string" ? image : image.src} alt="Team member" className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
