import React from 'react'
import { BsGrid } from "react-icons/bs";

import Header from '../common/header/page'
import ShopContent from './shopcontent'
import Footer from '../common/footer/Footer';

export default function Page() {
  return (
    <>
    <Header/>
        <section className="breadcrumb__area include-bg pt-100 pb-30">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="breadcrumb__content p-relative z-index-1">
                        <h3 className="breadcrumb__title">Shop Grid</h3>
                        <div className="breadcrumb__list">
                           <span><a href="#">Home</a></span>
                           <span>Shop Grid</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <ShopContent />
      <Footer/>
    </>
  )
}

