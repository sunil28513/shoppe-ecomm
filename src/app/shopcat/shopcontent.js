"use-client"
import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductContCard from './productcontcard';
import { MdOutlineStar } from 'react-icons/md';

const ShopContent = () => {
    const products = [
        {
          id: '1',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-1.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '2',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-2.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '3',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-3.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '4',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-4.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '5',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-5.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '6',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-6.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '7',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-7.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '8',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-8.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        
      ];

  return (
    <>
        <section className="tp-shop-area pt-20 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 d-none d-md-block">
                        <div className="tp-shop-sidebar mr-10">
                        <div className="tp-shop-widget mb-50">
                            <h3 className="tp-shop-widget-title">Product Status</h3>
                            <div className="tp-shop-widget-content">
                                <div className="tp-shop-widget-checkbox">
                                    <ul className="filter-items filter-checkbox">
                                        <li className="filter-item checkbox">
                                            <input id="on_sale" type="checkbox" />
                                            <label htmlFor="on_sale">On sale</label>
                                        </li>
                                        <li className="filter-item checkbox">
                                            <input id="in_stock" type="checkbox" />
                                            <label htmlFor="in_stock">In Stock</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="tp-shop-widget mb-50">
                            <h3 className="tp-shop-widget-title">Categories</h3>
                            <div className="tp-shop-widget-content">
                                <div className="tp-shop-widget-categories">
                                    <ul>
                                        <li><a href="#">Mens <span>100</span></a></li>
                                        <li><a href="#">Womens <span>50</span></a></li>
                                        <li><a href="#">Latest <span>22</span></a></li>
                                        <li><a href="#">Featured <span>17</span></a></li>
                                        <li><a href="#">Trending <span>22</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="tp-shop-widget mb-50">
                            <h3 className="tp-shop-widget-title">Top Rated Products</h3>
                            <div className="tp-shop-widget-content">
                                <div className="tp-shop-widget-product">
                                    <div className="tp-shop-widget-product-item d-flex align-items-center">
                                        <div className="tp-shop-widget-product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/shop/sm/shop-sm-1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="tp-shop-widget-product-content">
                                            <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                                                <div className="tp-shop-widget-product-rating">
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                </div>
                                                <div className="tp-shop-widget-product-rating-number">
                                                    <span>(4.2)</span>
                                                </div>
                                            </div>
                                            <h4 className="tp-shop-widget-product-title">
                                                <a href="product-details.html">Smart watches wood...</a>
                                            </h4>
                                            <div className="tp-shop-widget-product-price-wrapper">
                                                <span className="tp-shop-widget-product-price">$150.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-shop-widget-content">
                                <div className="tp-shop-widget-product">
                                    <div className="tp-shop-widget-product-item d-flex align-items-center">
                                        <div className="tp-shop-widget-product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/shop/sm/shop-sm-1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="tp-shop-widget-product-content">
                                            <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                                                <div className="tp-shop-widget-product-rating">
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                    <span>
                                                        <MdOutlineStar/>
                                                    </span>
                                                </div>
                                                <div className="tp-shop-widget-product-rating-number">
                                                    <span>(4.2)</span>
                                                </div>
                                            </div>
                                            <h4 className="tp-shop-widget-product-title">
                                                <a href="product-details.html">Smart watches wood...</a>
                                            </h4>
                                            <div className="tp-shop-widget-product-price-wrapper">
                                                <span className="tp-shop-widget-product-price">$150.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-shop-widget mb-50">
                            <h3 className="tp-shop-widget-title">Popular Brands</h3>
                            <div className="tp-shop-widget-content ">
                                <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_01.png" alt="" />
                                    </a>
                                    </div>
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_02.png" alt="" />
                                    </a>
                                    </div>
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_03.png" alt="" />
                                    </a>
                                    </div>
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_04.png" alt="" />
                                    </a>
                                    </div>
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_05.png" alt="" />
                                    </a>
                                    </div>
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_06.png" alt="" />
                                    </a>
                                    </div>
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_07.png" alt="" />
                                    </a>
                                    </div>
                                    <div className="tp-shop-widget-brand-item">
                                    <a href="#">
                                        <img src="assets/img/product/shop/brand/logo_08.png" alt="" />
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="tp-shop-main-wrapper"> 
                        <div className="tp-shop-top mb-45">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="tp-shop-top-left d-flex align-items-center ">
                                    <div className="tp-shop-top-result">
                                        <p>Showing 1–14 of 26 results</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
                                    <div className="tp-shop-top-select">
                                        <select className='form-control'>
                                            <option >Default Sorting</option>
                                            <option >Low to Hight</option>
                                            <option >High to Low</option>
                                            <option >New Added</option>
                                            <option >On Sale</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tp-shop-items-wrapper tp-shop-item-primary">
                            <div className="tab-content">
                                <div className="tab-pane fade show active">
                                    <div className="row infinite-container">
                                        {products.map(product => (
                                            <ProductContCard key={product.id} product={product} />
                                        ))}
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="infinite-pagination d-none">
                            <a href="shop.html" className="infinite-next-link">Next</a>
                        </div>
                        <div className="tp-shop-pagination mt-20">
                            <div className="tp-pagination">
                                <nav>
                                    <ul>
                                    <li>
                                        <a href="shop.html" className="tp-pagination-prev prev page-numbers">
                                            <FaArrowLeft />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html">1</a>
                                    </li>
                                    <li>
                                        <span className="current">2</span>
                                    </li>
                                    <li>
                                        <a href="shop.html">3</a>
                                    </li>
                                    <li>
                                        <a href="shop.html" className="next page-numbers">
                                            <FaArrowRight/>                                   
                                        </a>
                                    </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShopContent
