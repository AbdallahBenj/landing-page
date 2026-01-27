import { useRef, useEffect } from "react";

import Header from "./layout/Header";
import IntroSection from "./sections/IntroSection";
import FeaturesSection from "./sections/FeaturesSection";
import ClassesSection from "./sections/ClassesSection";
import ScheduleSection from "./sections/ScheduleSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import TemplateSection from "./sections/TemplateSection";
import Footer from "./layout/Footer";

function App() {
  const sectionRefs = useRef({});
  const setSectionRef = (ref) => (el) => (sectionRefs.current[ref] = el);

  useEffect(() => {
    console.log("Section Refs:", sectionRefs);
  }, [sectionRefs]);

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <IntroSection sectionRefs={setSectionRef("intro")} />
      <FeaturesSection sectionRefs={setSectionRef("features")} />
      <ClassesSection sectionRefs={setSectionRef("classes")} />
      <ScheduleSection sectionRefs={setSectionRef("schedule")} />
      <TestimonialsSection sectionRefs={setSectionRef("testimonials")} />
      <TemplateSection sectionRefs={setSectionRef("template")} />
      <Footer />
    </>
  );
}

export default App;
