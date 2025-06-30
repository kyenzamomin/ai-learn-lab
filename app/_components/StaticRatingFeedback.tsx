"use client"; // Ensures it's a Client Component

import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Insha",
    quote: "Amazing platform to create AI-powered courses!",
    rating: 5,
  },
  {
    name: "Fauziya",
    quote: "Very user-friendly and intuitive.",
    rating: 4,
  },
  {
    name: "Asiya",
    quote: "Great experience, loved the design!",
    rating: 4.5,
  },
];

// Helper function to render stars
function renderStars(rating: number) {
  const totalStars = 5;
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (rating >= i + 1) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating > i) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return <div className="flex space-x-1">{stars}</div>;
}

// Common FAQ Data
const faqData = [
  {
    question: "What is AI Learn Lab?",
    answer: "AI Learn Lab is an online platform that helps users generate structured course layouts using AI.",
  },
  {
    question: "How do I create a course?",
    answer: "Simply select a category, input your topic details, and AI Learn Lab will generate a structured course layout for you.",
  },
  {
    question: "Is there a limit to how many courses I can create?",
    answer: "No, you can generate as many courses as you like for free.",
  },
  {
    question: "Can I edit a course after it's generated?",
    answer: "Yes, you can modify and customize your course layout before sharing it.",
  },
  {
    question: "Do the courses include videos?",
    answer: "Yes, you have the option to include relevant YouTube videos in your course layout.",
  },
  {
    question: "Can I share my course with others?",
    answer: "Yes, every generated course comes with a unique shareable link.",
  },
];

// FAQ Component
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-2 border border-gray-300 rounded-lg shadow-md">
          <button
            className="w-full flex justify-between items-center p-3 text-left bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold">{faq.question}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openIndex === index && (
            <div className="p-3 text-left bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Main Component
const StaticRatingFeedback: React.FC = () => {
  return (
    <section className="py-8 px-4 w-full">
      {/* Testimonials Section - Full Width */}
      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((user, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 shadow-md">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="italic text-sm">"{user.quote}"</p>
              {renderStars(user.rating)}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section - Below Testimonials */}
      <FAQSection />
    </section>
  );
};

export default StaticRatingFeedback;
