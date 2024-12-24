import VariableWeightText from "../components/VariableWeightText";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ email: "", name: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <VariableWeightText
          regularText="Get in Touch"
          extraboldText="Contact Us"
          invert
        />
        <p className="text-gray-400 mt-4">
          We’d love to hear from you! Fill out the form below to send us a
          message, and we’ll get back to you as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8 space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="flex-1 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="flex-1 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        /> */}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="w-full p-3 h-32 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:from-purple-600 hover:to-blue-500 transition-transform transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
