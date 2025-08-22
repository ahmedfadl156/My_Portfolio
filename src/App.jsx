import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import About from "./components/sections/About";
import TimeLine from "./components/sections/TimeLine";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-full">
          <section className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
            </div>
            <div className="relative z-10">
              <Navbar />
            </div>
            <div className="relative z-10 flex-1 flex">
              <Header />
            </div>
          </section>

          <About />
          <TimeLine />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
