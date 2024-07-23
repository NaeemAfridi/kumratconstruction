import { FaFacebook, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-[#111] py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Odio massa est ultricies
            bibendum ornare. Ultrices sed massa mauris leo leo enim quis
            convallis. Ut convallis tortor amet quam. In ut mauris eu nibh vel.
          </p>
          <div className="icons flex items-center gap-5">
            <FaFacebook className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedinIn className="text-2xl" />
            <FaSkype className="text-2xl" />
          </div>
        </div>
        {/* Head Office Section */}
        <div className="space-y-4 flex items-center flex-col">
          <h2 className="text-xl font-bold">Head Office</h2>
          <ul className="flex flex-col gap-2 list-none">
            <li>1234 Main Street</li>
            <li> Anytown, USA 12345</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@company.com</li>
            <li>OfficeTime: 9AM to 6PM</li>
          </ul>
        </div>
        {/* Newsletter Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Id netus ante porttitor
            imperdiet.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 mb-4 rounded border-none text-gray-800"
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
