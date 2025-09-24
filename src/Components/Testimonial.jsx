import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

function Testimonial() {
  const items = [
    {
      text: "Completely transformed my perspective on tech. The training was practical and instructors cared about growth.",
      name: "Emmanuel",
      role: "Product Manager",
    },
    {
      text: "Hands-on and practical. I've already used what I learned to ship improvements to our product.",
      name: "Ada",
      role: "Product Designer",
    },
    {
      text: "Great course — clear, practical and supportive community.",
      name: "John",
      role: "Engineering Lead",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  // swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackMouse: true, // allows dragging with mouse as well
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-lg font-medium mb-6">Testimonials</h3>

      <div {...handlers} className="relative overflow-hidden">
        {/* Active slide */}
        <div className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="min-w-full px-4"
            >
              <blockquote className="p-6 rounded-lg shadow-sm bg-orange-50">
                <p className="text-sm text-gray-700 mb-4">{it.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                    {it.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{it.name}</div>
                    <div className="text-xs text-gray-500">{it.role}</div>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border p-2 rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border p-2 rounded-full shadow"
        >
          ›
        </button>

    
        <div className="flex justify-center mt-4 gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
