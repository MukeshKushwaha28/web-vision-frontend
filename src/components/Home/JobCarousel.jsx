"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import JobCard from "./JobCard";
import { useRef } from "react";
import Button from "../button/Button";

const JobCarousel = ({ jobs, title, color }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (

    <div className="bg-gradient-to-r from-purple-500 to-pink-500">
    <div className="container mx-auto items-center pt-24 pb-16 px-4 md:px-10">
      <div className="relative flex justify-center py-4">
        <div className="w-[83%] lg:w-[95%] relative">
          {/* Title and Buttons */}
          <Button text={"Latest Update"} />
          <div className="  flex-col flex md:flex-row gap-10  md:gap-20 pt-5">
            <h2 className=" w-full md:w-[40%] font-bold text-3xl text-white  pb-10">
              Explore{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                Creative
              </span>{" "}
              Technology <br /> Blogs
            </h2>
            <div className=" hidden md:block h-[70px] border border-black"></div>
            <p className=" text-white w-full  md:w-[40%] ">
            Discover insights, trends, and tips in digital marketing, SEO, PPC, and branding. Our blogs empower businesses with innovative strategies, expert advice, and the latest industry updates to stay ahead in the ever-evolving digital landscape.
            </p>
          </div>

          <div className="flex flex-row-reverse mb-4">
            <div className="flex space-x-2">
              <button
                className="cursor-pointer bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <FaChevronLeft size={18} />
              </button>
              <button
                className="cursor-pointer bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {jobs?.map((job, index) => (
              <div key={index} className="px-2">
                <JobCard {...job} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobCarousel;
