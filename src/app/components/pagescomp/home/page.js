import { FaArrowRightLong } from "react-icons/fa6";
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
                    <div className="col-xxl-4 col-lg-6 col-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-1.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Top wear <br/> women</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-2.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Top wear <br/> men</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-6">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-3.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Winter <br/> wear</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-6 d-block d-md-none">
                        <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                            <div className="tp-banner-thumb-2 include-bg transition-3" style={{background:'url(/assets/img/banner/2/banner-3.jpg) center'}}></div>
                            <h3 className="tp-banner-title-2">
                            <a href="#">Summer wear <br/> wear</a>
                            </h3>
                            <div className="tp-banner-btn-2">
                            <a href="#" className="tp-btn tp-btn-border tp-btn-border-sm">
                                <span className="me-1">Shop Now </span>
                                <FaArrowRightLong/>
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