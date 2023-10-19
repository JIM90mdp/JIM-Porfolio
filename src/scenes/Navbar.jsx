import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

import {
  BsFillBriefcaseFill,
  BsFillHouseDoorFill,
  BsFillChatSquareTextFill,
  BsList,
} from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  console.log("page from Link: ", page);
  console.log("selectedPage from Link: ", selectedPage);
  
  // Guardo en una variable el nombre en minúscula
  const lowerCasePage = page.toLowerCase();
  console.log("page from toLowerCase: ", page);

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-red" : ""
      } hover:text-red transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page === "Home" ? (
        <BsFillHouseDoorFill />
      ) : page === "Skills" ? (
        <GiSkills />
      ) : page === "Projects" ? (
        <BsFillBriefcaseFill />
      ) : page === "Contact" ? (
        <BsFillChatSquareTextFill />
      ) : (
        page
      )}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-opaque-black";
  const navbarBackgroundQuery = isTopOfPage ? "" : "bg-green-bg";
  const hiddenMenu = isMenuToggled ? "hidden" : "";

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

  // return isDesktop ? (
  return isDesktop ? (
    <nav
      className={`${navbarBackground} flex flex-col z-40 w-[auto] fixed top-[205px] left-7 `}
    >
      <div className="items-center justify-between mx-auto w-5/6 flex flex-col left-7 ">
        {/* <h4 className="font-playfair text-3xl font-bold text-green">JIM</h4> */}
        <p className="text-4xl font-playfair z-10 text-center py-3">
          J I{" "}
          <span className="xs:relative xs:text-green3 xs:font-semibold z-20 ">
            M
          </span>
        </p>

        {/* DESKTOP NAV */}
        <div className="gap-10 font-opensans text-3xl font-semibold text-green3 flex flex-col left-7 pt-5">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />{" "}
          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  ) : (
    <nav className={`${navbarBackgroundQuery} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between w-5/6">
        <h4 className="font-playfair text-3xl font-bold text-green3 pl-[50px] pt-4">
          JIM
        </h4>
        <button
          className={`${hiddenMenu} rounded-full bg-red position: relative right-[-15px] pt-4 `}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <BsList className="h-[33px] w-[33px] text-green3" />
        </button>
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-7 top-8 h-[380px] w-[50px] pr-3 text-green3 bg-green-bg ">
            {/* CLOSE ICON */}
            <div className="relative ml-[25%] pb-[44px] pt-5 text-xl text-semibold top-[-10px]">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <BsList className="h-[33px] w-[33px] text-green3 relative top-[10px]" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate={isMenuToggled ? "visible" : "hidden"}
            >
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-green3 hover:text-green3">
                <motion.div
                  key="1"
                  variants={menuItemVariants}
                  style={{ marginBottom: "10px" }}
                >
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </motion.div>
                <motion.div
                  key="2"
                  variants={menuItemVariants}
                  style={{ marginBottom: "10px" }}
                >
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </motion.div>
                <motion.div
                  key="3"
                  variants={menuItemVariants}
                  style={{ marginBottom: "10px" }}
                >
                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </motion.div>

                <motion.div
                  key="4"
                  variants={menuItemVariants}
                  style={{ marginBottom: "10px" }}
                >
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
