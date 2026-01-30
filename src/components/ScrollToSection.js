const ScrollToSection = (section) => {
  if (section) {
    section?.scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
      },
      100,
    );
  } else if (!section) {
    console.warn("There is no section!");
  }
};

export default ScrollToSection;
