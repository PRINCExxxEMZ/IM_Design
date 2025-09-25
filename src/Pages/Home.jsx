import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_Dark 1.svg";
import img from "../assets/image_fx (8).jpg";
import img2 from "../assets/pay-per-click-login-website-payment-graphic-concept.svg";
import img3 from "../assets/image_fx (9).svg";
import img4 from "../assets/App.svg";
import bgImage from "../assets/Overlay.svg";
import img5 from "../assets/Ads.svg";
import SDK from "../assets/Sdk.svg";
import Live from "../assets/Live.svg";
import Nsf from "../assets/NFSC.svg";
import Earn from "../assets/Earn.svg";
import { ArrowRight } from "lucide-react";
import Main from "../assets/advertising-advetise-consumer-advertisement-icon.jpg";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";


function HomePage() {
  return (
    <> 
    <Navbar/>

    <section id="home" className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.02] text-gray-900">
          Monetize your App
        </h1>
        {/* <div className=" relative w-[20px] h-[20px] bg-[#f6a11a] rounded-full"></div> */}
      </div>
        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-700">
          Reward Your Users
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          We place targeted ads in mobile apps and pay users per ad view a simple and fair way to reward engagement.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#get-started"
            className="inline-flex items-center text-sm gap-2 bg-black text-white px-8 py-3 rounded-[3px] font-medium shadow hover:scale-[0.99] transition"
          >
            Get Started
          </a>

          <a
            href="#advertise"
            className="inline-flex items-center text-sm gap-2 border border-gray-300 px-6 py-3 rounded-[3px] text-gray-700 hover:bg-gray-50 transition"
          >
            Advertise with us
          </a>
        </div>
        
        <img src={Main} alt="Main" className="mt-12 mx-auto w-full max-w-4xl rounded-[3px] shadow-lg" />
      </div>
    </section>


    <section className=" text-center max-w-7xl mx-auto px-6 md:px-8 py-20">
          <h1 className=" font-light text-[30px]">What We Offer</h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 text-left">
                <h2 className=" font-bold">Publish First</h2>
                <p>Real-time Dashboard payouts</p>
               <img src={img} alt="Main" className="mt-5 rounded-[3px]"/>
            </div>
            <div className="p-6 text-left">
                <h2 className=" font-bold">Brand Safety</h2>
                <p>Pre-verified advertiser pool</p>
               <img src={img2} alt="Main" className="mt-5 rounded-[3px]"/>
            </div>
            <div className="p-6 text-left">
                <h2 className=" font-bold">Transparent</h2>
                <p>No hidden fees, full analytics</p>
               <img src={img3} alt="Main" className="mt-5 rounded-[3px]"/>
            </div>
          </div>
      </section>


    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-[20px]">
        <h3 className="text-[30px] font-light text-gray-500">How it works</h3>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* step 1 */}
          <div className="flex-1 flex flex-col items-center text-center gap-4">
           
            <img src={SDK} alt="Main" className=" rounded-[3px]"/>
            <h4 className="font-semibold">Integrate SDK</h4>
            <p className="text-sm text-gray-500">Add our SDK to your app in minutes.</p>
          </div>

          {/* connector */}
          <div className="hidden md:flex items-center">
            <div className="h-0.5 w-20 bg-gray-200 mx-6" />
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">→</div>
            <div className="h-0.5 w-20 bg-gray-200 mx-6" />
          </div>

          {/* step 2 */}
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <img src={Live} alt=""/>
            <h4 className="font-semibold">Ads go live</h4>
            <p className="text-sm text-gray-500">Select placements and campaign settings.</p>
          </div>

          {/* connector */}
          <div className="hidden md:flex items-center">
            <div className="h-0.5 w-20 bg-gray-200 mx-6" />
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">→</div>
            <div className="h-0.5 w-20 bg-gray-200 mx-6" />
          </div>

          {/* step 3 */}
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <img src={Earn} alt=""/>
            <h4 className="font-semibold">Track Earnings</h4>
            <p className="text-sm text-gray-500">Monitor revenue and payout reports.</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-4 py-2 rounded border text-sm text-gray-700 hover:bg-gray-50">Learn More</button>
        </div>
      </div>
    </section>

      <section className="text-center max-w-7xl mx-auto px-6 md:px-8 py-20">
          <h3 className="text-[30px] font-light text-gray-500">Publisher & Advertiser</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl px-6 py-2">
            <div className="text-left">
               <img src={img4} alt="Main" className="mt-12 rounded-[3px]"/>
               <h2>Have an App?</h2>
               <Link className=" items-center flex gap-2">Publisher Sign up <ArrowRight /></Link>
            </div>
            <div className="text-left">
               <img src={img5} alt="Main" className="mt-12 rounded-[3px]"/>
               <h2>Have an App?</h2>
               <Link className="flex gap-2 items-center ">Publisher Sign up <ArrowRight /></Link>
            </div>
          </div>
      </section>

      <section className="text-center md:text-left  mx-auto px-6 md:px-[120px] py-20 bg-black">
        <div className="md:flex md:justify-between md:items-center">
        <div>
          <div className="gap-y-5">
          <p className=" font-semi-bold text-[#f6a11a] text-sm">Partnership Event</p>
          <h2 className="mt-4 font-medium text-[40px] text-white">Blaccole x The Musketeers</h2>
          <p className="pb-10 px-4 md:w-[600px] md:px-0 text-white">
            NSFC stands for Not Safe For Children, and it is more  than a product. It is a new safety standard for the internet itself.
          </p>
          </div>
             <a
            href="https://blaccole.com/nsfc/"
            className="inline-flex items-center px-8 py-2 rounded-[3px] bg-white text-black font-medium shadow hover:opacity-95 transition"
          >
            Explore
          </a>
        </div>
              <img src={Nsf} alt=""/>
        </div>
      </section>


<header
      className="relative h-[60vh] min-h-[420px] flex items-center bg-black"
      aria-label="Hero section"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-800 mb-2">Partner</p>

        <h1 className="text-3xl md:text-7xl font-bold text-white">
          Blaccole
        </h1>

        <p className="mt-4 text-lg md:text-3xl text-amber-600 font-semibold">
          Innovation, Impact and a vision for <span className="block">Africa’s Future</span>
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.blaccole.com/"
            className="inline-flex items-center px-8 py-2 rounded-[3px] bg-black text-white font-medium shadow hover:opacity-95 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </header>
  

      <Testimonial />
      {/* <Newsletter/> */}
      <Footer/>
     </>
  );
}

export default HomePage;