import testimonialsContent from "../data/testimonialsContent";
import MobileTestimonialsSlider from "../layout/MobileTestimonialsSlider";
import StarsReview from "../components/StarsReview";

const TestimonialsSection = ({ sectionRefs }) => {
  return (
    <section
      id="testimonials"
      ref={sectionRefs}
      aria-labelledby="testimonial-heading"
      className="testimonial-section
      flex justify-center overflow-hidden
      md:min-h-screen
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      bg-linear-to-tr from-neutral-100 to-sky-100
      bg-neutral-100"
    >
      <div
        className="testimonial-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="testimonial-card
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100vh-var(--header-mobile))] 
          md:min-h-[calc(100vh-var(--header-desktop))]"
        >
          {/* Content Start */}

          <h2
            id="testimonial-heading"
            className="font-heading
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-neutral-700"
          >
            What Our Members Say
          </h2>

          <div
            className="testimonial-cards p-2 my-auto
            hidden md:grid grid-cols-3 gap-4"
          >
            {testimonialsContent.map((card) => {
              const { id, name, image, description, classType, score } = card;
              return (
                <div
                  key={id}
                  className="testimonial-card
                  font-montserrat
                  flex flex-col justify-between
                  rounded-2xl
                  bg-neutral-100 
                  shadow hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="reviews-part flex items-center gap-6">
                      <p className="font-semibold text-4xl text-sky-900">
                        {score || `5`}
                      </p>
                      <StarsReview score={score} />
                    </div>
                    <div className="mt-6 text-neutral-600">
                      {description.map((paragraph, i) => {
                        return (
                          <p key={i} className="mb-2">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="profile-part
                    flex space-x-6 items-center
                    p-6 rounded-b-2xl
                    bg-neutral-200"
                  >
                    <div className="profile-picture">
                      <img
                        className="rounded-full w-20 aspect-square"
                        src={image}
                        alt={`${name} image`}
                      />
                    </div>
                    <div className="profile-name">
                      <p className="font-heading text-xl text-sky-900 mb-2">
                        {name}
                      </p>
                      <p className="font-montserrat font-semibold text-sky-500">
                        {classType}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content End */}

          {/* Mobile Slide Start */}

          {/* <MobileTestimonialsSlider /> */}
          <div className="md:hidden flex flex-1">
            <MobileTestimonialsSlider />
          </div>

          {/* Mobile Slide End */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
