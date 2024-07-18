import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";
import client4 from "../../assets/images/client4.jpg";
import { FaStar } from "react-icons/fa"; // For star rating

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: client1,
    rating: 5,
    link: "#",
    description: "This is an amazing service! Highly recommend to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: client2,
    rating: 4,
    link: "#",
    description: "Really satisfied with the results. Will use again.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: client3,
    rating: 5,
    link: "#",
    description: "Exceptional quality and customer service.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    image: client4,
    rating: 5,
    link: "#",
    description: "Exceptional quality and customer service.",
  },
];

const TestimonialCard = ({ testimonial }) => {
  const { name, image, rating, link, description } = testimonial;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center ">
      <img src={image} alt={name} className=" w-80 h-60 object-cover mb-4" />
      <div className="flex items-center justify-between gap-8">
        <h3 className="text-xl text-black font-semibold mb-2">{name}</h3>
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={`text-yellow-500 ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 testimonials">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
