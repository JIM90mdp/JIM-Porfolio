import LineGradient from "../components/LineGradient";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  // return isAboveLarge ? (
  return (
    <section
      id="home"
      className="sm:h-[790px] sm:flex-row sm:justify-between bg-opaque-black h-[100%] sm:w-[100%] relative top-[30px] w-[105%]"
    >
      <LineGradient width="w-[100%]" />
      <div className="sm:relative sm:top-[40px] z-30 sm:w-[100%] sm:h-[100%] flex flex-col items-center justify-center sm:pt-0 pt-9 ">
        {/* IMAGE */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            alt="profile"
            className="relative top-[-100px] saturate-200 z-10 max-w-[500px]"
            src={require("../assets/profile-image.png")}
          />
        </motion.div> */}
        <div className="flex flex-col items-center justify-center ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center justify-evenly ">
              <h4 className="py-4 text-xl">
                Hello <span className="green">I'am</span>
              </h4>
              <h1 className="text-4xl font-serif tracking-wider text-center pb-3 text-green3 ">
                Juan I. Mascarenhas
              </h1>

              <h3 className=" text-xl text-green3 ">Frontend Web Developer </h3>

              <p className="sm:mt-10 mt-3 mb-7 sm:text-2xl text-ml text-center w-[70%] font-mono">
                Design and development of applications specializing in: <br />
                JavaScript, React, Nextjs and Tailwind
                <br />
                and proficient in Angular, TypeScript, MUI and Bootstrap.
                <br />I focus on developing modular and scalable designs and
                applications that meet the client's needs using agile
                methodologies to reach the final product. This allows me to
                develop communication, negotiation, and adaptability skills.
              </p>
            </div>
          </motion.div>

          {/* CALL TO ACTIONS */}

          <motion.div
            className="flex justify-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="text-green3 rounded-sm pt-5 text-2xl hover:text-green2 transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Feel free to contact me
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
      <LineGradient width="w-[100%]" className="bottom-0 relative" />
    </section>
  );
  // : (
  //   <section
  //     id="home"
  //     className="flex-row md:justify-between md:items-center gap-1 pt-5 pb-5 top-[15px] w-[105%] p-5 h-[auto]  relative bg-opaque-black "
  //   >
  //     <div className="z-30 basis-2/5 mt-5 md:mt-15 flex flex-col items-center justify-center	 ">
  //       <img
  //         alt="profile"
  //         className="saturate-200  z-10 w-full max-w-[300px] md:max-w-[500px]"
  //         src={require("../assets/profile-image.png")}
  //       />
  //       <div className="flex flex-col items-center justify-center ">
  //         <motion.div
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.5 }}
  //           transition={{ duration: 0.5 }}
  //           variants={{
  //             hidden: { opacity: 0, x: -50 },
  //             visible: { opacity: 1, x: 0 },
  //           }}
  //         >
  //           <p className="text-[22px] font-playfair z-10 text-center ">
  //             Juan Ignacio {""}
  //             <span className=" text-green3 z-20">Mascarenhas</span>
  //             <p className="text-lg font-playfair text-semibold text-green3 text-center m-2">
  //               Frontend Web Developer
  //             </p>
  //           </p>

  //           <p className="mt-5 mb-7 text-lg text-center md:text-row ">
  //             Design and development of applications specializing in JavaScript,
  //             React, Next, Angular, Tailwind, and MUI.
  //             <br />
  //             Proficient in TypeScript and Bootstrap.
  //             <br />I focus on developing modular and scalable designs and
  //             applications that meet the client's needs using agile
  //             methodologies to reach the final product. This allows me to
  //             develop communication, negotiation, and adaptability skills.
  //           </p>
  //         </motion.div>

  //         {/* CALL TO ACTIONS */}

  //         <motion.div
  //           className="flex m-1 justify-center md:justify-start"
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.5 }}
  //           transition={{ delay: 0.2, duration: 0.5 }}
  //           variants={{
  //             hidden: { opacity: 0, x: -50 },
  //             visible: { opacity: 1, x: 0 },
  //           }}
  //         >
  //           <AnchorLink
  //             className="bg-gradient-rainblue text-green3 rounded-sm hover:text-white transition duration-500"
  //             onClick={() => setSelectedPage("contact")}
  //             href="#contact"
  //           >
  //             Feel free to contact me
  //           </AnchorLink>
  //         </motion.div>

  //         <motion.div
  //           className="flex mt-5 justify-center md:justify-start"
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: true, amount: 0.5 }}
  //           transition={{ delay: 0.4, duration: 0.5 }}
  //           variants={{
  //             hidden: { opacity: 0, x: -50 },
  //             visible: { opacity: 1, x: 0 },
  //           }}
  //         >
  //           <SocialMediaIcons />
  //         </motion.div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Landing;
