import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import GitHubSVG from "../assets/GitHubSVG";
import jimCountries from "../assets/jim-countries.png";

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
        className="max-h-[490px] max-w-[490px] rounded-full border-2 m-5"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 ">
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
      <div className="flex justify-center flex-row">
        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div className=" m-5 flex text-center items-center flex-col p-5 text-lg font-playfair">
            <Project title="JIM Countries" />
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-green3">JIM'S COUNTRIES </span>WEB SITE
            </p>
            <div
              className=" p-5 flex text-center items-center flex-row 
              w-auto h-auto text-lg font-playfair"
            >
              <p className="p-3 text-xl font-playfair font-semibold text-green3">
                SITE:
              </p>
              <a
                className="p-7"
                href="https://jim-countries-vbeb.vercel.app/"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                JIM's Countries
              </a>
              <p className="p-3 text-xl font-playfair font-semibold text-green3">
                GITHUB:
              </p>
              <GitHubSVG href="https://github.com/JIM90mdp/JIM-Countries" />
            </div>

            <div classname="flex justify-center items-center flex-col text-2xl ">
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

        <motion.div
          className="flex items-center flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" m-5 flex text-center items-center flex-col p-5 max-w-auto max-h-[400px] text-lg font-playfair ">
            <Project title="Groove Tickets" />
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-green3">GROOVE TICKETS </span>WEB SITE
            </p>

            <div
              className=" p-5 flex text-center items-center flex-row 
              w-auto h-auto text-lg font-playfair"
            >
              <p className="p-3 text-xl font-playfair font-semibold text-green3">
                SITE:
              </p>
              <a
                className="p-7"
                href="https://pg-front-henry.vercel.app/"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                Groove Tickets
              </a>
              <p className="p-3 text-xl font-playfair font-semibold text-green3">
                GITHUB (Front):
              </p>
              <GitHubSVG href="https://github.com/JIM90mdp/PG-Henry" />
              <p className="p-3 text-xl font-playfair font-semibold text-green3">
                GITHUB (Back):
              </p>
              <GitHubSVG href="https://github.com/JIM90mdp/pg-henry-back" />
            </div>

            <div classname="flex justify-center items-center flex-col text-2xl">
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
      </div>
    </section>
  );
};

export default Projects;
