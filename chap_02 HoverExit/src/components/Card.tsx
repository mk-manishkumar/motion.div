import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Card = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" whileHover={{ boxShadow: "0 8px 48px 8px rgba(186,68,255,0.16)", scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 70, damping: 14 }} className="w-80 h-[29rem] backdrop-blur-[8px] bg-white/60 border border-violet-100 shadow-xl overflow-hidden rounded-3xl p-6 flex flex-col gap-5 relative">

      {/* Gradient effect */}
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        whileHover={{ opacity: 1, scale: 1.08 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg,rgba(186,68,255,0.14) 0%,rgba(42,201,246,0.14) 78%)",
        }}
      />

      {/* Close button */}
      <motion.button onClick={() => setIsOpen(false)} initial={{ scale: 0, rotate: 90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ delay: 0.6, type: "spring", stiffness: 220 }} whileHover={{ rotate: 90, scale: 1.2, backgroundColor: "#f1eefd" }} className="absolute top-4 right-5 z-20 rounded-full p-2 bg-white/70 shadow hover:scale-110 transition" type="button">
        <RxCross2 size={20} color="#a78bfa" />
      </motion.button>
      
      <div className="relative z-10">
        {/* Floating icon */}
        <motion.div initial={{ y: -20, scale: 0 }} animate={{ y: 0, scale: 1 }} transition={{ delay: 0.4, type: "spring", stiffness: 250 }} className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-300 shadow-lg rounded-full grid place-content-center">
          <span className="text-white font-bold text-3xl">🎉</span>
        </motion.div>
        <h2 className="font-bold text-lg text-purple-600 text-center">Accountability UI Components</h2>
        <p className="text-neutral-700 mt-2 text-center font-medium">
          A collection of beautiful UI components—
          <br />
          let's get on with it.
        </p>
      </div>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="flex items-center justify-center relative z-10">
        <motion.button
          whileHover={{
            backgroundColor: "#9147ff",
            color: "#fff",
            scale: 1.05,
            boxShadow: "0 2px 12px 1px #9147ff44",
          }}
          whileTap={{ scale: 0.98 }}
          className="transition font-bold tracking-wide bg-white/90 border border-purple-200 text-purple-700 p-3 rounded-xl flex items-center gap-3 shadow hover:bg-purple-100"
          type="button"
        >
          <span>Accountability</span>
          <RxCross2 size={15} color="#a78bfa" />
        </motion.button>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="bg-gradient-to-br from-purple-100/70 via-white/70 to-blue-100/70 flex-1 rounded-xl border border-dashed border-purple-200 relative z-10 mt-2">
        <div className="absolute inset-0 h-full w-full mix-blend-multiply pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default Card;
