/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

export default function ServicesSection({ services }) {
  return (
    <section id="service" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
          <motion.div className="lg:col-span-2 space-y-8" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Services we provide</h2>
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div key={service.title} className="flex gap-5 items-start" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.5 }} viewport={{ once: true }}>
                  <motion.div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" dangerouslySetInnerHTML={{ __html: service.icon }} whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 300 }} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop" alt="Person with laptop" className="w-96 h-96 rounded-full object-cover border-8 border-brand-orange" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
