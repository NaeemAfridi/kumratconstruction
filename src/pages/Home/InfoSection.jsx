import infoImg from "../../assets/images/infoImg.jpg";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed for routing

const InfoSection = () => {
  return (
    <section className="flex flex-col  md:flex-row items-start p-4 md:p-8 text-white bg-transparent">
      <div className="md:w-1/2 w-full p-4 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold md:w-10/12">
          We Are Committed To Build Better
        </h2>
        <Link to="/about" className="text-blue-500 hover:underline ">
          about
        </Link>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <img
          src={infoImg}
          alt="Descriptive Alt Text"
          className="w-full h-[70vh] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default InfoSection;
