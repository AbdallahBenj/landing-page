import ScrollToSection from "../components/ScrollToSection";

import sections from "../data/sections";

const MobileMenu = ({ isOpen, setOpen, sectionRefs }) => {
  return (
    <nav
      id="mobile-menu"
      className={`md:hidden 
      absolute left-2
      top-(--header-mobile)
      px-2
      transaction-all duration-500
      ${
        isOpen
          ? "opacity-100 translate-x-0 pointer-events-auto visible"
          : "opacity-0 -translate-x-full pointer-events-none invisible"
      }`}
    >
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className="my-2 border-2 border-sky-400 rounded 
            bg-neutral-200/90 "
          >
            <button
              onClick={() => {
                setOpen(false);
                ScrollToSection(sectionRefs.current[section.id]);
              }}
              className="font-montserrat font-semibold text-sky-400 p-2 block"
            >
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MobileMenu;
