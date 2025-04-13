"use client";
import { useState } from "react";
import Button from "../button/Button";

const data = [
  {
    id: 1,
    title: "Digital Marketing Services",
    content:
      "Results from web visionary media-promote your business with SEO, SMO and PPC services-specialist in development.",
    tag: " Digital MARKETING",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
  {
    id: 2,
    title: "PPC Services",
    content:
      "PPC Services to Instantly Drive Traffic, Generate Leads, Boost Sales, and Maximize Your Brand’s Online Visibility.",
    tag: "PPC",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
  {
    id: 3,
    title: "Web Design & Development",
    content:
      "Innovative, world class website design and development solutions to promote the online appearance and performance of your brand.",
    tag: "Web Design",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
  {
    id: 4,
    title: "Social Media Services",
    content:
      "Promote your brand with attractive materials, develop followers, and create a powerful appearance in all social media platforms.",
    tag: "SOCIAL MEDIA",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },

  {
    id: 5,
    title: "Mobile App Development",
    content:
      "Custom Android and iOS mobile app development corresponds to your business requirements to conform to development, engagement and success.",
    tag: "Mobile App",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },


  {
    id: 6,
    title: "SEO Service",
    content:
      "Experts promote your online appearance with SEO services to improve visibility, run traffic and increase search ranking.",
    tag: "SEO Service",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },


  {
    id: 7,
    title: "Graphic Design",
    content:
      "Professional graphic design services for recording and editing - the web visions prepared for creative professionals in visionary media.",
    tag: "Graphic Design",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },

  {
    id: 8,
    title: "UI/UX Designing",
    content:
      "UI/UX designing: seamless, intuitive, and user -friendly interfaces that easily enhance engagement, purpose and brand experience.",
    tag: "UI/UX",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
];

export default function ServiceCards() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className=" container mx-auto px-4 md:px-20  items-center pb-24">
      <div className=" pt-24">
        <Button text={"Our Expertise"} />
        
        <h2 className="font-bold text-3xl text-black  pt-4 pb-3">
        Digital{" "}
          <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
          Marketing Agency
          </span>{" "}
          <br /> in India that generates results
        </h2>

        <p className=" pb-10">Our Unique & Innovative Strategies are custom designed for each company to succeed </p>
      </div>

      <div className="w-full flex flex-col">
  {data.map((item) => (
    <div
      key={item.id}
      className={`border-t border-b border-black w-full p-6 sm:p-10 md:p-24 flex flex-col sm:flex-row items-center transition-all duration-500 overflow-hidden cursor-pointer relative 
        ${activeId === item.id 
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
          : "bg-gray-100 text-black"
        } group`}
      onMouseEnter={() => setActiveId(item.id)}
    >
      {/* Left Section */}
      <div className="w-full sm:w-1/3 flex items-center justify-start text-xl sm:text-2xl font-semibold">
        {item.id.toString().padStart(3, "0")} {item.title}
      </div>

      {/* Middle Image - Only visible when active */}
      <div
        className={`w-full sm:w-1/3 hidden md:flex items-center justify-center transition-all duration-500 ${
          activeId === item.id ? "opacity-100 h-auto" : "opacity-0 h-0"
        } group`}
      >
        <div className="bg-white p-3 transform rotate-340 transition-all duration-500 group-hover:rotate-[350deg]">
          <img
            src={item.image}
            alt={item.title}
            className={`w-32 h-32 sm:w-40 sm:h-40 object-cover shadow-lg transition-all duration-500 ${
              activeId === item.id ? "block" : "hidden"
            }`}
          />
        </div>
      </div>

      {/* Right Section (Content + Button) */}
      <div className="w-full sm:w-1/3 flex flex-col justify-center items-center sm:items-start p-4 sm:p-6 max-w-xs">
        <div
          className={`text-sm font-semibold px-3 py-1 text-center w-[150px] rounded-full border inline-block ${
            activeId === item.id ? "bg-transparent text-white" : "bg-transparent text-black"
          }`}
        >
          {item.tag}
        </div>

        <p className={`mt-2 ${activeId === item.id ? "text-white" : "text-black"}`}>
          {item.content}
        </p>

        <button className="mt-4 p-2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
          →
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
