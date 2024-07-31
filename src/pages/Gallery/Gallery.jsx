import Hero from "../../components/Hero";
import galleryImg1 from "../../assets/images/galleryImg1.png";
import galleryImg2 from "../../assets/images/galleryImg2.png";
import galleryImg3 from "../../assets/images/galleryImg3.png";
import galleryImg4 from "../../assets/images/galleryImg4.png";
import galleryImg5 from "../../assets/images/galleryImg5.png";
import galleryImg6 from "../../assets/images/galleryImg6.png";
import galleryImg7 from "../../assets/images/galleryImg7.png";
import galleryImg8 from "../../assets/images/galleryImg8.png";
import galleryImg9 from "../../assets/images/g1.jpg";
import galleryImg10 from "../../assets/images/g10.jfif";

const Gallery = () => {
  return (
    <>
      <section className="relative w-full h-80 bg-cover bg-center about-hero px-4">
        <Hero page="Gallery" title="Work Gallery" />
      </section>
      <section className="container mx-auto py-12 mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-2">
          {/* Large image spanning 4 columns and 2 rows */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 row-span-2 h-60 md:h-96 lg:h-96">
            <img
              src={galleryImg1}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image spanning 6 columns and 1 row */}
          <div className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-6 h-32 sm:h-48 md:h-48 lg:h-48">
            <img
              src={galleryImg2}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Smaller images spanning 2 columns and 1 row */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 h-32 sm:h-48 md:h-48 lg:h-48">
            <img
              src={galleryImg10}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-6 h-32 sm:h-48 md:h-48 lg:h-48">
            <img
              src={galleryImg3}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 h-32 sm:h-48 md:h-48 lg:h-48">
            <img
              src={galleryImg9}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Other smaller images spanning 2 columns and 1 row */}
          <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-4 h-32 sm:h-48 md:h-56 lg:h-64">
            <img
              src={galleryImg4}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 h-32 sm:h-48 md:h-56 lg:h-64">
            <img
              src={galleryImg5}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 h-32 sm:h-48 md:h-56 lg:h-64">
            <img
              src={galleryImg6}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 h-32 sm:h-48 md:h-56 lg:h-64">
            <img
              src={galleryImg7}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 h-32 sm:h-48 md:h-56 lg:h-64">
            <img
              src={galleryImg8}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
