import { motion } from "framer-motion";

const LineGradient = ({ width = "w-full" }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`h-0.5 ${width} bg-gradient-green`}
    ></motion.div>
  );
};

export default LineGradient;
