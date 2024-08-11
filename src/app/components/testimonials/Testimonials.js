"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { MdOutlineStar, MdOutlineStarHalf  } from "react-icons/md";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <>


<section class="tp-testimonial-area grey-bg-7 pt-100 pb-60">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-12">
                     <div class="tp-testimonial-slider p-relative z-index-1">
                        <div class="tp-testimonial-shape">
                           <span class="tp-testimonial-shape-gradient"></span>
                        </div>
                        <h3 class="tp-testimonial-section-title text-center">The Review Are In</h3>
                        <div class="row justify-content-center">
                           <div class="col-xl-8 col-lg-8 col-md-10">
                              <div class="tp-testimonial-slider-active swiper-container">
                                 <div class="swiper-wrapper">
                                    <Swiper 
                                            className="mySwiper"
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            autoplay={{ delay: 3000 }}
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
                                                <div class="tp-testimonial-item text-center mb-20 swiper-slide">
                                                    <div class="tp-testimonial-rating">
                                                        <span><MdOutlineStar/></span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStarHalf /> </span>
                                                    </div>
                                                    <div class="tp-testimonial-content">
                                                        <p>“ How you use the city or town name is up to you. All results may be freely used in any work.”</p>
                                                    </div>
                                                    <div class="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                                        <div class="tp-testimonial-user d-flex align-items-center">
                                                            <div class="tp-testimonial-avater mr-10">
                                                                <img src="assets/img/users/user-2.jpg" alt="" />
                                                            </div>
                                                            <div class="tp-testimonial-user-info tp-testimonial-user-translate">
                                                                <h3 class="tp-testimonial-user-title">Theodore Handle</h3>
                                                                <span class="tp-testimonial-designation">CO Founder</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="tp-testimonial-item text-center mb-20 swiper-slide">
                                                    <div class="tp-testimonial-rating">
                                                        <span><MdOutlineStar/></span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStarHalf /> </span>
                                                    </div>
                                                    <div class="tp-testimonial-content">
                                                        <p>“Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!”</p>
                                                    </div>
                                                    <div class="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                                        <div class="tp-testimonial-user d-flex align-items-center">
                                                            <div class="tp-testimonial-avater mr-10">
                                                                <img src="assets/img/users/user-3.jpg" alt="" />
                                                            </div>
                                                            <div class="tp-testimonial-user-info tp-testimonial-user-translate">
                                                                <h3 class="tp-testimonial-user-title">Shahnewaz Sakil</h3>
                                                                <span class="tp-testimonial-designation">UI/UX Designer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="tp-testimonial-item text-center mb-20 swiper-slide">
                                                    <div class="tp-testimonial-rating">
                                                        <span><MdOutlineStar/></span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStar/>  </span>
                                                        <span><MdOutlineStarHalf /> </span>
                                                    </div>
                                                    <div class="tp-testimonial-content">
                                                        <p>“Thanks for all your efforts and teamwork over the last several months!  Thank you so much”</p>
                                                    </div>
                                                    <div class="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                                                        <div class="tp-testimonial-user d-flex align-items-center">
                                                            <div class="tp-testimonial-avater mr-10">
                                                                <img src="assets/img/users/user-4.jpg" alt="" />
                                                            </div>
                                                            <div class="tp-testimonial-user-info tp-testimonial-user-translate">
                                                                <h3 class="tp-testimonial-user-title">James Dopli</h3>
                                                                <span class="tp-testimonial-designation">Developer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tp-testimonial-arrow d-none d-md-block">
                           <button class="tp-testimonial-slider-button-prev">
                              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.061 6.99959L16 6.99959" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M7.08618 1L1.06079 6.9995L7.08618 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                           </button>
                           <button class="tp-testimonial-slider-button-next">
                              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.939 6.99959L1 6.99959" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M9.91382 1L15.9392 6.9995L9.91382 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                           </button>
                        </div>
                        <div class="tp-testimonial-slider-dot tp-swiper-dot text-center mt-30 tp-swiper-dot-style-darkRed d-md-none"></div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </>
  )
}

export default Testimonials
