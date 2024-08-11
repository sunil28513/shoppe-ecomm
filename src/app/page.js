"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/css/spacing.css'
import '../../public/assets/css/main.css'
import Header from "./components/common/header/page";
import HomePage from "./components/pagescomp/home/page";
import Footer from "./components/common/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <HomePage/>
      <Footer/>
    </main>
  );
}
