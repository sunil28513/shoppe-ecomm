import React from 'react'
import Link from 'next/link';
import { BsCartDash, BsEye, BsHeart   } from "react-icons/bs";
import { MdOutlineStar, MdOutlineStarHalf  } from "react-icons/md";

const ProductContCard = ({product }) => {
  return (
    <>
        <div className="col-xl-4 col-md-6 col-sm-6 col-6 infinite-item">
            <div className="tp-product-item-2 mb-40">
                <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                    <Link href="#">
                        <img src={product.thumb} alt={product.title} />
                    </Link>
                    <div className="tp-product-action-2 tp-product-action-blackStyle">
                        <div className="tp-product-action-item-2 d-flex flex-column">
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                                <BsCartDash/>
                                <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                            </button>
                            <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                <BsEye />
                                <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                            </button>
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                                <BsHeart />
                                <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tp-product-content-2 pt-15">
                    <div className="tp-product-tag-2">
                        <Link href="#">
                           {product.store}
                        </Link>
                    </div>
                    <h3 className="tp-product-title-2">
                        <Link href="#">
                            {product.title}
                        </Link>
                    </h3>
                    <div className="tp-product-rating-icon tp-product-rating-icon-2">
                        <span> <MdOutlineStar/>  </span>
                        <span> <MdOutlineStar/>   </span>
                        <span> <MdOutlineStar/> </span>
                        <span> <MdOutlineStar/>  </span>
                        <span> <MdOutlineStarHalf /> </span>
                    </div>
                    <div className="tp-product-price-wrapper-2">
                        <span className="tp-product-price-2 new-price">${product.newPrice}</span>
                        <span className="tp-product-price-2 old-price">${product.oldPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductContCard
