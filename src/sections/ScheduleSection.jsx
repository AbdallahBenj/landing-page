import scheduleContent from "../data/scheduleContent";

const ScheduleSection = ({ sectionRefs }) => {
  return (
    <section
      id="schedule"
      ref={sectionRefs}
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
            font-heading mt-6 mb-2
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
            Morning, afternoon, and evening classes available throughout the
            week.
          </p>
          <div
            className="schedule-cards p-2
            flex flex-col space-y-6 my-6"
          >
            {scheduleContent.map((part) => {
              const { name, week } = part;
              return (
                <div
                  key={name}
                  className="schedule-card
                  grid p-6
                  grid-cols-3
                  md:grid-cols-4 gap-4
                  border-b-2 border-sky-400
                  rounded-bl-2xl rounded-tr-2xl
                  bg-neutral-100
                  shadow-xl"
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
                        <p className="font-heading text-xl text-neutral-700 flex items-center">
                          {time}{" "}
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400 mx-2"></span>{" "}
                          <span>{hours}</span>
                        </p>
                        <p className="font-montserrat text-md font-semibold text-neutral-600">
                          {className}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <p
            className="font-montserrat 
            text-right p-2
            text-md md:text-lg text-neutral-600"
          >
            Classes rotate weekly to keep training fresh and balanced.
          </p>
          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
