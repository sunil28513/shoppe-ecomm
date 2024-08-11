"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Featured = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="tp-featured-slider-area grey-bg-6 fix pt-95 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper-2 mb-50">
              <span className="tp-section-title-pre-2">Shop by Category</span>
              <h3 className="tp-section-title-2">This Week Featured</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
          <div className="tp-featured-slider">
          <Swiper 
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={3}
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
                  <div class="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div class="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-1.jpg)'}}></div>
                      <div class="tp-featured-content">
                        <h3 class="tp-featured-title">
                            <a href="product-details.html">Clothing <br/> Collection 2023</a>
                        </h3>
                        <div class="tp-featured-price-wrapper">
                            <span class="tp-featured-price new-price">$102.00</span>
                            <span class="tp-featured-price old-price">$226.00</span>
                        </div>
                        <div class="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class="tp-featured-btn">
                            <a href="product-details.html" class="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 7.49988L1 7.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9.9502 1.47554L16.0002 7.49954L9.9502 13.5245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </a>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div class="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div class="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-2.jpg)'}}></div>
                      <div class="tp-featured-content">
                        <h3 class="tp-featured-title">
                            <a href="product-details.html">Non Slip Athletic <br/> Tennis Walking</a>
                        </h3>
                        <div class="tp-featured-price-wrapper">
                            <span class="tp-featured-price new-price">$220.00</span>
                            <span class="tp-featured-price old-price">$350.00</span>
                        </div>
                        <div class="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class="tp-featured-btn">
                            <a href="product-details.html" class="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 7.49988L1 7.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9.9502 1.47554L16.0002 7.49954L9.9502 13.5245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </a>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div class="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div class="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-3.jpg)'}}></div>
                      <div class="tp-featured-content">
                        <h3 class="tp-featured-title">
                            <a href="product-details.html">Vera Bradley <br/> Straw Tote Bag</a>
                        </h3>
                        <div class="tp-featured-price-wrapper">
                            <span class="tp-featured-price new-price">$46.00</span>
                            <span class="tp-featured-price old-price">$96.00</span>
                        </div>
                        <div class="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class="tp-featured-btn">
                            <a href="product-details.html" class="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 7.49988L1 7.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9.9502 1.47554L16.0002 7.49954L9.9502 13.5245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </a>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div class="tp-featured-item swiper-slide white-bg p-relative z-index-1">
                      <div class="tp-featured-thumb include-bg" style={{background:'url(assets/img/product/slider/product-slider-4.jpg)'}}></div>
                      <div class="tp-featured-content">
                        <h3 class="tp-featured-title">
                            <a href="product-details.html">Gucci Women’s <br/> Black Leather Bag</a>
                        </h3>
                        <div class="tp-featured-price-wrapper">
                            <span class="tp-featured-price new-price">$102.00</span>
                            <span class="tp-featured-price old-price">$226.00</span>
                        </div>
                        <div class="tp-product-rating-icon tp-product-rating-icon-2">
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class="tp-featured-btn">
                            <a href="product-details.html" class="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 7.49988L1 7.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9.9502 1.47554L16.0002 7.49954L9.9502 13.5245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </a>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
            </Swiper>


            <div className="tp-featured-slider-arrow mt-45">
              <button className="tp-featured-slider-button-prev" ref={prevRef}>
                <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.97974 7.97534L31.9797 7.97534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.02954 0.999999L0.999912 7.99942L8.02954 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="tp-featured-slider-button-next" ref={nextRef}>
                <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.9795 7.97534L0.979492 7.97534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24.9297 0.999999L31.9593 7.99942L24.9297 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
