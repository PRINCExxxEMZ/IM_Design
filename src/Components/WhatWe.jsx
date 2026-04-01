import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/girl.svg";
import img2 from "../assets/women.svg";

export default function WhatWeBuild() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="w-full py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <motion.p
          {...fadeUp}
          className="text-sm text-gray-500 font-medium mb-2"
        >
          Products
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          What we build
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.9 }}
          className="text-gray-500 max-w-lg mx-auto mb-14"
        >
          Two solutions that matter in the digital world.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[3px] overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img src={img1} className="w-full h-56 object-cover" alt="Safe SIM" />

            <div className="p-6 text-left">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                Safety
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Safe SIM powered by NSFC
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Child-safe browsing with parental peace of mind.
              </p>

              <button className="text-sm font-medium text-blue-600">
                Explore →
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9 }}
            className="bg-white rounded-[3px] overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img src={img2} className="w-full h-56 object-cover" alt="Ad Engine" />

            <div className="p-6 text-left">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                Growth
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Ad Placement Engine
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Fair monetization platform built for developers globally.
              </p>

              <button className="text-sm font-medium text-blue-600">
                Discover →
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
