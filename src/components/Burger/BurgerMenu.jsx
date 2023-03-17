import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  BsFillBriefcaseFill,
  BsFillHouseDoorFill,
  BsFillChatSquareTextFill,
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

export default function BurgerMenu({ selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <div>
      <button
        class="relative group"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <div class="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div class="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6h-6 w-6 animate-bounce text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
            <div class="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
            <div class="bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
          </div>
        </div>
      
      {isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full  bg-opaque-black w-[100px] text-green">
          {/* CLOSE ICON */}
          <div className="relative flex justify-end p-12 text-xl text-semibold top-[-20px]">
            <div onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <BurgerMenu />
            </div>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-10 ml-[33%]  text-2xl text-deep-blue hover:text-green3">
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
      </button>
    </div>
  );
}
