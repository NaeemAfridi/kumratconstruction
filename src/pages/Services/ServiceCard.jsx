const ServiceCard = ({ image, title, description }) => {
  return (
    <div className=" shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
