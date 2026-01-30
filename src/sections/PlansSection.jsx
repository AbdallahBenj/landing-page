import ScrollToSection from "../components/ScrollToSection";
import plansContent from "../data/plansContent";
import sections from "../data/sections";
import { HiBadgeCheck } from "react-icons/hi";

const PlansSection = ({ sectionRef, sectionRefs, setFormData }) => {
  const currentSection = sections.find((section) => section.id === "plans");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="plans-section
      flex justify-center
      min-h-screen
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      background-gradient"
    >
      <div
        className="plans-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="plans-card
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100vh-var(--header-mobile))] 
          md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          {/* Content Start */}

          <h2
            id="plans-heading"
            className=" 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-neutral-700"
          >
            Choose Your Membership Plan
          </h2>
          <div
            className="plans-cards
            p-2 my-auto
            grid md:grid-cols-3 gap-6"
          >
            {plansContent.map((card, i) => {
              const { title, phrases, popular, CTABtn } = card;
              return (
                <div
                  key={i}
                  className={`plans-card
                  flex flex-col justify-between p-6
                  border-l-2 border-sky-400
                  rounded-tr-4xl rounded-bl-4xl             
                  shadow-md hover:shadow-lg hover:md:scale-105
                  transition-transform duration-300 ease-out
                  ${!card.medium ? "md:scale-95 bg-neutral-100" : "relative bg-sky-100 scale-100"}`}
                >
                  <h3 className="text-3xl text-sky-500 mb-6">{title}</h3>

                  {popular && (
                    <span
                      className="absolute -top-3 right-4
                      px-4 py-1 text-sm font-bold
                      text-white
                      bg-linear-to-r from-sky-400 to-sky-600
                      rounded-full shadow"
                    >
                      Most Popular
                    </span>
                  )}

                  <div className="flex flex-col gap-2 font-sans">
                    {phrases.map((badge, i) => {
                      return (
                        <div
                          key={i}
                          className={`flex items-center gap-2 px-4 py-1 w-fit rounded-full
                            ${badge === phrases[0] ? "mb-2 text-white bg-sky-500" : "text-sky-700 bg-white"}`}
                        >
                          {badge === phrases[0] ? (
                            <span className="inline-block w-3 aspect-square bg-sky-100 rounded-full"></span>
                          ) : (
                            <HiBadgeCheck className="font-semibold text-xl text-emerald-500" />
                          )}
                          <p className="font-bold">{badge}</p>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, plan: title }));
                      ScrollToSection(sectionRefs.current["contact"]);
                    }}
                    className="font-heading
                    cursor-pointer
                    text-xl px-6 py-2 mt-6
                    rounded-tr-xl rounded-bl-xl             
                    btn-primary"
                  >
                    {CTABtn}
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

export default PlansSection;
