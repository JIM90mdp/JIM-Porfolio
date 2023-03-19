import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return isAboveLarge ? (
    <section id="skills" className=" pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-green3">SKILLS</span>
            </p>
            <div className="flex justify-center m-7">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-7 text-2xl">
            I’m a curious person, an avid reader, a cheerful spirit and an
            instinctive creative self.
          </p>
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="grid grid-cols-2 mt-16 text-xl">
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col items-center m-5">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl m-5">
                Technologies
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center font-playfair text-lg m-5 ">
              {" "}
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Html</p>
              </a>{" "}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Css3</p>
              </a>{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Javascript</p>
              </a>{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Typescript</p>
              </a>{" "}
              <a
                href="https://babeljs.io/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
                  alt="babel"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Babel</p>
              </a>{" "}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Node</p>
              </a>{" "}
              <a
                href="https://expressjs.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Express</p>
              </a>{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                  alt="nextjs"
                  width="40"
                  height="40"
                  className="h-[40px] w-[40px]"
                />{" "}
                <p className="m-[1px]">Next</p>
              </a>{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">React</p>
              </a>{" "}
              <a
                href="https://redux.js.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Redux</p>
              </a>{" "}
              <a
                href="https://marmelab.com/react-admin/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src={require("../assets/React-admin.png")}
                  alt="React Admin"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">React Admin</p>
              </a>{" "}
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Figma</p>
              </a>{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Tailwind</p>
              </a>{" "}
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Bootstrap</p>
              </a>{" "}
              <a
                href="https://sass-lang.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Sass</p>
              </a>{" "}
              {/* <div className="m-[3px] h-[40px] w-[40px]">
                <svg
                  viewBox="0 0 600 476.30000000000007"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  className="m-[1px] flex flex-col items-center justify-center h-[40px] w-[40px]"
                >
                  <path
                    d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z"
                    fill="#00b0ff"
                  />
                  <path
                    d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                    fill="#0081cb"
                  />
                  <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff" />
                  <path
                    d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
                    fill="#0081cb"
                  />
                </svg>
                <p className="m-[1px]">MUI</p>
              </div> */}
              <a
                href="https://materializecss.com/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg"
                  alt="materialize"
                  width="40"
                  height="40"
                  className="h-[40px] w-[40px]"
                />{" "}
                <p className="m-[1px]">Materialize</p>
              </a>{" "}
              <a
                href="https://www.python.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Python</p>
              </a>{" "}
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">PostgreSql</p>
              </a>{" "}
              <a
                href="https://postman.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Postman</p>
              </a>{" "}
              <a
                href="https://www.sqlite.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                  alt="sqlite"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Sqlite</p>
              </a>{" "}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col items-center m-5">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl m-5">
                Soft Skills
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center font-playfair text-lg m-5">
              <p>
                Communication - Problem-solving - Time management - Teamwork -
                Adaptability - Organizational - Critical thinking - Leadership -
                Patience - Creativity
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  ) : (
    <section id="skills" className="pb-10">
      {/* HEADER  */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-green3">SKILLS</span>
            </p>
            <div className="flex justify-center m-7">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-7 text-2xl">
            I’m a curious person, an avid reader, a cheerful spirit and an
            instinctive creative self.
          </p>
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col justify-center item-center text-xl">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative flex justify-center items-center flex-col">
            <div className="z-10 ">
              <p className="font-playfair font-semibold text-4xl m-5 flex justify-center items-center">
                Technologies
              </p>
            </div>
            <div className="font-playfair text-lg m-5 flex flex-wrap w-[100%]  justify-center items-center">
              {" "}
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Html</p>
              </a>{" "}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Css3</p>
              </a>{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Javascript</p>
              </a>{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Typescript</p>
              </a>{" "}
              <a
                href="https://babeljs.io/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
                  alt="babel"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Babel</p>
              </a>{" "}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Node</p>
              </a>{" "}
              <a
                href="https://expressjs.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Express</p>
              </a>{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                  alt="nextjs"
                  width="40"
                  height="40"
                  className="h-[40px] w-[40px]"
                />{" "}
                <p className="m-[1px]">Next</p>
              </a>{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">React</p>
              </a>{" "}
              <a
                href="https://redux.js.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Redux</p>
              </a>{" "}
              <a
                href="https://marmelab.com/react-admin/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src={require("../assets/React-admin.png")}
                  alt="React Admin"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">React Admin</p>
              </a>{" "}
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Figma</p>
              </a>{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Tailwind</p>
              </a>{" "}
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Bootstrap</p>
              </a>{" "}
              <a
                href="https://sass-lang.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Sass</p>
              </a>{" "}
              {/* <div className="m-[3px] t-[-10px]h-[40px] w-[40px]">
                <svg
                  viewBox="0 0 600 476.30000000000007"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  className="m-[1px] flex flex-col items-center justify-center h-[40px] w-[40px]"
                >
                  <path
                    d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z"
                    fill="#00b0ff"
                  />
                  <path
                    d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                    fill="#0081cb"
                  />
                  <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff" />
                  <path
                    d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
                    fill="#0081cb"
                  />
                </svg>
                <p className="m-[1px]">MUI</p>
              </div> */}
              <a
                href="https://materializecss.com/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg"
                  alt="materialize"
                  width="40"
                  height="40"
                  className="h-[40px] w-[40px]"
                />{" "}
                <p className="m-[1px]">Materialize</p>
              </a>{" "}
              <a
                href="https://www.python.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Python</p>
              </a>{" "}
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">PostgreSql</p>
              </a>{" "}
              <a
                href="https://postman.com"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Postman</p>
              </a>{" "}
              <a
                href="https://www.sqlite.org/"
                target="_blank"
                rel="noreferrer"
                className="m-1 flex flex-col items-center justify-center"
              >
                {" "}
                <img
                  src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                  alt="sqlite"
                  width="40"
                  height="40"
                />{" "}
                <p className="m-[1px]">Sqlite</p>
              </a>{" "}
            </div>
          </div>
        </motion.div>

        {/* INNOVATIVE */}

        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mt-9">
            <p className="font-playfair font-semibold text-4xl">
              <span className="">Soft Skills</span>
            </p>
            <div className="flex justify-center m-7">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-7 text-2xl">
            Communication - Problem-solving - Time management - Teamwork -
            Adaptability - Organizational - Critical thinking - Leadership -
            Patience - Creativity
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
