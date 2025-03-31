'use client';
import Slider from 'react-slick';
import { ArrowBigDown, Star } from 'lucide-react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    rating: 5,
    content: "  similique omnis voluptate quisquam?  iusto aperiam nisi provident eaque architecto voluptatem nam ipsam quisquam, laboriosam adipisci officiis!",
    image: "/images/te1.png",
    name: "John Doe",
    position: "CEO, TechCorp"
  },
  {
    id: 2,
    rating: 4,
    content: "  similique omnis voluptate quisquam?  iusto aperiam nisi provident eaque architecto voluptatem nam ipsam quisquam, laboriosam adipisci officiis!",
    image: "/images/te2.png",
    name: "Jane Smith",
    position: "Marketing Manager"
  },
  {
    id: 3,
    rating: 5,
    content: "  similique omnis voluptate quisquam?  iusto aperiam nisi provident eaque architecto voluptatem nam ipsam quisquam, laboriosam adipisci officiis!",
    image: "/images/te3.png",
    name: "Robert Brown",
    position: "Founder, StartupX"
  },
  {
    id: 4,
    rating: 5,
    content: "  similique omnis voluptate quisquam?  iusto aperiam nisi provident eaque architecto voluptatem nam ipsam quisquam, laboriosam adipisci officiis!",
    image: "/images/te2.png",
    name: "Robert Brown",
    position: "Founder, StartupX"
  },
  {
    id: 5,
    rating: 5,
    content: "  similique omnis voluptate quisquam?  iusto aperiam nisi provident eaque architecto voluptatem nam ipsam quisquam, laboriosam adipisci officiis!",
    image: "/images/te2.png",
    name: "Robert Brown",
    position: "Founder, StartupX"
  },
  {
    id: 6,
    rating: 5,
    content: "  similique omnis voluptate quisquam?  iusto aperiam nisi provident eaque architecto voluptatem nam ipsam quisquam, laboriosam adipisci officiis!",
    image: "/images/te2.png",
    name: "Robert Brown",
    position: "Founder, StartupX"
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto items-center ">
    <div className=" py-12 px-6  bg-gradient-to-r from-blue-500 to-purple-700">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <Slider {...settings} className="px-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white card-size shadow-lg rounded-lg p-6 text-center mx-2  bg-gradient-to-r from-blue-300 to-purple-900">
            <div className="flex justify-center mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-white italic">"{testimonial.content}"</p>
            <div className="mt-4 flex ">

              <div className='w-[30%]'>
                  <img src={testimonial.image} alt={testimonial.name}  className="w-[100px] h-[100px] rounded-full bg-cover" />
              </div>
              
              <div>
              <p className="text-white font-bold mt-2">{testimonial.name}</p>
              <p className="text-white text-sm ">{testimonial.position}</p>
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}
