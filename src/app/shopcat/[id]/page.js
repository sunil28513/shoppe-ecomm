// "use client"
import React from 'react';
import Header from '../../common/header/page'
import Link from 'next/link';
import { BsFacebook, BsHeart, BsLinkedin, BsPlus, BsTwitter } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import RelatedProducts from './RelatedProducts';
import Footer from '../../common/footer/Footer';

const ProductDetails = async ({ params }) => {
  const { id } = params;

  // Fetch the product data
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  const product = await res.json();

  return (
    <>
    
    <Header/>
    <section className="breadcrumb__area include-bg pt-100 pb-30 bg-light">
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">Jewellery  433 Designs</h3>
                     <div className="breadcrumb__list">
                        <span><Link href="/">Home</Link></span>
                        <span>Jewellery</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     <section className='pt-4 pb-60'>
        <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-md-7">
                  <div className="row row-gap-3">
                     <div className="col-md-6">
                        {/* <img className='img-fluid' src={product.image} alt={product.title} /> */}
                        <img className='img-fluid border' src="/assets/img/product/details/1.JPG" alt={product.title} />
                     </div>
                     <div className="col-md-6">
                        <img className='img-fluid border' src={`/assets/img/product/details/2.JPG`} alt={product.title} />
                     </div>
                     <div className="col-md-6">
                        <img className='img-fluid border' src={`/assets/img/product/details/3.JPG`} alt={product.title} />
                     </div>
                     <div className="col-md-6">
                        <img className='img-fluid border' src={`/assets/img/product/details/4.JPG`} alt={product.title} />
                     </div>
                     <div className="col-md-6">
                        <img className='img-fluid border' src={`/assets/img/product/details/1.JPG`} alt={product.title} />
                     </div>
                     <div className="col-md-6">
                        <img className='img-fluid border' src={`/assets/img/product/details/3.JPG`} alt={product.title} />
                     </div>
                     <div className="col-md-6">
                        <img className='img-fluid border' src={`/assets/img/product/details/1.JPG`} alt={product.title} />
                     </div>
                     <div className="col-md-6">
                        <img className='img-fluid border' src={`/assets/img/product/details/3.JPG`} alt={product.title} />
                     </div>
                  </div>
              </div>
              <div className="col-md-5">
                  <div className="tp-product-details-wrapper position-sticky t-10">
                        <div className="tp-product-details-category">
                           <span>{product.category}</span>
                        </div>
                        <h3 className="tp-product-details-title">{product.title}</h3>

                        <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                           <div className="tp-product-details-stock mb-10">
                              <span>In Stock</span>
                           </div>
                           <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                              <div className="tp-product-details-rating">
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                              </div>
                              <div className="tp-product-details-reviews">
                                 <span>(36 Reviews)</span>
                              </div>
                           </div>
                        </div>
                        <p>{product.description}</p>

                        <div className="tp-product-details-price-wrapper mb-20">
                           <span className="tp-product-details-price old-price">$320.00</span>
                           <span className="tp-product-details-price new-price">$236.00</span>
                        </div>

                        <div className="tp-product-details-action-wrapper">
                           <h3 className="tp-product-details-action-title">Quantity</h3>
                           <div className="tp-product-details-action-item-wrapper d-flex align-items-center">
                              <div className="tp-product-details-quantity">
                                 <div className="tp-product-quantity mb-15 mr-15">
                                    <span className="tp-cart-minus">
                                       <FaMinus/>                                                           
                                    </span>
                                    <input className="tp-cart-input" type="text" value="1" />
                                    <span className="tp-cart-plus">
                                       <FaPlus/>
                                    </span>
                                 </div>
                              </div>
                              <div className="tp-product-details-add-to-cart mb-15 w-100">
                                 <button className="tp-product-details-add-to-cart-btn w-100">Add To Cart</button>
                              </div>
                           </div>
                           <Link href="/checkout"  className="tp-product-details-buy-now-btn w-100 text-center">Buy Now</Link>
                        </div>
                        <div className="tp-product-details-action-sm">
                           <button type="button" className="tp-product-details-action-sm-btn">
                              <BsHeart/>
                              Add Wishlist
                           </button>
                        </div>
                        <div className="tp-product-details-query">
                           <div className="tp-product-details-query-item d-flex align-items-center">
                              <span>SKU:  </span>
                              <p>NTB7SDVX44</p>
                           </div>
                           <div className="tp-product-details-query-item d-flex align-items-center">
                              <span>Category:  </span>
                              <p>Computers & Tablets</p>
                           </div>
                           <div className="tp-product-details-query-item d-flex align-items-center">
                              <span>Tag: </span>
                              <p>Android</p>
                           </div>
                        </div>
                        <div className="tp-product-details-social">
                           <span>Share: </span>
                           <a href="#"><BsFacebook/> </a>
                           <a href="#"><BsTwitter/></a>
                           <a href="#"><BsLinkedin/></a>
                        </div>
                     </div>
              </div>
            </div>
        </div>
     </section>
<hr />
     <RelatedProducts/>
     <Footer/>
    </>
  );
};

export default ProductDetails;
