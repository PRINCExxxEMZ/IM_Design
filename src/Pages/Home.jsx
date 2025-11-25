import React from "react";
import { motion } from "framer-motion";
import img from "../assets/HEro__mina.png";
import Navbar from "../Components/Navbar";
import WhatWeBuild from "../Components/WhatWe";
import WhyWeMatter from "../Components/WhyWeMatter";
import ReadyToConnect from "../Components/Ready";

function HomePage() {
  return (
    <>
   <Navbar/>

    <div className="min-h-screen w-full">
      {/* ================= HERO ================= */}
      <section >
        
        {/* LEFT CONTENT */}
        <motion.div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 md:gap-20 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Creating technology <br />
            that protects and <br />
            empowers
          </h1>
        <div>
          <p className="text-gray-700 mt-5 max-w-md">
            We build solutions that safeguard children online and create 
            opportunities for developers to earn sustainably. Our products 
            bridge safety, trust, and growth.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition">
              Explore Safe SIM
            </button>
            <button className="text-black px-6 py-3 hover:opacity-90 transition">
              Discover Ad Engine
            </button>
          </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          src={img}
          alt="Team working"
          className="w-full md:w-[1250px] mx-auto shadow-lg"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">Innovation</p>

          <h2 className="text-3xl font-bold text-black mt-2">Who we are</h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We’re a tech creation company driven by innovation and social responsibility.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="border px-6 py-2 rounded-md hover:bg-gray-100 transition">
              Learn
            </button>
            <button className="border px-6 py-2 rounded-md hover:bg-gray-100 transition">
              Explore
            </button>
          </div>
        </div>
      </section>
    </div>

    <WhatWeBuild/>

    <WhyWeMatter/>

    <ReadyToConnect/>

     </>
  );
}

export default HomePage;
