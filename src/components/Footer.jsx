import { FaFacebook, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-[#111] py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">About Us</h2>
          <p>
            Established in 1992, Kumrat Construction Pvt. Ltd. has built a
            legacy of excellence in the construction industry. With over three
            decades of experience, we have successfully delivered a wide range
            of projects that include roads, bridges, canals, swimming pools, and
            iconic skyscrapers.
          </p>
          <div className="icons flex items-center gap-5">
            <a
              href="https://www.facebook.com/share/p/d2LWwyTf8SExxffp/?mibextid=oFDknk"
              target="blank"
            >
              <FaFacebook className="text-2xl" />
            </a>

            <a
              href="https://www.instagram.com/p/C39Yx8zIyTL/?igsh=dGk2eTFzZHlmbzIx"
              target="blank"
            >
              <FaInstagram className="text-2xl" />
            </a>

            <FaLinkedinIn className="text-2xl" />
            <FaSkype className="text-2xl" />
          </div>
        </div>
        {/* Head Office Section */}
        <div className="space-y-4 flex items-center flex-col">
          <h2 className="text-xl font-bold">Head Office</h2>
          <ul className="flex flex-col gap-2 list-none">
            <li>Street25, G-6</li>
            <li> Apara Market , Islamabad </li>
            <li>Phone: +923465500003</li>
            <li>Email: kumratconstructionpvtltd@gmail.com </li>
            <li>OfficeTime: 9AM to 6PM</li>
          </ul>
        </div>
        {/* Newsletter Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">Newsletter</h2>
          <p>
            Receive monthly updates, expert insights, and exclusive content
            directly in your inbox.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 flex-1 outline-none rounded border-none text-gray-800"
            />
            <button
              type="submit"
              className=" text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 bg-orange-600 border-1 border border-gray-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
