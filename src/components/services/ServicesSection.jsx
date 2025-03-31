'use client'

import { useState } from "react";

const services = [
  {
    title: "Custom Web Design",
    content:"Work with top web designers to build a custom website that’s optimized for local search and conversion.",
    content1:"Our deliverables include thorough strategy and planning, unique UX and UI design, SEO and quality assurance to boost visibility and engagement.",
    image:"images/s1.png"
  },
  {
    title: "Custom Website Redesign",
    content:
      "Assess and improve your website design with the support of award-winning designers and expert digital strategists.",
      content1:"From migrating to a new CMS to a complete website overhaul, we create an on-brand solution that’s optimized for search engines, engagement and conversion.",
   image:"images/s2.png"
    },
  {
    title: "eCommerce Web Design",
    content:
      "Our experts work with all leading eCommerce platforms, including Shopify, WooCommerce and Adobe Commerce (Magento) to deliver an eCommerce web design that fits your requirements.",
      content1:"We build a streamlined shopping experience that captures leads, reduces cart abandonment rates and drives revenue for your brand.",
    image:"images/s3.png"
  },
  {
    title: "B2B Web Design",
    content:
      "B2B Web Design Work with our team to build an industry-leading B2B website that serves as a powerful lead generation tool for your brand.",
      content1: "With custom and professional design, we’ll help you grow your visibility, authority and trust to reach your target market and solidify new partnerships.",
    image:"images/s4.png"
    },

  {
    title: "Local SEO",
    content:"Local SEOLooking to gain visibility in the market? Partner with our strategists to plan and implement a custom search engine optimization strategy.",
    content1:"Using insights into your industry, competitors, and audience, our team will create an SEO plan that increases your local search visibility and attracts new customers.",
     image:"images/s5.png",
    },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <div className=" container mx-auto px-4   items-center pb-24 bg-gray-900">
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-6 ">
      {/* Left Content Section */}
      <div className="md:w-2/3 pr-6">
        <h2 className="text-5xl font-bold mb-4">Custom Web Development Services</h2>
        <p className="text-gray-400 text-2xl mb-6">
          Leverage the experience and creativity of our award-winning designers through our selection of web design services.
        </p>
        {services.map((service, index) => (
          <div key={index}>
            <h3
              className={`text-2xl font-semibold cursor-pointer mb-2 ${
                activeIndex === index ? "text-blue-400" : "text-blue-400"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {service.title}
            </h3>
            {activeIndex === index && (

                <>
                <div className=" flex ">

                    <div className="w-[60%]">
                    <p className="text-gray-300 text-xl mb-4">{service.content}</p>
                    <p className="text-gray-300 text-xl mb-4">{service.content1}</p>
                    </div>
                     <div className=" w-[40%]">
                     <img src={service.image} alt="" className=" w-[200px]"/>
                     </div>
                    
                </div>
                </>
              
            )}
          </div>
        ))}
      </div>

      {/* Right Form Section */}
      <div className="md:w-1/3 h-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-blue-600 mb-2">Request A Quote</h3>
        <p className="mb-4 font-semibold">Grow Your Brand Online With Digital Silk</p>
        <form className="space-y-4">
          <input type="text" placeholder="Name*" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Company Name*" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email*" className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Phone*" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message*" className="w-full p-2 border rounded h-24"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">SUBMIT</button>
        </form>
      </div>
    </div>
    </div>
  );
}
