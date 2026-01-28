import sections from "../data/sections";

const TemplateSection = ({ sectionRefs }) => {
  const currentSection = sections.find((section) => section.id === "template");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="template"
      ref={sectionRefs}
      className="template-section
      flex justify-center
      min-h-dvh
      md:min-h-screen
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      bg-linear-to-tr from-neutral-100 to-sky-100"
    >
      <div
        className="template-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="template-card
          border border-green-400
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100vh-var(--header-mobile))] md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          {/* Content Start */}

          <h2
            id="template-heading"
            className="font-heading 
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-neutral-700"
          >
            Section Template
          </h2>
          <div
            className="template-cards p-2 my-auto
          grid md:grid-cols-3 gap-4"
          ></div>

          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
