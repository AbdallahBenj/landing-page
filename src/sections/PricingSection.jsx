import pricingContent from "../data/pricingContent";
import { HiBadgeCheck } from "react-icons/hi";

const PricingSection = ({ sectionRefs }) => {
  return (
    <section
      id="pricing"
      ref={sectionRefs}
      className="pricing-section
      flex justify-center
      min-h-dvh
      md:min-h-screen
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      bg-linear-to-tr from-neutral-100 to-sky-100
      bg-neutral-100"
    >
      <div
        className="pricing-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="pricing-card
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100vh-var(--header-mobile))] 
          md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          {/* Content Start */}

          <h2
            id="pricing-heading"
            className="font-heading 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-neutral-700"
          >
            Choose Your Membership Plan
          </h2>
          <div
            className="pricing-cards p-2 my-auto
            grid md:grid-cols-3 gap-4"
          >
            {pricingContent.map((card) => {
              const { title, phrases, CTABtn } = card;
              return (
                <div
                  key={title}
                  className={`pricing-card
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

                  <div className="flex flex-col gap-2">
                    {phrases.map((badge) => {
                      return (
                        <div
                          key={badge}
                          className={`flex items-center gap-2 px-2 py-0.5 w-fit rounded-full
                            ${badge === phrases[0] ? "text-lg text-white bg-sky-500" : "text-sky-700 bg-sky-50"}`}
                        >
                          {badge === phrases[0] ? (
                            <span className="inline-block size-3 bg-white rounded-full"></span>
                          ) : (
                            <HiBadgeCheck className="font-semibold text-xl text-emerald-500" />
                          )}
                          <p className="font-bold">{badge}</p>
                        </div>
                      );
                    })}
                  </div>
                  <button
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

export default PricingSection;
