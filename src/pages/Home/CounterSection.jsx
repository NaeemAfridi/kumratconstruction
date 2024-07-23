import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto  md:px-12 flex flex-col items-center">
        <h2 className="md:text-5xl text-3xl font-bold mb-8 text-center px-4 md:w-1/2">
          Build Better, On Time, On Budget, We Deliver
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
          <h3 className="text-6xl font-bold mb-4 text-orange-500">
            +<CountUp start={0} end={40} duration={2.5} />
            <p className="text-white text-xl font-medium mt-2">
              Years of Success
            </p>
          </h3>
          <h3 className="text-6xl font-bold mb-4 text-orange-500">
            +<CountUp start={0} end={800} duration={2.5} />
            <p className="text-white text-xl font-medium mt-2">
              Projects Completed
            </p>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
