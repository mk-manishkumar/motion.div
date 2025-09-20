/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useRef } from "react";

export default function BrandsSection({ brandLogos }) {
  const ref = useRef(null);

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for brand cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section ref={ref} className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-2xl font-semibold text-center text-gray-900 mb-12" variants={headingVariants} initial="hidden" animate="visible">
          Brands we have worked with
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {brandLogos.map((brand, index) => (
            <motion.div key={brand.name} className="text-center font-bold text-lg text-gray-600 p-5 bg-white rounded-lg hover:text-brand-orange cursor-pointer" variants={cardVariants} initial="hidden" animate="visible" custom={index} whileHover="hover">
              {brand.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
