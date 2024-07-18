const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10 ">
      <nav className="flex justify-around items-center  py-4">
        <div className=" text-xl font-bold text-orange-500">
          KumratConstruction
        </div>
        <ul className="flex gap-10">
          <li>
            <a href="#home" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
