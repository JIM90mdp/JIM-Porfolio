import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
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
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return isAboveLarge ? (
    <section
      id="projects"
      className="pt-[100px] pb-[100px] relative bg-opaque-black top-[30px]"
    >
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-green3">PROJECTS</span>
          </p>
          <div className="flex justify-center m-7">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex flex-col ">
        {/* PROJECT 1 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* PROJECT 1 */}
          <div className=" grid grid-cols-2 m-5 text-center items-center p-5 text-xl font-playfair ">
            {/* IMG */}
            <div className="relative right-[-10%] max-w-[600px]">
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
            <div className="z-[100] text-start">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">JIM'S COUNTRIES </span>WEB SITE
              </p>
              {/* TEXT */}
              <div classname="flex justify-center items-center flex-col text-xl ">
                <p>
                  Website created as an individual project of SoyHenry's
                  Full-Stack Web Development bootcamp.{" "}
                </p>
                <p>
                  The purpose of J.I.M+'s Countries website is to provide
                  information about all countries in the world and create
                  activities, making the tourist trip planning easier.
                </p>
                <p>
                  The information is provided by RESTful Application Program
                  Interface restcountries.com
                </p>
                {/* GH */}
                <div className=" p-5 flex flex-row justify-center">
                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    GITHUB:
                  </p>

                  <GitHubSVG href="https://github.com/JIM90mdp/JIM-Countries" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-1/6" />
        </div>
        {/* PROJECT 2 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" grid grid-cols-2 m-5 text-center items-center p-5 text-xl font-playfair ">
            {/* DATA */}
            <div className="z-[100] text-end">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">GROOVE TICKETS </span>WEB SITE
              </p>
              {/* text */}
              <div classname="flex justify-center items-center flex-col text-xl ">
                <p>
                  Website created as a group project of SoyHenry's Full-Stack
                  Web Development bootcamp.{" "}
                </p>
                <br />
                <p>
                  The purpose of the Groove Tickets website is to facilitate the
                  acquisition of tickets for concerts and other live music shows
                  and to provide detailed information about the events.
                </p>
                {/* GH */}
                <div className=" p-5 flex flex-row justify-center">
                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    GITHUB (Front):
                  </p>

                  <GitHubSVG href="https://github.com/JIM90mdp/Groove-Tickets-Front" />

                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    GITHUB (Back):
                  </p>

                  <GitHubSVG href="https://github.com/JIM90mdp/Groove-TIckets-Back" />
                </div>
              </div>
            </div>
            {/* IMG */}

            <div className="max-w-[600px] relative right-[-10%]">
              <a
                href="https://groove-tickets.vercel.app/"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <GlassEffect title="Groove Tickets" />
              </a>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-1/6" />
        </div>
        {/* PROJECT 3 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* PROJECT 3 */}
          <div className=" grid grid-cols-2 m-5 text-center items-center p-5 text-xl font-playfair">
            {/* IMG */}
            <div className="relative right-[-10%] max-w-[600px]">
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
            <div className="z-[100] text-start">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">JIM'S PORFOLIO </span>WEB SITE
              </p>
              {/* TEXT */}
              <div className="flex justify-center items-center flex-col text-xl ">
                <p>
                  Design and development of a portfolio to provide personal and
                  professional information.
                </p>
                {/* GH */}
                <div className=" p-5 flex flex-row justify-center">
                  <p className="p-3 text-xl font-playfair font-semibold text-green3">
                    GITHUB:
                  </p>

                  <GitHubSVG href="https://github.com/JIM90mdp/JIM-Porfolio" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-1/6" />
        </div>
        {/* PROJECT 4 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" grid grid-cols-2 m-5 text-center items-center p-5 text-xl font-playfair ">
            {/* DATA */}
            <div className="z-[100] text-end">
              {/* NAME */}
              <p className="font-playfair font-semibold mt-5">
                <span className="text-green3">MMM - SERVICIOS JURÍDICOS </span>
                WEB SITE
              </p>
              {/* text */}
              <div classname="flex justify-center items-center flex-col text-xl ">
                <p>
                  API for a lawyer client, allowing users to learn about the
                  legal services provided, submit free legal inquiries, and
                  access information related to legal services.
                </p>
              </div>
            </div>
            {/* IMG */}

            <div className="max-w-[600px] relative right-[-10%]">
              <a
                href=""
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <GlassEffect title="MMC ServiciosJuridicos" />
              </a>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-1/6" />
        </div>
      </div>
    </section>
  ) : (
    <section
      id="projects"
      className="relative bg-opaque-black pt-5 pb-5 top-[15px] w-[105%] p-5 "
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-green3">PROJECTS</span>
          </p>
          <div className="flex justify-center m-7">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center flex-col">
        {/* PROJECTS 1 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href="https://jim-countries-vbeb.vercel.app/"
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            <Project title="JIM Countries" />
          </a>
          <div className="flex text-center justify-center items-center flex-col text-lg font-playfair">
            <p className="font-playfair font-semibold text-xl">
              <span className="text-green3">JIM'S COUNTRIES </span>WEB SITE
            </p>
            <div
              className=" p-5 flex text-center items-center flex-row 
              w-auto h-auto text-base font-playfair"
            >
              <p className="p-3 text-base font-playfair font-semibold text-green3">
                GITHUB:
              </p>
              <GitHubSVG href="https://github.com/JIM90mdp/JIM-Countries" />
            </div>

            <div className="flex justify-center items-center flex-col m-5">
              <p>
                Website created as an individual project of SoyHenry's
                Full-Stack Web Development bootcamp.{" "}
              </p>
              <br />
              <p>
                The purpose of J.I.M+'s Countries website is to provide
                information about all countries in the world and create
                activities, making the tourist trip planning easier.
              </p>
              <br />
              <p>
                The information is provided by RESTful Application Program
                Interface restcountries.com
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-2/3" />
        </div>

        {/* PROJECTS 2 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href="https://pg-front-henry.vercel.app/"
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            <Project title="Groove Tickets" />
          </a>
          <div className="flex text-center justify-center items-center flex-col text-lg font-playfair ">
            <p className="font-playfair font-semibold text-xl">
              <span className="text-green3">GROOVE TICKETS </span>WEB SITE
            </p>

            <div className="flex text-center items-center flex-row w-[80%] h-auto font-playfair">
              <p className="p-3 text-base font-playfair font-semibold text-green3">
                GITHUB (Front):
              </p>
              <GitHubSVG href="https://github.com/JIM90mdp/PG-Henry" />
              <p className="p-3 text-base font-playfair font-semibold text-green3">
                GITHUB (Back):
              </p>
              <GitHubSVG href="https://github.com/JIM90mdp/pg-henry-back" />
            </div>

            <div className="flex justify-center items-center flex-col  m-5">
              <p>
                Website created as a group project of SoyHenry's Full-Stack Web
                Development bootcamp.{" "}
              </p>
              <br />
              <p>
                The purpose of the Groove Tickets website is to facilitate the
                acquisition of tickets for concerts and other live music shows
                and to provide detailed information about the events.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-2/3" />
        </div>
        {/* PROJECTS 3 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href="https://mascarenhas-dev.vercel.app/"
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            <Project title="Jim Porfolio" />
          </a>
          <div className="flex text-center justify-center items-center flex-col text-lg font-playfair ">
            <p className="font-playfair font-semibold text-xl">
              <span className="text-green3">JIM's PORFOLIO </span>WEB SITE
            </p>

            <div className="flex text-center items-center flex-row w-[80%] h-auto font-playfair">
              <p className="p-3 text-base font-playfair font-semibold text-green3">
                GITHUB:
              </p>
              <GitHubSVG href="https://github.com/JIM90mdp/JIM-Porfolio" />
            </div>

            <div className="flex justify-center items-center flex-col  m-5">
              <p>
                Design and development of a portfolio to provide personal and
                professional information.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-2/3" />
        </div>
        {/* PROJECTS 4 */}
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href=""
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            <Project title="MMC ServiciosJuridicos" />
          </a>
          <div className="flex text-center justify-center items-center flex-col text-lg font-playfair ">
            <p className="font-playfair font-semibold text-xl">
              <span className="text-green3">MMC - SERVICIOS JURÍDICOS</span> <br/> WEB
              SITE
            </p>

            <div className="flex justify-center items-center flex-col  m-5">
              <p>
                API for a lawyer client, allowing users to learn about the legal
                services provided, submit free legal inquiries, and access
                information related to legal services.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center m-7">
          <LineGradient width="w-2/3" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
