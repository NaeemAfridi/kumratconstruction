import ContactSection from "./ContactSection";
import CounterSection from "./CounterSection";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <Testimonials />
      <CounterSection />
      <ContactSection />
    </>
  );
};

export default Home;
