import ServiceCard from "./ServiceCard";
import service1 from "../../assets/images/road-service.jpg";
import service2 from "../../assets/images/bridge-service.jpg";
import service3 from "../../assets/images/canal-service.webp";
import service4 from "../../assets/images/skyscraper-service.avif";
import pool from "../../assets/images/pool-service.webp";
import Hero from "../../components/Hero";

const services = [
  {
    image: service1,
    title: "Road Construction",
    description:
      " Expertise in constructing durable and efficient road networks that connect communities.",
  },
  {
    image: service2,
    title: "Bridge Construction",
    description:
      " Delivering robust and innovative bridge designs that enhance transportation infrastructure.",
  },
  {
    image: service3,
    title: "Canal Construction",
    description:
      "Engineering sustainable water management solutions through canal construction.",
  },
  {
    image: service4,
    title: "Skyscraper Construction",
    description:
      "Building iconic skyscrapers that redefine urban skylines with modern architectural designs.",
  },
  {
    image: pool,
    title: "Swimming Pool Construction",
    description:
      "Creating luxurious and high-quality swimming pools for residential and commercial use.",
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
