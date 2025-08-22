import { useEffect, useState } from "react";
import { testimonials } from "../data/Data";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-900/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="logo font-bold text-3xl md:text-4xl text-white">
          Client <span className="text-blue-400">Testimonials</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-300">
          Don't just take my word for it. Here's what my clients have to say
          about working with me.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mt-16 px-6">
        <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-6 left-6 text-blue-400/20 text-6xl">
            "
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-300 text-lg md:text-xl italic mb-6 leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-blue-400">
                    {testimonials[activeIndex].position},{" "}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-600/80 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-600/80 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-blue-400 w-8"
                  : "bg-slate-600 w-2 hover:bg-slate-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
