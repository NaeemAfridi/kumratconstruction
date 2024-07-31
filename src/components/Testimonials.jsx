import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";
import user5 from "../assets/images/user5.png";
import user6 from "../assets/images/user6.png";
import { FaStar } from "react-icons/fa"; // For star rating

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: user1,
    rating: 5,
    link: "#",
    description: "This is an amazing service! Highly recommend to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: user2,
    rating: 4,
    link: "#",
    description: "Really satisfied with the results. Will use again.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: user3,
    rating: 5,
    link: "#",
    description: "Exceptional quality and customer service.",
  },
  {
    id: 4,
    name: "Michael Brown",
    image: user4,
    rating: 5,
    link: "#",
    description: "Great experience! Will recommend to others.",
  },
  {
    id: 5,
    name: "Emily Davis",
    image: user5,
    rating: 5,
    link: "#",
    description: "Top-notch service and friendly staff.",
  },
  {
    id: 6,
    name: "Daniel Williams",
    image: user6,
    rating: 5,
    link: "#",
    description: "Outstanding results and professional approach.",
  },
];

const TestimonialCard = ({ name, image, rating, link, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transition-transform transform hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex">
            {Array.from({ length: rating }).map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-orange-500 hover:text-orange-700">
        Read more
      </a>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        modules={[EffectCoverflow]}
        effect="coverflow"
        breakpoints={{
          268: {
            slidesPerView: 1, // Change to 1 on screens with a width of 768px or less
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2, // Change to 1 on screens with a width of 768px or less
          },
          1300: {
            slidesPerView: 3, // Change to 1 on screens with a width of 768px or less
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
