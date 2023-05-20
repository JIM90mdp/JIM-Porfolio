import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const word = "Juan I. Mascarenhas";

  return (
    <div className="relative h-auto w-[300px] sm:w-[400px] flex text-center flex-col justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-7xl sm:text-9xl font-mono relative z-10 text-green3 "
      >
        JIM
      </motion.div>
      <motion.div className="absolute font-Babylonica text-2xl sm:text-5xl  top-[25%] sm:top-[30%] mt-2 z-20 h-auto w-[300px] sm:w-[400px]">
        {word.split("").map((letter, index) => (
          <motion.div
            key={index}
            style={{ display: "inline", originY: 0.5 }}
            animate={{ y: 0, opacity: 1, rotate: 360 }}
            // whileInView={{y: 0, opacity: 1, rotate: 360 }}
            transition={{ duration: 1.2, delay: index * 0.1 }}
            className="inline-block"
          >
            {letter}
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        initial={{ x: -100, opacity: 0, rotate: -90 }}
        // animate={{ x: 0, opacity: 1, rotate: 0 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          type: "spring",
          stiffness: 100,
        }}
        className="font-mono text-sm sm:text-xl z-20 text-green3"
      >
        Front-End Developer
      </motion.p>
    </div>
  );
};

export default Logo;
