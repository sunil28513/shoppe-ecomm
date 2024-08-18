"use client";

import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductContCard from './productcontcard';
import { MdOutlineStar } from 'react-icons/md';

const ShopContent = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);


        // Calculate category counts
        const categoryCounts = data.reduce((acc, product) => {
            acc[product.category] = (acc[product.category] || 0) + 1;
            return acc;
        }, {});

        // Create an array of categories with their counts
        const categoryArray = Object.keys(categoryCounts).map(category => ({
            name: category,
            count: categoryCounts[category]
        }));

         // Set categories
         setCategories(categoryArray);


      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };
    fetchProducts();
  }, []);

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
                                        {categories.map((category) => (
                                            <li key={category.name} className="infinite-item mb-25">
                                                <label className='d-flex align-items-center gap-1 '>
                                                    <input type="checkbox" value={category.name} />
                                                     <span className='d-flex justify-content-between w-100'>{category.name} <span>{category.count}</span></span>
                                                </label>
                                            </li>
                                        ))}
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
                                            <a href="#">
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
                                                <a href="#">Smart watches wood...</a>
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
                                            <a href="#">
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
                                                <a href="#">Smart watches wood...</a>
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
                                            <div key={product.id} className="col-xl-4 col-md-6 col-sm-6 col-6 infinite-item mb-25">
                                                <div  className="product-list">
                                                    <ProductContCard product={product} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="infinite-pagination d-none">
                            <a href="#" className="infinite-next-link">Next</a>
                        </div>
                        <div className="tp-shop-pagination mt-20">
                            <div className="tp-pagination">
                                <nav>
                                    <ul>
                                    <li>
                                        <a href="#" className="tp-pagination-prev prev page-numbers">
                                            <FaArrowLeft />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <span className="current">2</span>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="next page-numbers">
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
