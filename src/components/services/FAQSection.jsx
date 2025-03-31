'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What is a custom website?',
    answer:
      'A custom website is a tailor-made digital platform that has been designed from scratch with your business needs in mind. Unlike pre-built templates or themes, a custom website is uniquely created to meet your specific needs. With tailor-made features, elements, and integrations, a custom website is both flexible and scalable to match user intent and support growth.',
  },
  {
    id: 2,
    question: 'What is custom web development?',
    answer: 'Custom web development involves building a website from the ground up, ensuring it meets specific requirements rather than relying on pre-built templates.',
  },
  {
    id: 3,
    question: 'Why do I need custom web development services?',
    answer: 'Custom web development services provide tailored solutions that align with your business objectives, enhancing user experience and scalability.',
  },
  {
    id: 4,
    question: 'How much do web development services cost?',
    answer: 'The cost varies based on project scope, complexity, and features required. A consultation can help determine an accurate estimate.',
  },
  {
    id: 5,
    question: 'Can you integrate my current content, data, and features into a new custom website?',
    answer: 'Yes, existing content, data, and features can be seamlessly integrated into a new custom website to maintain consistency and functionality.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className=" container mx-auto px-4 md:px-20  items-center pb-24 bg-blue-900 bg-gradient-to-b from-blue-900 to-purple-900">

    <div className="  flex justify-center items-center p-6 text-white">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Helpful FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className=" p-4 rounded-lg">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
                <span className="ml-2 flex-1">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && <p className="mt-2 text-sm text-gray-200">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
