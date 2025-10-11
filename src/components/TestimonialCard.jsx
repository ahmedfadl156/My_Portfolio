import { useState, useEffect } from "react";

function TestimonialCard({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 overflow-hidden">
      <div className="absolute top-6 left-6 text-blue-400/20 text-6xl">
        "
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
              {currentTestimonial.image ? (
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-slate-300 text-lg md:text-xl italic mb-6 leading-relaxed">
              "{currentTestimonial.text || currentTestimonial.testimonial}"
            </p>
            <div>
              <h4 className="text-xl font-bold text-white">
                {currentTestimonial.name}
              </h4>
              <p className="text-blue-400">
                {currentTestimonial.position}
                {currentTestimonial.company && `, ${currentTestimonial.company}`}
              </p>
              {currentTestimonial.rating && (
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < currentTestimonial.rating
                          ? "text-yellow-400"
                          : "text-slate-600"
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {testimonials.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}

export default TestimonialCard;
