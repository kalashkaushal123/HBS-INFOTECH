import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    rating: 5.0,
    text: "The quality and dedication of the staff Software Mind provides are impressive.",
    author: "Head of Engineering, Sports Technology Company",
  },
  {
    rating: 5.0,
    text: "Software Mind is the company to go with if you care about quality and speed.",
    author: "Head of Portal & UI, Asset Protection Company",
  },
  {
    rating: 5.0,
    text: "We really appreciated their transparency as well. If we encountered challenges, they...",
    author: "Sr Director of App Dev, Elevate",
  },
  {
    rating: 5.0,
    text: "They represented a rare combination of skill, positive attitude, and flexibility.",
    author: "Head of Operations, Nano",
  },
  {
    rating: 5.0,
    text: "We really appreciated their transparency as well. If we encountered challenges, they...",
    author: "Sr Director of App Dev, Elevate",
  },
  {
    rating: 5.0,
    text: "They represented a rare combination of skill, positive attitude, and flexibility.",
    author: "Head of Operations, Nano",
  },
];

const ReviewSlider = () => {
  return (
    <div className="">
      <div  className="flex justify-between items-center " style={{backgroundColor:"rgb(241, 236, 236)"}}>

        <h5 className=" font-semibold ms-3">Software Mind Reviews
        <span className="text-orange-500 font-bold" style={{color:"orangered"}}> 4.9 ★★★★★ 50 Reviews</span> 
        </h5>
        
        


        <Swiper modules={[Navigation, Pagination, Autoplay]}
            // spaceBetween={20}            
            breakpoints={{
            320: { slidesPerView: 1,},
            480: { slidesPerView: 1,},
            768: { slidesPerView: 2,},
            1024: { slidesPerView:3,},
          }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} className="m-4" >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="rounded-3 shadow-lg p-4 m-2 bg-white" style={{height:"300px"}}>
            <p className="text-lg font-bold fs-4" style={{color:"orangered"}}>{review.rating} ★★★★★</p>
            <p className="text-gray-700">{review.text}</p>
            <hr  className="p-0 m-0"/>
            <p className="p-3"><sub>{review.author}</sub></p>
            <hr  className="p-0 m-0"/>
            <p className="p-3 m-auto"><span className="rounded-circle  btn-success">✔</span> Verified Review</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
     
    </div>
  );
};

export default ReviewSlider;
