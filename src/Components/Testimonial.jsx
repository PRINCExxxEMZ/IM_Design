import React, { useEffect, useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";

/**
 * Responsive testimonial carousel:
 * - 1 card on small screens
 * - 2 cards on md
 * - 3 cards on lg and above
 */
export default function TestimonialCarousel() {
  const items = [
    {
      text: "Completely transformed my perspective on tech. The training was practical and instructors cared about growth.",
      name: "Emmanuel",
      role: "Product Manager",
    },
    {
      text: "Hands-on and practical. I've already used what I learned to ship improvements to our product.",
      name: "Daniel",
      role: "Product Designer",
    },
    {
      text: "Great course — clear, practical and supportive community.",
      name: "John",
      role: "Engineering Lead",
    },
    {
      text: "I improved my workflow dramatically after taking this course. Highly recommended.",
      name: "Grace",
      role: "Frontend Engineer",
    },
    {
      text: "Practical, real-world lessons. The mentors were supportive and helpful.",
      name: "Tunde",
      role: "Product Designer",
    },
  ];

  // state
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // recompute cardsPerView on resize
  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // clamp the index when cardsPerView changes or items length changes
  useEffect(() => {
    const maxStart = Math.max(0, items.length - cardsPerView);
    if (index > maxStart) setIndex(maxStart);
  }, [cardsPerView, items.length]); // eslint-disable-line

  // helpers
  const maxIndex = Math.max(0, items.length - cardsPerView);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const goTo = (i) => setIndex(Math.max(0, Math.min(maxIndex, i)));

  // swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // compute width and translate percent
  // each slide width = 100 / cardsPerView %
  const slideWidthPercent = 100 / cardsPerView;
  const translateXPercent = index * slideWidthPercent;

  // dots: pages count = maxIndex + 1
  const pageCount = maxIndex + 1;

  return (
  <section className="max-w-6xl mx-auto px-4 py-10 my-[100px]">
    <h3 className="text-lg font-medium mb-6">Testimonials</h3>

    <div className="relative">
      {/* ARROWS - placed outside the swipeable area so taps always work */}
      <button
        onClick={prev}
        disabled={index === 0}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow bg-white border ${
          index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
        aria-label="Previous testimonials"
      >
        ‹
      </button>

      <button
        onClick={next}
        disabled={index === maxIndex}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow bg-white border ${
          index === maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
        aria-label="Next testimonials"
      >
        ›
      </button>

      {/* SWIPEABLE VIEWPORT */}
      <div
        {...handlers}
        className="overflow-hidden"
        // crucial: hint to the browser that vertical panning should still be allowed
        style={{ touchAction: "pan-y" }}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${(items.length * 100) / cardsPerView}%`,
            transform: `translateX(-${translateXPercent}%)`,
          }}
        >
          {items.map((it, i) => (
            <div key={i} className="px-3" style={{ width: `${slideWidthPercent}%` }}>
              <blockquote className="p-6 rounded-lg shadow-sm bg-white h-full flex flex-col justify-between">
                <p className="text-sm text-gray-700 mb-4">{it.text}</p>
                <div className="flex items-center gap-3 mt-4">
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
      </div>

      {/* pager dots (outside) */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: pageCount }).map((_, p) => (
          <button
            key={p}
            onClick={() => goTo(p)}
            className={`w-2 h-2 rounded-full ${p === index ? "bg-black" : "bg-gray-300"}`}
            aria-label={`Go to page ${p + 1}`}
          />
        ))}
      </div>
    </div>
  </section>
  );
}
function getCardsPerView() {
  if (typeof window === "undefined") return 1;
  const w = window.innerWidth;
  if (w >= 1024) return 3;
  if (w >= 750) return 2;
  return 1;
}
