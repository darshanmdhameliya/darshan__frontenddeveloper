import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Close the currently open question
    } else {
      setOpenQuestion(index); // Open the selected question
    }
  };

  const faqData = [
    {
      question: 'What is Foodyzone?',
      answer: 'Foodyzone is a platform offering delicious vegetarian fast food, including pizza, burgers, desserts, and more.'
    },
    {
      question: 'How can I place an order?',
      answer: 'Simply browse through our menu, select your favorite items, and follow the checkout process. We deliver directly to your location!'
    },
    {
      question: 'Is there a delivery charge?',
      answer: 'Delivery charges may apply based on your location and order total. Please check the delivery details during checkout.'
    },
    {
      question: 'Do you offer vegan options?',
      answer: 'Yes! We offer a wide range of vegan options in addition to our vegetarian meals.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, once your order is placed, you will receive an email or SMS with the tracking details.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?food)' }}>
      <div className="max-w-3xl w-full space-y-6 bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Frequently Asked Questions</h1>
        
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <button 
              className="w-full flex justify-between items-center bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 px-4 py-5 text-left text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
              onClick={() => toggleQuestion(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openQuestion === index && (
              <div className="bg-gray-50 px-4 py-5 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
