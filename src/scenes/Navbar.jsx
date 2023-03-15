import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

import {
  BsFillBriefcaseFill,
  BsFillHouseDoorFill,
  BsFillChatSquareTextFill,
  BsList,
} from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-green" : ""
      } hover:text-green transition duration-500`}
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

  console.log("isDesktop", isDesktop);

  return isDesktop ? (
    <nav
      className={`${navbarBackground} flex flex-col z-40 w-[auto] fixed top-[205px] left-7 `}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 flex flex-col left-7 ">
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
          />
          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Projects"
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
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold text-green">JIM</h4>
        <button
          className="rounded-full bg-red p-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <BsList />
        </button>
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-opaque-black w-[100px] text-green">
            {/* CLOSE ICON */}
            <div className="relative flex justify-end p-12 text-xl text-semibold top-[-20px]">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                X
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue hover:text-green3">
            <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Projects"
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
