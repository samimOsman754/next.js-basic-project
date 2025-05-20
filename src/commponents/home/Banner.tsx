const Banner = () => {
  return (
    <div className="relative  text-white py-20 px-10 text-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJsdXUlMjB3aGl0ZXxlbnwwfHx8fDE2OTI5NTY1NzE&ixlib=rb-4.0.3&q=80&w=1080')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Animated Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing content and explore new opportunities with us.
        </p>
        {/* Call-to-Action Button */}
        <a href="samim"  className="bg-gradient-to-r from-white to-gray-200 text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
          Get Started
        </a>
        
      </div>
    </div>
  );
};

export default Banner;