const TemplateSection = ({ sectionRefs }) => {
  return (
    <section
      id="template"
      ref={sectionRefs}
      className="template-section
      flex justify-center
      min-h-dvh
      md:min-h-screen
      bg-linear-to-tr from-neutral-100 to-sky-100
      bg-neutral-100"
    >
      <div
        className="template-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="template-card
          border border-green-500
          p-2 md:p-6
          flex flex-1
          mt-(--header-mobile) md:mt-(--header-desktop)
          min-h-[calc(100vh-var(--header-mobile))] md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          {/* Content Start */}

          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
