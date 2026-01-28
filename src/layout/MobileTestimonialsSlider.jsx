import { useCallback, useEffect, useState, useRef } from "react";
import { HiChevronRight } from "react-icons/hi";

import testimonialsContent from "../data/testimonialsContent";
import StarsReview from "../components/StarsReview";

const MobileTestimonialsSlider = () => {
  const autoSlide = true;
  const [index, setIndex] = useState(0);

  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startTouchRef = useRef(0);

  {
    /* Auto Btns Slider */
  }

  const intervalRef = useRef(null);
  const maxIndex = testimonialsContent.length - 1;

  const startInterval = useCallback(() => {
    if (!autoSlide || isDragging) return null;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(
      () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)),
      3000,
    );
  }, [maxIndex, autoSlide, isDragging]);

  const handlePrevious = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    startInterval();
  };

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  {
    /* Dragging Slider */
  }

  const handleTouchStart = (e) => {
    setIsDragging(true);
    startTouchRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentMoveTouch = e.touches[0].clientX;
    const move = currentMoveTouch - startTouchRef.current;

    setDragX(move);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const threshold = 90;

    setIsDragging(false);

    if (dragX > threshold) {
      handlePrevious();
    } else if (dragX < -threshold) {
      handleNext();
    }

    setDragX(0);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="testimonial-cards relative
      w-full min-h-100
      p-2
      flex justify-center items-center
      transition-all duration-700"
    >
      {testimonialsContent.map((card, i) => {
        const { id, name, image, description, classType, score } = card;

        const isActive = i === index;
        const isPrevious = i === (index === 0 ? maxIndex : index - 1);
        const isNext = i === (index === maxIndex ? 0 : index + 1);

        return (
          <div
            key={id}
            className={`testimonial-card absolute
                  font-montserrat 
                  w-full h-full
                  max-w-[calc(100vw-1rem)]
                  flex flex-col justify-between
                  rounded-2xl bg-neutral-100
                  transition-all duration-500 ease-in-out
                  ${isDragging ? "transition-none" : ""}

                  ${
                    isActive
                      ? " z-20"
                      : isPrevious || isNext
                        ? "opacity-50 pointer-events-none z-10"
                        : "opacity-0 pointer-events-none"
                  }
                  `}
            style={{
              transform: isActive
                ? `translateX(${dragX}px)`
                : isPrevious
                  ? `translateX(calc(-100% + ${dragX}px))`
                  : isNext
                    ? `translateX(calc(100% + ${dragX}px))`
                    : "",
            }}
          >
            <div className="p-6">
              <div className="reviews-part flex items-center gap-6">
                <p className="font-heading text-4xl text-sky-900">
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
                <p className="font-heading text-xl text-sky-900 mb-2">{name}</p>
                <p className="font-montserrat font-semibold text-sky-500">
                  {classType}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <button
        onClick={handlePrevious}
        aria-label="Previous testimonial"
        className="absolute 
        top-1/2 left-2 z-30 
        py-2 rounded 
        flex items-center justify-center cursor-pointer
        bg-sky-500/70 active:scale-90"
      >
        <HiChevronRight className="text-3xl text-white -scale-x-100" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next testimonial"
        className="absolute 
        top-1/2 right-2 z-30 
        py-2 rounded
        flex items-center justify-center cursor-pointer
        bg-sky-500/70 active:scale-90"
      >
        <HiChevronRight className="text-3xl text-white scale-x-100" />
      </button>
    </div>
  );
};

export default MobileTestimonialsSlider;
