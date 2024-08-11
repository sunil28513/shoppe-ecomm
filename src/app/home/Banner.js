import React from 'react'
import BannerItem from './BannerItem'

const Banner = () => {
  return (
    <>
        <section className="tp-slider-area p-relative z-index-1">
            <div className="tp-slider-active-2 swiper-container">
                <div className="swiper-wrapper">
                    <BannerItem/>
                </div>
                <div className="tp-swiper-dot tp-slider-2-dot"></div>
            </div>
        </section>

    </>
  )
}

export default Banner
