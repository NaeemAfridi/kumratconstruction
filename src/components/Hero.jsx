import { Link } from "react-router-dom";

const Hero = ({ title, page }) => {
  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">{title}</h1>
      </div>
      <div className="absolute bottom-4 left-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb flex text-white">
            <li className="breadcrumb-item">
              <Link to="/" className="hover:underline text-orange-500">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              /{page}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Hero;
