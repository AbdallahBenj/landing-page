import ScrollToSection from "../components/ScrollToSection";

import sections from "../data/sections";

const MobileMenu = ({ isOpen, setOpen, sectionRefs }) => {
  return (
    <nav
      id="mobile-menu"
      inert={!isOpen}
      className={`md:hidden 
      absolute left-0 p-2
      rounded-r
      top-(--header-mobile)
      transition-all duration-500
      bg-white/90
      ${
        isOpen
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 -translate-x-full pointer-events-none"
      }`}
    >
      <ul className="space-y-2">
        {sections.map((section) => {
          const { id, name, enabled } = section;
          return (
            enabled && (
              <li key={id} className="">
                <button
                  onClick={() => {
                    setOpen(false);
                    ScrollToSection(sectionRefs.current[id]);
                  }}
                  aria-label={`Go to ${name} section`}
                  className="
                rounded
                font-semibold
                px-6 py-2 w-full 
                text-white
                bg-sky-400/90 
                shadow-lg
                active:scale-[0.98]
                active:bg-neutral-200/80"
                >
                  {name}
                </button>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
};
export default MobileMenu;
