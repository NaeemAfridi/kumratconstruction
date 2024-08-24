const VisionMission = () => {
  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:justify-center">
        {/* Vision Card */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-200 text-gray-800 px-6 py-4 md:px-8 md:py-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-red-600 font-bold text-center">
            Our Vision
          </h2>
          <p className="font-medium text-sm sm:text-base md:text-lg text-center">
            “To build infrastructure that inspires progress and to craft
            structures that endure, with unwavering commitment to quality,
            safety, and sustainability.”
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-200 text-gray-800 px-6 py-4 md:px-8 md:py-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-bold text-center">
            Our Mission
          </h2>
          <ul className="list-disc text-sm sm:text-base md:text-lg px-4">
            <li>
              On-time completion of every project, delivered with the highest
              quality with mechanization where possible.
            </li>
            <li>
              Commitment to achieving client satisfaction and success in every
              transaction.
            </li>
            <li>
              Become one of the well-known brands in employing migrant and local
              employees.
            </li>
            <li>
              Execute every project with a focus on environmental sustainability
              and reduction of carbon footprint.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
