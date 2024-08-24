import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed for routing

const AboutSection = ({ title, image }) => {
  return (
    <section className="flex flex-col  md:flex-row items-start p-4 md:p-8 text-white bg-transparent">
      <div className="md:w-1/2 w-full p-4 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold md:w-10/12">{title}</h2>
        <Link to="/about" className="text-orange-500 hover:underline ">
          About us
        </Link>
        <p>
          Established in 1992, Kumrat Construction Pvt. Ltd. has built a legacy
          of excellence in the construction industry. With over three decades of
          experience, we have successfully delivered a wide range of projects
          that include roads, bridges, canals, swimming pools, and iconic
          skyscrapers. Our commitment to quality, innovation, and client
          satisfaction has earned us a reputation as one of the leading
          construction firms in the region. At Kumrat Construction, we take
          pride in our ability to transform visions into reality. Whether it’s
          developing critical infrastructure or creating architectural
          masterpieces, we approach each project with the same dedication to
          precision, efficiency, and sustainability. Our team of skilled
          professionals, backed by cutting-edge technology and industry best
          practices, ensures that every project is completed to the highest
          standards. From the foundations that support communities to the
          landmarks that define skylines, Kumrat Construction Pvt. Ltd. is
          committed to building structures that stand the test of time. Our work
          is not just about construction; it's about creating enduring legacies
          that contribute to the growth and development of our nation.
        </p>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <img
          src={image}
          alt="Descriptive Alt Text"
          className="w-full object-contain h-auto md:h-[80vh]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutSection;
