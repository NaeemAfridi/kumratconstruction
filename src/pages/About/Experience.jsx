const Experience = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center gap-5 mt-10 py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
        We have 40+ years experience in Construction
      </h2>
      <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg">
        we deliver trusted expertise and quality craftsmanship on every project.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <button className="border border-gray-400 rounded-lg px-6 py-2 text-sm sm:text-base md:text-lg">
          +0123456789
        </button>
        <button className="bg-orange-600 hover:bg-orange-500 rounded-lg border-none px-6 py-2 font-bold text-sm sm:text-base md:text-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Experience;
