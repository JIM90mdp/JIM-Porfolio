import LineGradient from "../components/LineGradient";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { greetings } from "../data/portfolio";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="sm:h-[790px] sm:flex-row sm:justify-between bg-opaque-black h-[100%] sm:w-[100%] relative top-[30px] w-[100%]"
    >
      <LineGradient width="w-[100%]" />
      <div className="sm:relative sm:top-[40px] z-30 sm:w-[100%] sm:h-[100%] flex flex-col items-center justify-center sm:pt-0 pt-9 ">
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

            <h4 className="py-4 text-2xl">{greetings.title}</h4>

            <span className="py-4 green text-xl">I'am</span>

            <h1 className="text-4xl font-serif tracking-wider text-center pb-3 text-green3 ">
              {greetings.name}
            </h1>

            <h3 className=" text-xl text-green3 ">{greetings.subTitle} </h3>

            <p className="sm:mt-10 mt-3 mb-2 sm:mb-7 sm:text-2xl text-ml text-center w-[70%] font-mono">
              {greetings.desc.map((d) => {
                return <p>{d}</p>;
              })}
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
            className="text-green3 sm:pt-5 text-2xl hover:text-green transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Feel free to contact me
          </AnchorLink>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          className="flex sm:mt-5 justify-center md:justify-start"
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
      <LineGradient width="w-[100%]" className="bottom-0 relative" />
    </section>
  );
};

export default Landing;
