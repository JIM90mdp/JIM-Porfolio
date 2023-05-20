import { Icon } from "@iconify/react";

import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skillsSection } from "../data/dataPortfolio";
import { UncontrolledTooltip } from "reactstrap";
import { Fragment } from "react";

const MySkills = () => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="skills"
      className="relative bg-opaque-black top-[30px] overflow-hidden "
    >
      <LineGradient width="w-[100%]" />
      <motion.div
        className="mx-auto text-center relative top-[30px] flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* TITLE SECTION */}
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-green3">SKILLS</span>
        </p>
        <div className="flex justify-center m-3 sm:w-[40%] w-[100%]">
          <LineGradient width="w-2/3" />
        </div>
      </motion.div>

      {/* SKILLS */}
      <div className="flex flex-col items-center m-5 justify-center">
        <motion.div
          className="mt-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {skillsSection.data.map((section, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center"
                key={index}
              >
                <h3 className="relative top-[-30px] text-2xl text-green3">
                  {section.title}
                </h3>
                <div className="flex flex-col items-center justify-center text-center h-[100%] w-[100%] text-xl">
                  {section.skills.map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                  })}
                </div>
                <div className="flex flex-col justify-center mb-2 ">
                  <p className="text-2xl text-green3 m-5 flex justify-center items-center">
                    Technologies
                  </p>
                </div>
                <div className="flex-wrap flex mb-2 flex-row w-auto h-auto items-center justify-center">
                  {section.softwareSkills.map((skill, i) => {
                    return (
                      <Fragment key={i}>
                        <div
                          className="text-md sm:text-lg shadow-sm sm:shadow-md shadow-white rounded-full p-3 m-3 bg-white h-[60px] w-[60px] flex justify-center items-center"
                          id={skill.skillName.replace(/\s/g, "")}
                        >
                          <Icon
                            icon={skill.fontAwesomeClassname}
                            data-inline="false"
                            className="h-[40px] w-[40px]"
                          ></Icon>
                        </div>
                        {/* <UncontrolledTooltip
                          delay={0}
                          placement="bottom"
                          target={skill.skillName.replace(/\s/g, "")}
                        >
                          {skill.skillName}
                        </UncontrolledTooltip> */}
                      </Fragment>
                    );
                  })}
                </div>
                <div className="flex flex-col justify-center mb-2 ">
                  <p className="text-2xl text-green3 m-5 flex justify-center items-center">
                    SoftSkills
                  </p>
                </div>
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  
                >
                  <div className="flex justify-center text-center flex-col sm:flex-row sm:wrap mb-2">
                    {section.softSkills.map((skill, i) => {
                      return (
                        <motion.div
                          key="1"
                          variants={menuItemVariants}
                          style={{ marginBottom: "10px" }}
                        >
                          <Fragment key={i}>
                            <div
                              className="text-md m-1 p-1 sm:text-lg shadow-md shadow-white sm:m-3 sm:p-3  "
                              id={skill}
                            >
                              {skill}
                            </div>
                          </Fragment>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <LineGradient width="w-[100%]" />
    </section>
  );
};

export default MySkills;
