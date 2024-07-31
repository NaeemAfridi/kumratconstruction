import ServiceCard from "./ServiceCard";
import service1 from "../../assets/images/service1.jfif";
import service2 from "../../assets/images/service2.jfif";
import service3 from "../../assets/images/service3.jfif";
import service4 from "../../assets/images/service4.jfif";
import Hero from "../../components/Hero";

const services = [
  {
    image: service1,
    title: "Design-Build Services",
    description:
      "Description for service one. Providing the best quality and service.",
  },
  {
    image: service2,
    title: "Residential Construction",
    description:
      "Description for service two. Dedicated to excellence in every project.",
  },
  {
    image: service3,
    title: "Commercial Construction",
    description:
      "Description for service three. Innovating and creating solutions.",
  },
  {
    image: service4,
    title: "Industrial Construction",
    description:
      "Description for service three. Innovating and creating solutions.",
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <>
      <section className="relative w-full h-80 bg-cover bg-center services-hero px-4">
        <Hero page="Services" title="Our Services" />
      </section>
      <section className="container mx-auto py-12 items-center justify-center flex flex-col px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Our Professional Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:w-10/12 gap-10 text-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
