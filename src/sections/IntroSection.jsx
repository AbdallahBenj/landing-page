import { MdVerified } from "react-icons/md";
import { TbHours24 } from "react-icons/tb";

const IntroSection = ({ sectionRefs }) => {
  return (
    <section
      id="intro"
      ref={sectionRefs}
      className="intro-section
      flex justify-center
      min-h-dvh
      md:min-h-screen
      bg-linear-to-tr from-neutral-100 to-sky-100
      bg-neutral-100"
    >
      <div
        className="intro-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="intro-card
          p-2 md:p-6
          flex flex-1
          mt-(--header-mobile) md:mt-(--header-desktop)
          min-h-[calc(100vh-var(--header-mobile))] md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          <div
            className="intro-left-container
            flex flex-col
            my-auto
            max-w-2xl"
          >
            <div className="intro-welcome space-y-5">
              <p
                className="
                font-montserrat
                tracking-[0.25em]
                text-xs md:text-sm
                uppercase font-semibold
                text-neutral-600"
              >
                WELCOME TO YOUR SPORT CLUB
              </p>

              <h2
                className="
                font-heading 
                leading-[0.95] tracking-wide
                text-6xl md:text-7xl text-sky-950"
              >
                Your Fitness Journey{" "}
                <span className="text-sky-400">Starts Here</span>
              </h2>

              <p className="font-montserrat leading-relaxed text-base md:text-lg text-neutral-600">
                Expert guidance, modern equipment, and a motivating community
                <br />— all in one place.{" "}
                <span className="font-semibold text-sky-950">
                  No matter your goal
                </span>
                , we have the perfect plan for you.
              </p>
            </div>
            <div className="intro-actions space-y-6">
              <div
                className="intro-trust
                border-t border-neutral-200 pt-6"
              >
                <div className="flex items-center gap-2">
                  <MdVerified className="text-sky-800 text-xl" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-600"></span>
                  <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                    Trusted by{" "}
                    <span className="text-sky-600 text-lg">500+</span> local
                    members
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <TbHours24 className="text-sky-800 text-xl" />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-600"></span>
                  <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                    Open <span className="text-sky-600 text-lg">24/7</span> for
                    your convenience
                  </p>
                </div>
              </div>

              <div
                className="intro-buttons
                flex flex-col md:flex-row-reverse gap-4"
              >
                <button
                  className="
                  flex-1
                  px-8 py-3 rounded
                  font-heading uppercase
                  text-xl md:text-2xl
                  text-white bg-sky-500
                  hover:bg-sky-600
                  hover:scale-105 active:scale-95
                  transaction-transform duration-300"
                >
                  Join Now
                </button>
                <button
                  className="
                  flex-1
                  px-8 py-3 rounded
                  font-heading uppercase
                  text-xl md:text-2xl
                  border-2 border-sky-500
                  text-sky-500
                  hover:bg-sky-500 hover:text-white
                  hover:scale-102 active:scale-95
                  transaction-transform duration-300"
                >
                  View Programs
                </button>
              </div>
            </div>
          </div>
          <div className="intro-right-container"></div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
