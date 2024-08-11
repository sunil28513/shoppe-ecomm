import React from 'react'
import {CartIcon, EyeIcon, WishListIcon} from '../../SvgIcons'
import { MdOutlineStar, MdOutlineStarHalf  } from "react-icons/md";

const ProductCard = ({product}) => {
  return (
    <>
        <div className="tp-product-item-2 mb-40">
            <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                <a href={`/product-details/${product.id}`}>
                <img src={product.thumb} alt={product.title} />
                </a>
                <div className="tp-product-action-2 tp-product-action-blackStyle">
                <div className="tp-product-action-item-2 d-flex flex-column">
                    <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                    <CartIcon />
                    <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                    </button>
                    <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                    <EyeIcon />
                    <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                    </button>
                    <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                    <WishListIcon />
                    <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                    </button>
                </div>
                </div>
            </div>
            <div className="tp-product-content-2 pt-15">
                <div className="tp-product-tag-2">
                <a href="#">{product.store}</a>
                </div>
                <h3 className="tp-product-title-2">
                <a href={`/product-details/${product.id}`}>{product.title}</a>
                </h3>
                <div className="tp-product-rating-icon tp-product-rating-icon-2">
                    <span>
                        <MdOutlineStar/> 
                        <MdOutlineStar/> 
                        <MdOutlineStar/> 
                        <MdOutlineStar/> 
                        <MdOutlineStarHalf />
                    </span>
                </div>
                <div className="tp-product-price-wrapper-2">
                <span className="tp-product-price-2 new-price">${product.newPrice}</span>
                <span className="tp-product-price-2 old-price">${product.oldPrice}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard
