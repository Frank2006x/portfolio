import React from "react";
import { FlipWords } from "./Flipwords";
import { motion } from "motion/react";
const Herotext = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const words = [
    "Curiosity",
    "Creativity",
    "Passion",
    "Challenges",
    "Learning",
    "Imagination",
    "Innovation",
  ];
  return (
    <div
      className="z-10 mt-20 text-center md:mt-40 
        md:text-left rounded-3xl bg-clip-text"
    >
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi I'm Frank Xavio
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-300"
          >
            Future Engineer
            <br />
            Fueled by
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              className={"text-8xl text-white font-black"}
              duration={800}
              words={words}
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Learning without Limits
          </motion.p>
        </div>
      </div>
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Frank
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Future Engineer
            <br />
            Fueled by
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Learning without Limits
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Herotext;
