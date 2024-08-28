"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";
import BannerItem from './BannerItem'
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
            <div className="tp-slider-active tp-slider-variation swiper-container">
                <Swiper 
                  className="mySwiper"
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                  loop
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  modules={[Navigation, Pagination, Autoplay]}
              >
                  <SwiperSlide>
                      <Link href="/product-details">
                        <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/SolitaireBlog/Desktop.webp"/>
                      </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Link  href="/product-details">
                          <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/WorkWear/Desktop1920x694.webp"/>
                      </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Link  href="/product-details">
                          <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/05_May/Banner/Extra/01/Desktop_1920x694.jpg"/> 
                      </Link>
                  </SwiperSlide>
                </Swiper>
            </div>
               <div className="tp-slider-arrow tp-swiper-arrow d-none d-lg-block">
                  <button type="button" className="tp-slider-button-prev" ref={prevRef}>
                     <FaAngleLeft/>                       
                  </button>
                  <button type="button" className="tp-slider-button-next" ref={nextRef}>
                     <FaAngleRight/>                     
                  </button>
               </div>  
               <div className="tp-slider-dot tp-swiper-dot"></div>
         </section>


        {/* <section className="tp-slider-area p-relative z-index-1">
            <div className="tp-slider-active-2 swiper-container">
                <div className="swiper-wrapper">
                    <BannerItem/>
                </div>
                <div className="tp-swiper-dot tp-slider-2-dot"></div>
            </div>
        </section> */}

    </>
  )
}

export default Banner
