import Hero from "../../components/Hero";
import ContactSection from "../../components/ContactSection";

const ContactPage = () => {
  return (
    <>
      <section className="relative w-full h-80 bg-cover bg-center contact-hero">
        <Hero page="Contact" title="Contact" />
      </section>
      <section className="py-12">
        <ContactSection />
      </section>
    </>
  );
};

export default ContactPage;
