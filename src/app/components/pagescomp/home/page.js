import Banner from "./Banner";
import Popular from "./Popular";
import ProductList from "./productlist/ProductList";
import Featured from './featured/featured'
import Trending from "./trendingarrivals/trending";
import Testimonials from "../../testimonials/Testimonials";

export default function HomePage() {
    return (
        <>
            <Banner/>

            <section className="tp-banner-area mt-20">
                <div className="container-fluid tp-gx-40">
                <div className="row tp-gx-20">
                    <div className="col-xxl-4 col-lg-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-1.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">T-Shirt Tunic <br/> Tops Blouse</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7.49988L1 7.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.9502 1.47554L16.0002 7.49954L9.9502 13.5245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-2.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Satchel Tote <br/> Crossbody Bags</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7.49988L1 7.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.9502 1.47554L16.0002 7.49954L9.9502 13.5245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-3.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Men Tennis <br/> Walking Shoes</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">Shop Now 
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7.49988L1 7.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.9502 1.47554L16.0002 7.49954L9.9502 13.5245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* <Popular/> */}

            <ProductList/>
            <Featured/>

            <Trending/>

<Testimonials/>

        </>
    )
}