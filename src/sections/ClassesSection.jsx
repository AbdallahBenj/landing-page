import classesContent from "../data/classesContent";
import sections from "../data/sections";

import ScrollToSection from "../components/ScrollToSection";

const ClassesSection = ({ sectionRef, sectionRefs, setFormData }) => {
  const currentSection = sections.find((section) => section.id === "classes");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="classes-section
      flex justify-center
      min-h-dvh
      md:min-h-screen
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      bg-linear-to-tr from-neutral-100 to-sky-100"
    >
      <div
        className="classes-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="classes-card
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100vh-var(--header-mobile))] md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          {/* Content Start */}

          <h2
            id="classes-heading"
            className="font-heading 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-neutral-700"
          >
            Choose Your Training Style
          </h2>
          <div
            className="classes-cards p-2 my-auto
          grid md:grid-cols-3 gap-4"
          >
            {classesContent.map((card) => {
              const { title, description, badges } = card;
              return (
                <div
                  key={title}
                  className={`classes-card
                  flex flex-col justify-between p-6
                  border-l-2 border-sky-400
                  rounded-tr-4xl rounded-bl-4xl             
                  shadow hover:shadow-lg hover:scale-105
                  transition-transform duration-300 ease-out
                  ${!card.medium ? "md:scale-95 bg-neutral-100" : "bg-sky-100 scale-100"}`}
                >
                  <h3 className="font-heading text-3xl text-sky-500 mb-6">
                    {title}
                  </h3>

                  <p
                    className="
                  font-montserrat font-medium text-neutral-600 mb-6"
                  >
                    {description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {badges.map((badge) => {
                      return (
                        <div
                          key={badge}
                          className={`flex items-center gap-2 px-2 py-0.5 w-fit rounded-full
                            ${badge === badges[0] ? "text-white bg-sky-500" : "text-sky-700 bg-sky-50"}`}
                        >
                          {badge === badges[0] && (
                            <span className="inline-block size-3 bg-white rounded-full"></span>
                          )}
                          <p className="text-sm font-bold">{badge}</p>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, class: title }));
                      ScrollToSection(sectionRefs.current["plans"]);
                    }}
                    className="font-heading
                    cursor-pointer
                    text-xl px-6 py-2 mt-6
                    rounded-tr-xl rounded-bl-xl             
                    text-white bg-sky-400 
                    hover:bg-sky-500 active:scale-95
                    transition-transform duration-300"
                  >
                    Explore Class
                  </button>
                </div>
              );
            })}
          </div>

          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
