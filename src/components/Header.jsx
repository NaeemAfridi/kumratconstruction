import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10">
      <div className="md:hidden relative z-10">
        <button
          onClick={toggleMenu}
          className="text-white absolute right-3 top-2"
        >
          {isMenuOpen ? (
            <IoClose size={24} className="z-10" />
          ) : (
            <FaBarsStaggered size={24} />
          )}
        </button>
      </div>
      <nav
        className={`flex-col items-center justify-between md:flex-row md:flex gap-10 absolute md:relative top-0 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent py-4 px-6 md:p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="text-xl font-bold text-orange-500 text-center">
          KumratConstruction
        </div>

        <ul className="md:flex-row flex items-center gap-2 mt-4 md:mt-0 md:gap-10 flex-col">
          <li>
            <a
              href="#home"
              className="text-white hover:text-gray-300 block md:inline-block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-gray-300 block md:inline-block"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-white hover:text-gray-300 block md:inline-block"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 block md:inline-block"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
