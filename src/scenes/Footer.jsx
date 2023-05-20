import SocialMediaIcons from "../components/SocialMediaIcons";
import LineGradient from "../components/LineGradient";
import Logo from "../components/Logo";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section
      id="skills"
      className="overflow-hidden relative bg-opaque-black top-[30px] "
    >
      <LineGradient width="w-[100%]" />
      {/* Footer content */}
      <motion.div
        className="top-[15px] sm:top-[30px] p-5 sm:p-0 flex flex-col sm:flex-row justify-evenly items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="h-auto p-5">
          <Logo /> {/* Render the logo component */}
        </div>
        <SocialMediaIcons /> {/* Render the social media icons component */}
        <p className="text-md w-[65%] sm:w-auto">
          ©2022 MASCARENHAS. All Rights Reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Footer;
