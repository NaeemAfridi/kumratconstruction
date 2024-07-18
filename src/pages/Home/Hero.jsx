import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      {/* <FaArrowRight size={30} className="text-white" /> */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      {/* <FaArrowLeft size={30} className="text-white" /> */}
    </div>
  );
};

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        <div className="bg-hero-image-1 bg-cover bg-center w-full h-screen"></div>
        <div className="bg-hero-image-2 bg-cover bg-center w-full h-screen"></div>
        <div className="bg-hero-image-3 bg-cover bg-center w-full h-screen"></div>
      </Slider>
      <div
        className="absolute inset-0 flex items-center flex-col gap-5 justify-center"
        style={{ background: "rgba(0,0,0,0.4)" }}
      >
        <h1 className="text-white text-center text-4xl md:text-5xl font-bold w-8/12">
          Expertise that Inspires Confidence. Buildings that Instill Pride.
        </h1>
        <p className="text-white text-xl">
          Better building starts with Company name.
        </p>
      </div>
    </section>
  );
};

export default Hero;
