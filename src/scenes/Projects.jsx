import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import GitHubSVG from "../assets/GitHubSVG";
import GlassEffect from "../components/GlassEffect/GlassEffect";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <img
        src={require(`../assets/${projectTitle}.png`)}
        alt={projectTitle}
        className=" w-[270px]"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="sm:flex-row sm:justify-between bg-opaque-black sm:h-[auto] relative top-[30px] w-[100%]"
    >
      <motion.div
        className="md:w-2/5 mx-auto text-center sm:relative sm:top-[30px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="relative top-[15px] font-playfair font-semibold text-4xl sm:m-7">
            <span className="text-green3">PROJECTS</span>
          </p>
          <div className="flex justify-center m-7 sm:m-3">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center flex-col ">
        {/* PROJECT 1 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" sm:grid sm:grid-cols-2 sm:m-5 text-center flex flex-col items-center sm:p-5 sm:text-xl sm:font-playfair ">
            {/* IMG */}
            <div className="sm:relative sm:right-[-10%] sm:max-w-[600px] w-[288px] sm:w-[auto] ">
              <a
                href="https://jim-countries-vbeb.vercel.app/"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <GlassEffect title="JIM Countries" />
              </a>
            </div>

            {/* DATA */}
            <div className="z-[1] text-center sm:text-start">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">JIM'S COUNTRIES </span>WEB SITE
              </p>
              {/* TEXT */}
              <div classname="flex justify-center items-center flex-col text-xl ">
                <p>
                  Web Application created to provide
                  information about all countries in the world and create
                  activities, making the tourist trip planning easier.
                </p>
                <p>
                  The information is provided by RESTful Application Program
                  Interface restcountries.com
                </p>
                {/* GH */}
                <div className=" p-3 sm:p-5 flex flex-row justify-center">
                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    {"<Code/>"}
                  </p>

                  <GitHubSVG href="https://github.com/JIM90mdp/JIM-Countries" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-3/6 sm:w-1/6" />
        </div>
        {/* PROJECT 2 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" sm:grid sm:grid-cols-2 sm:m-5 text-center items-center sm:p-5 sm:text-xl sm:font-playfair flex flex-col ">
            {/* IMG */}

            <div className="sm:relative sm:right-[-10%] sm:max-w-[600px] w-[288px] sm:w-[auto] sm:order-2 ">
              <a
                href="https://groove-tickets.vercel.app/"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <GlassEffect title="Groove Tickets" />
              </a>
            </div>
            {/* DATA */}
            <div className="z-[1] text-center w-[85%] sm:w-[auto] sm:text-end  sm:order-1">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">GROOVE TICKETS </span>WEB SITE
              </p>
              {/* text */}
              <div classname="flex justify-center items-center flex-col text-xl">
                <p>
                  Website created to facilitate the
                  acquisition of tickets for concerts and other live music shows
                  and to provide detailed information about the events.
                </p>
                {/* GH */}
                <div className=" p-3 sm:p-5 flex flex-row justify-center">
                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    {"<Back/>"}
                  </p>

                  <GitHubSVG href="https://github.com/JIM90mdp/Groove-TIckets-Back" />
                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    {"<Front/>"}
                  </p>

                  <GitHubSVG href="https://github.com/JIM90mdp/Groove-Tickets-Front" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-3/6 sm:w-1/6" />
        </div>
        {/* PROJECT 3 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" sm:grid sm:grid-cols-2 sm:m-5 text-center flex flex-col items-center sm:p-5 sm:text-xl sm:font-playfair ">
            {/* IMG */}
            <div className="sm:relative sm:right-[-10%] sm:max-w-[600px] w-[288px] sm:w-[auto] ">
              <a
                href="https://mascarenhas-dev.vercel.app/"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <GlassEffect title="JIM Porfolio" />
              </a>
            </div>

            {/* DATA */}
            <div className="z-[1] text-center sm:text-start">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">JIM'S PORTFOLIO </span>WEB SITE
              </p>
              {/* TEXT */}
              <div className="flex justify-center items-center flex-col text-ml ">
                <p>
                  Design and development of a portfolio to provide personal and
                  professional information.
                </p>
                {/* GH */}
                <div className=" p-3 sm:p-5 flex flex-row justify-center">
                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    {"<Code/>"}
                  </p>
                  <GitHubSVG href="https://github.com/JIM90mdp/JIM-Porfolio" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-3/6 sm:w-1/6" />
        </div>
        {/* PROJECT 4 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" sm:grid sm:grid-cols-2 sm:m-5 text-center items-center sm:p-5 sm:text-xl sm:font-playfair flex flex-col">
            {/* IMG */}
            <div className="sm:relative sm:right-[-10%] sm:max-w-[600px] w-[288px] sm:w-[auto] sm:order-2">
              <a
                href=""
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <GlassEffect title="MMC ServiciosJuridicos" />
              </a>
            </div>
            {/* DATA */}
            <div className="z-[1] text-center w-[85%] sm:w-[auto] sm:text-end sm:order-1">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">MMC - SERVICIOS JURÍDICOS </span>
                WEB SITE
              </p>
              {/* text */}
              <div classname="flex justify-center items-center flex-col text-xl ">
                <p>
                  Web Application for a lawyer customer, allowing users to learn about the
                  legal services provided, submit free legal inquiries, and
                  access information related to legal services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-3/6 sm:w-1/6" />
        </div>
      </div>

      <LineGradient width="w-[100%]" className="bottom-0 relative" />
    </section>
  );
};

export default Projects;
