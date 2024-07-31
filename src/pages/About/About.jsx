import AboutSection from "../../components/AboutSection";
import Hero from "../../components/Hero";
import aboutImage from "../../assets/images/aboutImage.png";
import VisionMission from "./VisionMission";
import Experience from "./Experience";
import Testimonials from "../../components/Testimonials";

const About = () => {
  return (
    <>
      <section className="relative w-full h-80 bg-cover bg-center about-hero px-4 ">
        <Hero page="About" title="About Us" />
      </section>
      <section className="py-12 flex flex-col gap-10 px-4">
        <AboutSection title="We Build of Your Comfort" image={aboutImage} />
        <VisionMission />
        <Experience />
        <Testimonials />
      </section>
    </>
  );
};

export default About;
