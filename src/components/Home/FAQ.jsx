"use client"; // Mark this file as a client component

import React, { useState } from "react";
import Button from "../button/Button";

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Typically, you can expect noticeable improvements within 3-6 months, depending on competition and keyword difficulty.",
  },
  {
    question: " What is the best digital marketing service for small businesses?",
    answer:
      "A mix of SEO, PPC, social media marketing, and content marketing works best to build brand awareness and generate leads.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "The cost varies depending on your business needs, goals, and industry competition. Contact us for a customized cost-effective package.",
  },
  {
    question: "Why should I invest in PPC if I already do SEO?",
    answer:
      "YSEO is a long-term strategy, while PPC provides instant visibility and leads. A balanced approach using both ensures sustainable growth.",
  },
 
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (

    <div className="bg-gradient-to-r from-blue-500 to-purple-700">
    <div className="container mx-auto px-4 md:px-20  items-center">
      <div className=" pt-24">
        <Button text={"Digital Aggency Query"} />

        <h2 className="font-bold text-3xl text-white  pt-4 pb-3">
          <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
            Frequently
          </span>{" "}
          Asked Question
        </h2>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-700 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    <span className="text-2xl text-white">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-4  text-white">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Support Team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-primary text-white p-4 rounded-lg">
                <p className="font-semibold mb-2">
                  Your Queries Not Listed Below
                </p>
                <p className="text-sm mb-4">Pram in malesuada libero magna.</p>
                <button className="bg-white text-primary px-6 py-2 rounded-full text-sm">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
