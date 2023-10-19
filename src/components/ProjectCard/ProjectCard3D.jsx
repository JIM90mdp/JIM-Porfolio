import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import GlassEffect from "../GlassEffect/GlassEffect";
import LineGradient from "../LineGradient";
import GitHubSVG from "../../assets/GitHubSVG";

const ProjectCard3D = ({ img, deploy, name, desc, gh, id }) => {
  return (
    // card wrapper
    <motion.div style={{ perspective: 2000 }}>
      {/* card */}
      <div className="w-[426px] min-h-[600px] bg-firstBg  ">
        {/* DATA */}
        <div>
          {/* NAME */}
          <p>
            <span>{name && name.toUpperCase()}</span> WEB SITE
          </p>
          {/* DESCRIPTION */}
          <div>
            {desc &&
              desc.map((d) => {
                return <p>{d}</p>;
              })}
            {/* GH */}
            <div>
              <div>{"<Code/>"}</div>
              {gh &&
                gh.map((d) => {
                  return <GitHubSVG href={d} />;
                })}
            </div>
          </div>
        </div>

        {/* IMG */}
        <div>
          <a
            href={deploy && deploy}
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            {img && <GlassEffect title={img} />}
          </a>
        </div>
      </div>

      <LineGradient width="w-3/6 xl:w-1/6" />
    </motion.div>
  );
};

export default ProjectCard3D;
