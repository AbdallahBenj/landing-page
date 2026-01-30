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
      className="header-class
      fixed top-0 w-full z-50
      flex justify-center items-center
      backdrop-blur
      bg-linear-to-tr from-neutral-100/50 to-sky-100/50
      min-h-(--header-mobile) md:min-h-(--header-desktop)"
    >
      <div
        className="header-container
        flex justify-between items-center
        w-full md:max-w-5xl
        mx-2 md:mx-6"
      >
        {/* Header logo section */}

        <a
          href="./"
          className="
            flex items-center
            rounded-b-lg p-6 
            h-(--header-mobile)
            md:h-(--header-desktop)
            bg-sky-400 hover:bg-sky-500
            transition-colors duration-300"
        >
          <h1
            className="site-name
              font-heading text-3xl 
              text-white"
          >
            FITNESS
          </h1>
        </a>

        {/* Desktop Nav link section*/}

        <nav aria-label="Main navigation">
          <ul className="hidden md:flex gap-6">
            {sections.map((section) => {
              const { id, name, enabled } = section;
              return (
                enabled && (
                  <li key={id}>
                    <button
                      onClick={() => {
                        ScrollToSection(sectionRefs.current[id]);
                      }}
                      className="font-heading
                    text-xl cursor-pointer
                    h-(--header-desktop)
                    flex items-center justify-center
                    
                    
                    relative
                    after:absolute 
                    after:content-['']
                    after:left-1/2 after:bottom-0
                    after:-translate-x-1/2
                    after:h-0.5 after:w-0
                    after:bg-sky-500
                    hover:after:w-full 
                    after:transition-[width]
                    after:duration-300
                    
                    
                    text-sky-400 hover:text-sky-500
                    transition-colors duration-300"
                    >
                      {name}
                    </button>
                  </li>
                )
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
            <IoClose className="text-3xl text-sky-500" />
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
