import React, { useState } from "react"; 

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

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-lg font-medium mb-4">Testimonials</h3>

      <div className="relative">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <blockquote
              key={i}
              className={`p-6 rounded-lg shadow-sm transition-transform duration-300 ${i === index ? "bg-orange-50 scale-100" : "bg-white opacity-70 scale-95"}`}
            >
              <p className="text-sm text-gray-700 mb-4">{it.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">E</div>
                <div>
                  <div className="font-semibold text-sm">{it.name}</div>
                  <div className="text-xs text-gray-500">{it.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        {/* controls */}
        {/* <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-2">
          <button onClick={prev} className="p-2 bg-white rounded shadow">◀</button>
          <button onClick={next} className="p-2 bg-white rounded shadow">▶</button>
        </div> */}
      </div>
    </section>
  );
}

export default Testimonial