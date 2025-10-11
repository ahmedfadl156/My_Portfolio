import { useState } from "react";
import { useForm } from "react-hook-form";
import TestimonialCard from "../TestimonialCard";
import getTestimonials from "../../services/testimonials/gettestimonials";
import useAddTestimonial from "../../services/testimonials/addtestimonial";

function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {testimonials , isLoading , error} = getTestimonials();
  const {addTestimonial: submitTestimonial, isLoading: isSubmitting} = useAddTestimonial();
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    clearErrors,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      position: '',
      email: '',
      testimonial: '',
      rating: 0
    }
  });
  
  const rating = watch('rating');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    if (data.rating === 0) {
      setError('rating', {
        type: 'required',
        message: 'Please select a rating'
      });
      return;
    }
    submitTestimonial(data, {
      onSuccess: () => {
        closeModal();
      }
    });
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
          {testimonials?.length > 0 
            ? "Here's what my clients have to say about working with me."
            : "Don't just take my word for it. Be the first to share your experience!"
          }
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mt-16 px-6">
        {testimonials?.length > 0 ? (
          // Show testimonials when available
          <>
            <TestimonialCard testimonials={testimonials} />
            <div className="text-center mt-8">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Your Testimonial
              </button>
            </div>
          </>
        ) : (
          // Show placeholder when no testimonials
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 text-center">
            <div className="absolute top-6 left-6 text-blue-400/20 text-6xl">
              "
            </div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-2 border-blue-400/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Be the First to Share
                </h3>
                
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  I'm collecting authentic testimonials from real clients. 
                  Share your experience working with me and help others discover what it's like to collaborate together.
                </p>
              </div>
              
              <button
                onClick={openModal}
                className="inline-flex cursor-pointer items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Your Testimonial
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Add Testimonial</h3>
                <button
                  onClick={closeModal}
                  className="p-2 cursor-pointer rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-slate-300 mb-2">
                    Position & Company *
                  </label>
                  <input
                    type="text"
                    id="position"
                    {...register('position', { required: 'Position is required' })}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.position ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="e.g. CEO at TechCorp"
                  />
                  {errors.position && (
                    <p className="text-red-400 text-sm mt-1">{errors.position.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Testimonial *
                  </label>
                  <textarea
                    id="testimonial"
                    rows={4}
                    {...register('testimonial', { 
                      required: 'Testimonial is required',
                      minLength: {
                        value: 10,
                        message: 'Testimonial must be at least 10 characters'
                      }
                    })}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      errors.testimonial ? 'border-red-500' : 'border-slate-600'
                    }`}
                    placeholder="Share your experience working with me..."
                  />
                  {errors.testimonial && (
                    <p className="text-red-400 text-sm mt-1">{errors.testimonial.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-slate-300 mb-2">
                    Rating *
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => {
                          setValue('rating', star);
                          // Clear any existing rating error
                          if (errors.rating) {
                            clearErrors('rating');
                          }
                        }}
                        className={`text-2xl transition-colors duration-200 ${
                          star <= rating
                            ? "text-yellow-400"
                            : "text-slate-600 hover:text-yellow-300"
                        }`}
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-sm text-slate-400 mt-1">
                      {rating} star{rating !== 1 ? 's' : ''} selected
                    </p>
                  )}
                  {errors.rating && (
                    <p className="text-red-400 text-sm mt-1">{errors.rating.message}</p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Testimonials;
