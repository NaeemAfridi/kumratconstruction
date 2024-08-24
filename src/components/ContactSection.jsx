const ContactSection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 border-b-2">
          SEND US A MESSAGE
        </h2>
        <form className="w-full max-w-lg  p-8 ">
          <div className="mb-4">
            <label htmlFor="name" className="block  text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block  text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 border-1 border border-gray-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
