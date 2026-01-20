import { MdVerified } from "react-icons/md";
import { TbHours24 } from "react-icons/tb";

const IntroSection = ({ sectionRefs }) => {
  return (
    <div
      id="intro"
      ref={sectionRefs}
      className="hero-section
      flex justify-center items-center
      w-full h-full
      min-h-screen
      bg-neutral-100"
    >
      <div
        className="hero-container
        mt-26
        w-full md:max-w-4xl
        mx-2 md:mx-6"
      >
        <p
          className="
          text-sm md:text-md
          font-montserrat font-bold
          te xt-neutral-700 tracking-widest"
        >
          WELCOME TO YOUR SPORT CLUB
        </p>

        <h2
          className="
          mb-6 leading-tight
          font-heading font-semibold
          text-4xl md:text-6xl text-neutral-800"
        >
          Your Fitness Journey <span className="text-sky-400">Starts Here</span>
        </h2>

        <p className="font-montserrat text-neutral-600 mb-8 max-w-xl leading-relaxed">
          Expert guidance, modern equipment, and a motivating community
          <br />— all in one place.{" "}
          <span className="font-semibold text-neutral-800">
            No matter your goal
          </span>
          , we have the perfect plan for you.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-neutral-200 pt-6">
          <div className="flex items-center gap-2">
            <MdVerified className="text-sky-950 text-2xl" />
            <span className="flex h-2 w-2 rounded-full bg-sky-500"></span>
            <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              Trusted by <span className="text-sky-600 text-lg">500+</span>{" "}
              local members
            </p>
          </div>

          <div className="flex items-center gap-2">
            <TbHours24 className="text-sky-950 text-2xl" />
            <span className="flex h-2 w-2 rounded-full bg-sky-500"></span>
            <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              Open <span className="text-sky-600 text-lg">24/7</span> for your
              convenience
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-4 mt-6 max-w-2xl">
          <button
            className="
            flex-2/3
            text-2xl
            w-90 border-2
            border-sky-400
            px-6 py-2 rounded
            font-heading text-white
            bg-sky-400 hover:bg-sky-500
            scale-100 hover:scale-102
            transaction-transform duration-300"
          >
            Join Now
          </button>
          <button
            className="
            flex-1/3
            text-2xl
            w-90 border-2
            border-sky-400
            px-6 py-2 rounded
            font-heading 
            text-sky-400 hover:text-white
            bg-white hover:bg-sky-500
            transaction-transform duration-300"
          >
            View Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
