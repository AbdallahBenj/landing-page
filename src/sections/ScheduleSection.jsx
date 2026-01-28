import ScrollToSection from "../components/ScrollToSection";
import scheduleContent from "../data/scheduleContent";
import sections from "../data/sections";

const ScheduleSection = ({ sectionRef, sectionRefs }) => {
  const currentSection = sections.find((section) => section.id === "schedule");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="schedule"
      ref={sectionRef}
      aria-labelledby="schedule-heading"
      className="schedule-section 
      flex justify-center
      min-h-screen
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      bg-linear-to-tr from-neutral-100 to-sky-100"
    >
      <div
        className="schedule-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="schedule-card
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100vh-var(--header-mobile))] \
          md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          {/* Content Start */}
          <h2
            id="schedule-heading"
            className="
            font-heading mt-4 mb-2
            text-center md:text-left
            text-4xl md:text-6xl text-neutral-700"
          >
            Flexible Weekly Schedule
          </h2>
          <p
            className="font-montserrat 
            text-left p-2
            text-lg md:text-xl text-neutral-700"
          >
            Pick the time that works best for you.
          </p>
          <div
            className="schedule-cards p-2
            flex flex-col space-y-4 my-4"
          >
            {scheduleContent.map((part) => {
              const { name, week } = part;
              return (
                <div
                  key={name}
                  className="schedule-card
                  grid p-4
                  grid-cols-3
                  md:grid-cols-4 gap-4
                  border-b-2 border-sky-400
                  rounded-bl-2xl rounded-tr-2xl
                  bg-neutral-100
                  shadow hover:shadow-lg
                  transition-transform duration-300 ease-out"
                >
                  <p
                    className="font-heading
                    text-2xl text-sky-400
                    col-span-2 col-start-1 md:col-span-1"
                  >
                    {week}
                  </p>
                  {part.sessions.map((session) => {
                    const { name, time, hours, className } = session;
                    return (
                      <div
                        key={name}
                        className="col-span-2 col-start-2 md:col-span-1 space-y-2"
                      >
                        <p className="font-heading text-xl text-sky-900 flex items-center">
                          {time}{" "}
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400 mx-2"></span>{" "}
                          <span>{hours}</span>
                        </p>
                        <p className="font-montserrat text-md font-semibold text-neutral-500">
                          {className}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="cta-btns flex flex-col md:flex-row-reverse p-2 gap-4">
            <button
              onClick={() => {
                ScrollToSection(sectionRefs.current["plans"]);
              }}
              className="font-heading 
              rounded
              cursor-pointer
              text-xl px-6 py-2 md:w-1/2
              text-white bg-sky-400 
              hover:bg-sky-500 active:scale-95
              transition-transform duration-300 ease-out"
            >
              Book a Session
            </button>
            <button
              onClick={() => {
                ScrollToSection(sectionRefs.current["classes"]);
              }}
              className="font-heading 
              rounded
              cursor-pointer
              text-xl px-6 py-2 md:w-1/2
              border border-sky-400
              text-sky-400 hover:text-white
              hover:bg-sky-400 active:scale-95
              transition-transform duration-300 ease-out"
            >
              Not sure? View class details
            </button>
          </div>
          <p
            className="font-montserrat 
            text-right p-2
            text-md md:text-lg text-neutral-600"
          >
            Rotating classes keep your training fresh and well-balanced.
          </p>
          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
