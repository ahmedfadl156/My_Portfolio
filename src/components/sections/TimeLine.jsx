import { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import { timelineData } from "../data/Data";

function TimelineItem({ item, index, isVisible }) {
  const isLeft = index % 2 === 1;
  const IconComponent = item.icon;

  return (
    <div
      className={`relative flex items-center mb-12 md:mb-16 group
      ${isLeft ? "md:justify-start" : "md:justify-end"}
      justify-start
    `}
    >
      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-12 md:h-16 bg-gradient-to-b from-blue-500/50 to-transparent -top-6 md:-top-8" />

      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${
            item.color
          } flex items-center justify-center shadow-lg shadow-blue-900/30 transition-all duration-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } group-hover:scale-110`}
        >
          <IconComponent className="text-white text-base md:text-lg" />
        </div>
      </div>

      <div
        className={`w-full max-w-md
        pl-16 md:pl-0
        ${isLeft ? "md:pr-8" : "md:pl-8"}
        text-left
        ${isLeft ? "md:text-right" : "md:text-left"}
      `}
      >
        <div
          className={`bg-slate-900/60 backdrop-blur-lg border border-white/10 rounded-xl p-4 md:p-6 shadow-xl shadow-blue-900/10 transition-all duration-700 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : `translate-y-4 opacity-0 md:${
                  isLeft ? "translate-x-8" : "-translate-x-8"
                }`
          } hover:shadow-2xl hover:shadow-blue-900/20 hover:border-blue-400/30 hover:-translate-y-1`}
        >
          <div
            className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white mb-3 shadow-lg`}
          >
            {item.year}
          </div>

          <h3 className="text-white font-bold text-base md:text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {item.title}
          </h3>

          <p className="text-blue-300 font-medium text-xs md:text-sm mb-2 md:mb-3">
            {item.subtitle}
          </p>

          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            {item.description}
          </p>

          <div
            className={`mt-3 md:mt-4 inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
              item.type === "education"
                ? "bg-emerald-500/20 text-emerald-300"
                : item.type === "experience"
                ? "bg-blue-500/20 text-blue-300"
                : item.type === "training"
                ? "bg-purple-500/20 text-purple-300"
                : "bg-cyan-500/20 text-cyan-300"
            }`}
          >
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeLine() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const items = timelineRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      className="relative py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-900/15 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="logo font-bold text-3xl md:text-4xl text-white mb-4">
            My <span className="text-blue-400">TimeLine</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My Educational and Professional Development Journey
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/30 via-blue-400/20 to-transparent" />

          {timelineData.map((item, index) => (
            <div key={item.id} data-index={index}>
              <TimelineItem
                item={item}
                index={index}
                isVisible={visibleItems.has(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimeLine;
