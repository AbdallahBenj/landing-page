import { useState } from "react";

import { IoMenu, IoClose } from "react-icons/io5";

import ScrollToSection from "../components/ScrollToSection.js";
import MobileMenu from "./MobileMenu.jsx";
import sections from "../data/sections";

const Header = ({ sectionRefs }) => {
  const [isOpen, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(!isOpen);
  };

  return (
    <header
      className="header-class fixed
      flex justify-center items-center
      w-full backdrop-blur
      min-h-(--header-mobile) md:min-h-(--header-desktop)"
    >
      <div
        className="header-container z-20
        flex justify-between items-center
        w-full md:max-w-4xl
        mx-2 md:mx-6"
      >
        {/* Header logo section */}

        <a href="./">
          <div
            className="
            flex justify-center items-center
            rounded-b-lg p-6 
            h-(--header-mobile) md:h-(--header-desktop)
            bg-sky-400 hover:bg-sky-500
            transition-colors duration-300"
          >
            <h1
              className="site-name
              font-heading text-3xl 
              text-neutral-50"
            >
              Sport
            </h1>
          </div>
        </a>

        {/* Desktop Nav link section*/}

        <nav aria-label="Main navigation">
          <ul className="hidden md:flex gap-6">
            {sections.map((section) => {
              const { id, name } = section;
              return (
                <li key={id}>
                  <button
                    onClick={() => ScrollToSection(sectionRefs.current[id])}
                    className="font-heading
                    flex justify-center items-center
                    text-xl cursor-pointer
                    h-(--header-mobile) md:h-(--header-desktop)
                    border-b border-transparent hover:border-sky-500
                    text-sky-400 hover:text-sky-500
                    transition-colors duration-300"
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu Toggle button */}

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={handleButton}
          className="cursor-pointer
          md:hidden m-4"
        >
          {isOpen ? (
            <IoClose className="text-3xl border rounded text-sky-500" />
          ) : (
            <IoMenu className="text-3xl text-sky-500" />
          )}
        </button>
      </div>

      {/* Mobile Nav link */}

      <MobileMenu
        id="mobile-menu"
        isOpen={isOpen}
        setOpen={setOpen}
        sectionRefs={sectionRefs}
      />
    </header>
  );
};

export default Header;
