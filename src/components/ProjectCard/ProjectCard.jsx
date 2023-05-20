import React from "react";
import { motion } from "framer-motion";
import GlassEffect from "../GlassEffect/GlassEffect";
import LineGradient from "../LineGradient";
import GitHubSVG from "../../assets/GitHubSVG";

const ProjectCard = ({ img, deploy, name, desc, gh, id }) => {
  const stylesImgCard = id % 2 === 0 ? " xl:order-2" : "";

  const stylesDataCard =
    id % 2 == 0 ? "xl:text-end xl:order-1" : "xl:text-start ";

  return (
    <motion.div
      id={id}
      className="flex items-center flex-col p-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" xl:grid xl:grid-cols-2 xl:m-5 text-center flex flex-col items-center xl:p-5 xl:text-xl xl:font-playfair ">
        {/* IMG */}
        <div
          className={`xl:relative xl:right-[-10%]  xl:max-w-[600px] w-[288px] xl:w-[auto] ${stylesImgCard}`}
        >
          <a
            href={deploy && deploy}
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            {img && <GlassEffect title={img} />}
          </a>
        </div>

        {/* DATA */}
        <div
          className={`z-[1] text-center w-[85%] xl:w-[auto] ${stylesDataCard}`}
        >
          {/* NAME */}
          <p className="font-playfair font-semibold mt-5">
            <span className="text-green3">{name && name.toUpperCase()}</span>{" "}
            WEB SITE
          </p>
          {/* DESCRIPTION */}
          <div className="flex justify-center items-center flex-col text-xl ">
            {desc &&
              desc.map((d) => {
                return <p>{d}</p>;
              })}
            {/* GH */}
            <div className=" p-3 xl:p-5 flex flex-row justify-center">
              <div className="p-3 text-xl font-playfair font-semibold text-green3">
                {"<Code/>"}
              </div>
              {gh &&
                gh.map((d) => {
                  return <GitHubSVG href={d} />;
                })}
            </div>
          </div>
        </div>
      </div>

      <LineGradient width="w-3/6 xl:w-1/6" />
    </motion.div>
  );
};

export default ProjectCard;
