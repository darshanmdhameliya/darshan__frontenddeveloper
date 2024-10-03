import React from 'react';

// footer 
import Sign_Footer from './Sign_Footer'

export const ContactUs = () => {
  return (
    <div className='w-full sm:container sm:m-auto sm:px-14'>
      <div className="min-h-screen flex flex-col justify-center items-center py-12">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h2>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your name" required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your email" required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-600">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Veggie Street, Food City, 12345</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@foodyzone.com</p>
              </div>
            </div>
          </div>

          {/* Location Map (can integrate Google Maps) */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Our Location
            </h3>
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59513.182032906065!2d72.78442243862621!3d21.20908028595022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f02397941bd%3A0xf103a23101102563!2sVarachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1727956192022!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>

        {/* footer  */}
        <Sign_Footer />
      </div>
    </div>
  );
};



