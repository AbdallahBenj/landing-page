import ScrollToSection from "../components/ScrollToSection";

import sections from "../data/sections";

const MobileMenu = ({ isOpen, setOpen, sectionRefs }) => {
  return (
    <nav
      id="mobile-menu"
      aria-hidden={!isOpen}
      className={`md:hidden 
      absolute left-0 p-2
      top-(--header-mobile)
      transition-all duration-500
      ${
        isOpen
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 -translate-x-full pointer-events-none"
      }`}
    >
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id} className="border-2 border-sky-500 rounded">
            <button
              onClick={() => {
                setOpen(false);
                ScrollToSection(sectionRefs.current[section.id]);
              }}
              aria-label={`Go to ${section.name} section`}
              className="font-montserrat
              font-semibold
              p-2 w-full 
              text-sky-500
              bg-neutral-100/90 shadow-lg
              active:scale-[0.98]
              active:bg-neutral-200/80"
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
