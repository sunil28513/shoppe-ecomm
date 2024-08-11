import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import "swiper/css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../spacing.css'
import '../../../main.css'
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header>
               <div className="tp-header-area tp-header-style-darkRed tp-header-height">
                  <div id="header-sticky" className="tp-header-bottom-2 tp-header-sticky">
                     <div className="container">
                        <div className="tp-mega-menu-wrapper p-relative">
                           <div className="row align-items-center">
                              <div className="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
                                 <div className="logo">
                                    <Link className='d-flex align-items-center gap-2' href="/">
                                       <Image 
                                             src="/assets/img/logo/logo.png" 
                                             alt="logo"
                                             width={45}
                                             height={45}
                                       /> 
                                       <span><strong>Aljeco</strong> </span>
                                    </Link>
                                 </div>
                              </div>
                              <div className="col-xl-5 d-none d-xl-block">
                                 <div className="main-menu menu-style-2">
                                    <nav className="tp-main-menu-content">
                                       <ul>
                                          <li><Link href="/shopcat">Mens</Link></li>
                                          <li><Link href="/shopcat">Womens</Link></li>
                                       </ul>
                                    </nav>
                                 </div>
                              </div>
                              <div className="col-xl-5 col-lg-7 col-md-7 col-sm-8 col-6">
                                 <div className="tp-header-bottom-right d-flex align-items-center justify-content-end gap-4 pl-20 pe-2">
                                    <div className="tp-header-search-2">
                                       <form action="#">
                                          <input type="text" placeholder="Search Products..." />
                                          <button className='d-none d-sm-block' type="submit">
                                             <FiSearch/>                                     
                                          </button>
                                       </form>
                                    </div>
                                    <div className="tp-header-action d-flex align-items-center ml-20">
                                       <div className="tp-header-action-item d-none d-lg-block">
                                          <a href="#" className="tp-header-action-btn">
                                          <FaRegHeart/>
                                             <span className="tp-header-action-badge">4</span>                          
                                          </a>
                                       </div>
                                       <div className="tp-header-action-item">
                                             <button className="tp-header-action-btn cartmini-open-btn" >
                                             <BsHandbag/>   
                                             <span className="tp-header-action-badge">13</span>                                                                          
                                          </button>
                                       </div>
                                       <div className="d-none d-sm-block tp-header-action-item tp-header-hamburger mr-20 d-xl-none">
                                          <button type="button" className="tp-offcanvas-open-btn">
                                             <RiMenu3Line/>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
        </>
    )
}