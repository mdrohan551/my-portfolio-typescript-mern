import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Top Section: Logo */}
        <div className="flex items-center gap-2">
          {/* RO Box */}
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              type: "spring",
              stiffness: 120,
            }}
            className="bg-primary px-2 py-2 rounded-lg "
          >
            <div className="relative inline-block">
              <span className="text-white font-jakarta-Extrabold text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl glow">
                RO
              </span>

              {/* Rotating dot */}
              <motion.div
                className="
                  w-2 h-1 md:w-4 md:h-2 
                  bg-primary rounded-md 
                  absolute 
                  top-4 md:top-7 lg:top-8
                  right-0
                  md:-right-1 lg:right-0
                  origin-[-6px_center] md:origin-[-15px_center]
                "
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* HAN */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut",
              type: "spring",
              stiffness: 90,
            }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-jakarta-Regular tracking-widest glow"
          >
            HAN
            {/* WEB DEVELOPER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-xs sm:text-sm md:text-xs tracking-[0.2em] text-black"
            >
              WEB DEVELOPER
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
