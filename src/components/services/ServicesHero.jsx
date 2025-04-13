import ImageCrosel from "./ImageCrosel";

export default function ServicesHero() {
  return (
   <div className="bg-gradient-to-r from-blue-500 to-purple-700">
    <div className="container mx-auto items-center ">
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-gradient-to-r from-blue-500 to-purple-700">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-white">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Custom Web Development Company
        </h1>
        <p className="mt-4 text-lg lg:text-xl opacity-90">
          Partner with a top-rated custom web development company to build a high-performance website. From engaging corporate sites to complex animations, create a digital experience that drives results.
        </p>

        <ul className="mt-6 space-y-2 text-lg">
          <li>➤ Custom UX & UI Design</li>
          <li>➤ Search & Conversion Optimization</li>
          <li>➤ End-To-End Development</li>
        </ul>

        {/* Request a Quote Button */}
        <div className="mt-8">
          <button className="relative px-6 py-3 font-semibold text-black bg-white overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              REQUEST A QUOTE
            </span>
          </button>
        </div>
      </div>

      {/* Right Content - Image Slider */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <ImageCrosel />
      </div>
    </section>
    </div>
    </div>
  );
}
