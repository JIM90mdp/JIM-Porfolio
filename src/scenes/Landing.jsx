import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return isAboveLarge ? (
    <section
      id="home"
      className="flex-row md:justify-between md:items-center gap-1 md:h-auto pt-48 pb-48"
    >
      {/* IMAGE SECTION */}
      {/* <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full  before:z-[-1]"
          ></div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div> */}

      <div className="z-30 basis-2/5 mt-5 md:mt-15 flex flex-row items-center justify-center	 ">
        <img
          alt="profile"
          className="saturate-200  z-10 w-full max-w-[300px] md:max-w-[500px]"
          src={require("../assets/profile-image.png")}
        />
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
            <p className="text-6xl font-playfair z-10 text-center ">
              Juan Ignacio {""}
              <span className="xs:relative xs:text-green3 xs:font-semibold z-20 ">
                Mascarenhas
              </span>
              <p className="text-3xl font-playfair text-center m-2">
                Frontend Web Developer
              </p>
            </p>

            <p className="mt-10 mb-7 text-2xl text-center md:text-row ">
              Music Jazz Professor and Front End Web Developer with extensive
              teamwork experience. <br />
              My purpose is to enjoy and value the process while finding
              motivation through every accomplished goal. <br />
              I’m defined by the passion for what I do, the perseverance and
              dedication to overcome difficult situations, the commitment to
              continue learning, the enjoyment of team working and the drive for
              constant self-improvement.
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
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
              className="bg-gradient-rainblue text-green3 rounded-sm  px-7 text-2xl
              hover:bg-blue hover:text-white transition duration-500"
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
    </section>
  ) : (
    <section
      id="home"
      className="flex flex-col md:justify-between md:items-center gap-1 md:h-auto pt-10 pb-48"
    >
      <div className="z-30 basis-2/5 mt-5 md:mt-15 flex flex-col items-center justify-center	 ">
        <img
          alt="profile"
          className="saturate-200  z-10 w-full max-w-[300px] md:max-w-[500px]"
          src={require("../assets/profile-image.png")}
        />
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
            <p className="text-6xl font-playfair z-10 text-center ">
              Juan Ignacio {""}
              <span className="xs:relative xs:text-green3 xs:font-semibold z-20 ">
                Mascarenhas
              </span>
              <p className="text-3xl font-playfair text-center m-2">
                Frontend Web Developer
              </p>
            </p>

            <p className="mt-10 mb-7 text-2xl text-center md:text-row ">
              Music Jazz Professor and Front End Web Developer with extensive
              teamwork experience. <br />
              My purpose is to enjoy and value the process while finding
              motivation through every accomplished goal. <br />
              I’m defined by the passion for what I do, the perseverance and
              dedication to overcome difficult situations, the commitment to
              continue learning, the enjoyment of team working and the drive for
              constant self-improvement.
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
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
              className="bg-gradient-rainblue text-green3 rounded-sm  px-7 text-2xl
              hover:bg-blue hover:text-white transition duration-500"
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
    </section>
  );
};

export default Landing;
