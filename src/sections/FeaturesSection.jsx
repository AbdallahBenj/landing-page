import { LuUserCheck } from "react-icons/lu";
import featuresContent from "../data/featuresContent.js";
import sections from "../data/sections.js";

const FeaturesSection = ({ sectionRef }) => {
  const currentSection = sections.find((section) => section.id === "features");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="features"
      ref={sectionRef}
      aria-labelledby="features-heading"
      className="features-section 
      flex justify-center
      min-h-dvh
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      background-gradient"
    >
      <div
        className="features-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="features-card
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100dvh-var(--header-mobile))]
          md:min-h-[calc(100dvh-var(--header-desktop))]"
        >
          {/* Content Start */}
          <h2
            id="features-heading"
            className="
            mt-4 mb-2
            text-center md:text-left
            text-4xl md:text-6xl text-neutral-700"
          >
            Everything You Need to Succeed
          </h2>
          <div
            className="features-cards p-4 my-auto
            grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {featuresContent.map((card) => {
              const { Icon, title, description } = card;
              return (
                <div
                  key={title}
                  className="features-icon-card
                  flex flex-col justify-center items-center gap-4
                  p-6 rounded-xl bg-neutral-100
                  transition-transform duration-300 ease-out       
                  shadow-md hover:shadow-lg"
                >
                  <Icon
                    className="
                    size-16 md:size-20 
                    p-2 rounded-full m-auto
                    bg-sky-400  text-white"
                  />
                  <h3
                    className=" 
                    text-center text-2xl text-sky-500"
                  >
                    {title}
                  </h3>
                  <p
                    className="
                    font-medium 
                    text-center text-neutral-700"
                  >
                    {description}
                  </p>
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

export default FeaturesSection;
