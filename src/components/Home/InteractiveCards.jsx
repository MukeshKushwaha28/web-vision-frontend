"use client";
import { useState } from "react";
import Button from "../button/Button";

const data = [
  {
    id: 1,
    title: "Marketing Automation",
    content:
      "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem.",
    tag: "MARKETING",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
  {
    id: 2,
    title: "Digital Consulting",
    content:
      "Vivamus interdum pulvinar sem. Praesent viverra et metus. Nullam bibendum molestie velit, non sodales orci condimentum.",
    tag: "DIGITAL",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
  {
    id: 3,
    title: "SEO Optimization",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    tag: "SEO",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    content:
      "Etiam non massa urna. Integer feugiat lorem nec arcu interdum, eget congue augue accumsan.",
    tag: "SOCIAL MEDIA",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/home-service-image-02.jpg",
  },
];

export default function ServiceCards() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className=" container mx-auto px-4 md:px-20  items-center pb-24">
      <div className=" pt-24">
        <Button text={"Comprehenssive Services"} />

        <h2 className="font-bold text-3xl text-black  pt-4 pb-10">
          Outstand{" "}
          <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
            Cost Effective Digital
          </span>{" "}
          <br /> Aggency Solution
        </h2>
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
