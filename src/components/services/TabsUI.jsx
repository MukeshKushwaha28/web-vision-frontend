'use client'
import { useState } from "react";
import Image from "next/image";

export default function TabsUI() {
  const [activeTab, setActiveTab] = useState("FEATURED");

  const tabs = ["FEATURED", "B2B", "B2C", "ECOMMERCE"];

  const tabContent = {
    FEATURED: {
      image: "/images/t1.png",
      title: "Reeling In More Customers: J&H Tackle’s eCommerce Evolution",
      description:
        "We reimagined J&H Tackle’s online store by enhancing UX/UI design and optimizing conversion funnels.",
      extra: "Improved visual hierarchy, streamlined navigation and customer-centric design make shopping for fishing gear effortless.",
    },
    B2B: {
        image: "/images/t2.png",
      title: "Optimizing B2B Sales: Seamless Transactions for Businesses",
      description:
        "We built a user-friendly B2B platform to streamline bulk purchasing and enhance business relationships.",
      extra: "Advanced analytics and automation tools improve sales efficiency and customer retention.",
    },
    B2C: {
        image: "/images/t3.png",
      title: "Enhancing B2C Experiences: Personalized Shopping Journeys",
      description:
        "Our B2C solution focuses on creating a smooth, personalized shopping experience with AI-driven recommendations.",
      extra: "Easy navigation, loyalty programs, and fast checkout processes drive customer engagement.",
    },
    ECOMMERCE: {
        image: "/images/t4.png",
      title: "Transforming eCommerce: Scalable and Secure Online Stores",
      description:
        "We create scalable eCommerce platforms with robust security, optimized for high traffic and conversions.",
      extra: "From seamless payment integrations to mobile-first design, we ensure success in online retail.",
    },
  };

  return (

    <div className=" container mx-auto px-4 md:px-20  items-center pb-24 bg-blue-900">
    <div className="bg-blue-900 text-white p-6 md:p-12">
      <div className="flex justify-center">
        <div className="flex space-x-4 bg-white p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-md font-bold ${
                activeTab === tab ? "bg-blue-900 text-white" : "text-blue-900"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={tabContent[activeTab].image}
            alt="Mockup"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h2 className="text-xl font-bold text-cyan-300">
            {tabContent[activeTab].title}
          </h2>
          <p className="mt-2 text-sm">{tabContent[activeTab].description}</p>
          <p className="mt-2 text-sm">{tabContent[activeTab].extra}</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-cyan-400 underline">
              LAUNCH WEBSITE &gt;
            </a>
            <a href="#" className="text-cyan-400 underline">
              REQUEST A QUOTE &gt;
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}