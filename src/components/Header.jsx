import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full px-8 bg-transparent z-10">
      <div className="md:hidden relative z-10">
        <button
          onClick={toggleMenu}
          className="text-white absolute right-0 top-2"
        >
          {isMenuOpen ? (
            <IoClose size={24} className="z-10" />
          ) : (
            <FaBarsStaggered size={24} />
          )}
        </button>
      </div>
      <nav
        className={`flex-col items-center justify-between md:flex-row md:flex gap-10 absolute md:relative top-0 md:top-0 left-0 w-full md:w-auto bg-[#222] md:bg-transparent py-4 px-6 md:p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Link to="/" className="text-xl font-bold text-orange-500 text-center">
          KumratConstruction
        </Link>

        <ul className="md:flex-row flex items-center gap-2 mt-4 md:mt-0 md:gap-10 flex-col">
          <li>
            <Link
              to="/"
              className="text-white font-bold hover:text-orange-600 block md:inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-bold hover:text-orange-600 block md:inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-white font-bold hover:text-orange-600 block md:inline-block"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white font-bold hover:text-orange-600 block md:inline-block"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-bold hover:text-orange-600 block md:inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
