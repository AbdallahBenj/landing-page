const FeaturesSection = ({ sectionRefs }) => {
  return (
    <div
      id="features"
      ref={sectionRefs}
      className="features-section
      flex justify-center items-center
      w-full h-full
      min-h-screen
      bg-neutral-200"
    >
      <div
        className="features-container
        w-full md:max-w-4xl
        mx-2 md:mx-6"
      >
        <h2 className="font-montserrat font-semibold text-4xl text-neutral-800">
          Features Section
        </h2>
      </div>
    </div>
  );
};

export default FeaturesSection;
