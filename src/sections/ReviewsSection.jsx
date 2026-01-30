import reviewsContent from "../data/reviewsContent";
import sections from "../data/sections";
import ReviewsMobileSlider from "../layout/ReviewsMobileSlider";
import StarsReviews from "../components/StarsReviews";

const ReviewsSection = ({ sectionRef }) => {
  const currentSection = sections.find((section) => section.id === "reviews");
  if (!currentSection.enabled) return null;

  return (
    <section
      id="reviews"
      ref={sectionRef}
      aria-labelledby="reviews-heading"
      className="reviews-section
      flex justify-center
      min-h-dvh
      scroll-mt-(--header-mobile) 
      md:scroll-mt-(--header-desktop) 
      background-gradient"
    >
      <div
        className="reviews-container
        flex h-full w-full md:max-w-5xl"
      >
        <div
          className="reviews-card
          p-2 md:p-6
          flex flex-col flex-1
          min-h-[calc(100dvh-var(--header-mobile))]
          md:min-h-[calc(100dvh-var(--header-desktop))]"
        >
          {/* Content Start */}

          <h2
            id="reviews-heading"
            className="
            text-center md:text-left mt-4 mb-2
            text-4xl md:text-6xl text-neutral-700"
          >
            What Our Members Say
          </h2>

          <div
            className="reviews-cards p-2 my-auto
            hidden md:grid grid-cols-3 gap-4"
          >
            {reviewsContent.map((card) => {
              const { id, name, image, description, classType, score } = card;
              return (
                <div
                  key={id}
                  className="reviews-card
                  rounded-xl
                  flex flex-col justify-between
                  bg-neutral-100 
                  shadow-md hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="reviews-part flex items-center gap-6">
                      <p className="font-semibold text-4xl text-sky-900">
                        {score || `5`}
                      </p>
                      <StarsReviews score={score} />
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
                    p-6 rounded-b-xl
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
                      <p className="font-semibold text-sky-500">{classType}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content End */}

          {/* Reviews Mobile Slider Start */}

          <div className="md:hidden flex flex-1">
            <ReviewsMobileSlider />
          </div>

          {/* Reviews Mobile Slider End */}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
