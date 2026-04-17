import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </>
  );
}
