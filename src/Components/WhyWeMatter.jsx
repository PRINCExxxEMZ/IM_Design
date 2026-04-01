import { motion } from "framer-motion";
import React from "react";

// Import images properly
import img1 from "../assets/portrait-young-charming-girl.jpg";
import img2 from "../assets/man-looking-sales-statistics-computer-display-showing-income-figures.jpg";
import img3 from "../assets/technology-innovation-simulation-gadget-concept.jpg";
import img4 from "../assets/solar-panels-factory-engineer-using-vr-headset-improve-solar-energy.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    title: "Safety first for kids",
    text: "Every child deserves a protected digital space.",
    img: img1,
  },
  {
    title: "Revenue made simple for developers",
    text: "Transparent earnings without the complexity.",
    img: img2,
  },
  {
    title: "Technology for impact",
    text: "Solutions that serve both people and purpose.",
    img: img3,
  },
  {
    title: "Scalable, future-ready solutions",
    text: "Built to grow with you, today and tomorrow.",
    img: img4,
  },
];

export default function WhyWeMatter() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-sm font-semibold text-gray-700">Strength</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Why we matter</h2>
          <p className="text-gray-600 mt-2 max-w-lg">
            Built on principles that drive real change.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="w-full h-40 bg-gray-200 rounded-[3px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
