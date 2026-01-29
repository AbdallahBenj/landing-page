import { useRef, useState } from "react";

import Header from "./layout/Header";
import HomeSection from "./sections/HomeSection";
import FeaturesSection from "./sections/FeaturesSection";
import ClassesSection from "./sections/ClassesSection";
import ScheduleSection from "./sections/ScheduleSection";
import ReviewsSection from "./sections/ReviewsSection";
import PlansSection from "./sections/PlansSection";
import ContactSection from "./sections/ContactSection";
import TemplateSection from "./sections/TemplateSection";
import Footer from "./layout/Footer";

function App() {
  const sectionRefs = useRef({});
  const setSectionRef = (ref) => (el) => (sectionRefs.current[ref] = el);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "",
    plan: "",
    message: "",
  });

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <HomeSection
        sectionRefs={sectionRefs}
        sectionRef={setSectionRef("home")}
      />
      <FeaturesSection sectionRef={setSectionRef("features")} />
      <ClassesSection
        setFormData={setFormData}
        sectionRefs={sectionRefs}
        sectionRef={setSectionRef("classes")}
      />
      <ScheduleSection
        sectionRefs={sectionRefs}
        sectionRef={setSectionRef("schedule")}
      />
      <ReviewsSection sectionRef={setSectionRef("reviews")} />
      <PlansSection
        setFormData={setFormData}
        sectionRefs={sectionRefs}
        sectionRef={setSectionRef("plans")}
      />
      <ContactSection
        formData={formData}
        setFormData={setFormData}
        sectionRefs={sectionRefs}
        sectionRef={setSectionRef("contact")}
      />
      <TemplateSection sectionRef={setSectionRef("template")} />
      <Footer />
    </>
  );
}

export default App;
