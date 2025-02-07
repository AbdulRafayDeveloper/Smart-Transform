import FeaturedCards from "./featuredCards";

const Featured = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-600 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            SmartTransform Features
          </h1>
          <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
            Explore the powerful AI-driven tools that make SmartTransform the best platform for voice, video, and text transformation.
          </p>
        </div>

        {/* Featured Cards Section */}
        <div className="mt-8">
          <FeaturedCards />
        </div>
      </div>
    </div>
  );
};

export default Featured;
