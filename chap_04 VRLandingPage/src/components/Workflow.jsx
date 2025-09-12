/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section className="mt-20">
      {/* Heading */}
      <motion.h2 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow.</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center mt-12">
        {/* Left Image */}
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" className="rounded-lg shadow-lg border border-neutral-800 hover:scale-[1.02] transition-transform duration-500" />
        </motion.div>

        {/* Checklist */}
        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="flex mb-12 items-start">
              {/* Icon */}
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 flex justify-center items-center rounded-full shadow-md shadow-green-700/30">
                <CheckCircle2 />
              </div>
              {/* Text */}
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
