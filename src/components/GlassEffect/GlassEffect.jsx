import React from "react";
import "./GlassEffect.css";
import { motion } from "framer-motion";

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

const Project = ({ title }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <img
        src={require(`../../assets/${projectTitle}.png`)}
        alt={projectTitle}
      />
    </motion.div>
  );
};

export default function GlassEffect({title}) {
  return (
    <div class="container">
      <div class="box">
        <span class="title">
          <Project title={title} />
        </span>
      </div>
    </div>
  );
}
