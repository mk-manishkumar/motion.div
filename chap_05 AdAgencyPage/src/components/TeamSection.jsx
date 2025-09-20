/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

export default function TeamSection({ teamMember }) {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
          {/* Left: Member Info */}
          <motion.div className="text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
            <motion.img src={teamMember.image} alt={teamMember.name} className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-6 border-brand-orange" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{teamMember.name}</h3>
            <p className="text-gray-600">{teamMember.role}</p>
          </motion.div>

          {/* Right: Quote */}
          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
            <blockquote className="text-lg text-gray-700 italic bg-white p-8 rounded-lg border-l-4 border-brand-orange shadow-sm leading-relaxed">"{teamMember.quote}"</blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
