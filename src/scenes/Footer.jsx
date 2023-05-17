import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import Logo from "../components/Logo";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section id="skills" className="overflow-hidden relative bg-opaque-black top-[30px]">
      <LineGradient width="w-[100%]" />
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
        <Logo />
        {/* </div> */}
        <SocialMediaIcons />
        <p className="text-md w-[65%] sm:w-auto">©2022 MASCARENHAS. All Rights Reserved.</p>
      </motion.div>
    </section>
  );
};

// const Footer = () => {

//   return (
//     <div
//       className="relative bg-opaque-black top-[15px] sm:top-[30px] w-[100%] p-5 sm:p-0 flex flex-col sm:flex-row justify-evenly items-center text-center"
//     >
//       {/* <div className=" text-xl sm:text-2xl flex flex-col sm:flex-row justify-evenly"> */}
//       {/* <p className="text-2xl text-green3">
//         Juan I. Mascarenhas
//       </p> */}
//       <Logo/>
//       {/* </div> */}
//       <SocialMediaIcons />
//       <p className="text-md">©2022 MASCARENHAS. All Rights Reserved.</p>
//     </div>
//   );
// };

export default Footer;
