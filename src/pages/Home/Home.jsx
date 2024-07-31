import ContactSection from "../../components/ContactSection";
import CounterSection from "./CounterSection";
import HeroSlider from "./HeroSlider";
import AboutSection from "../../components/AboutSection";
import Testimonials from "../../components/Testimonials";
import aboutInfoImg from "../../assets/images/aboutInfoImg.png";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection
        title="We Are Committed To Build Better"
        image={aboutInfoImg}
      />
      <Testimonials />
      <CounterSection />
      <ContactSection />
    </>
  );
};

export default Home;
