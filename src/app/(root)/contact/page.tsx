import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-10 px-4">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out to us directly.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-600" size={24} />
            <p className="text-gray-700">+1 234 567 890</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600" size={24} />
            <p className="text-gray-700">contact@mywebsite.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-600" size={24} />
            <p className="text-gray-700">123 Main Street, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 block w-full text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 block w-full text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              className="mt-1 block w-full text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;