import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import GitHubSVG from "../assets/GitHubSVG";
import GlassEffect from "../components/GlassEffect/GlassEffect";
import { projects } from "../data/dataPortfolio";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="sm:flex-row sm:justify-between bg-opaque-black sm:h-[auto] relative top-[30px] w-[100%]"
    >
      {/* Title */}
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

      {/* Project Cards */}
      <div className="flex justify-center flex-col p-5">
        {projects
          .sort((a, b) => a.id - b.id) // Sort the projects array by ID
          .map((p) => {
            return (
              <ProjectCard
                key={p.id} // Provide a unique key for each project card
                img={p.img}
                deploy={p.deploy}
                name={p.name}
                desc={p.desc}
                gh={p.github}
                id={p.id}
              />
            );
          })}
      </div>

      <LineGradient width="w-[100%]" className="bottom-0 relative" />
    </section>
  );
};

export default Projects;
