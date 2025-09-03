import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 px-10 relative">
      {/* My Name Logo */}
      <h1 className="logo text-2xl font-bold lg:text-3xl text-white">Ahmed Fadl</h1>
      
      {/* Desktop Nav Links */}
      <ul className="nav-links hidden lg:flex gap-8">
        <li>
          <a href="#home" className="relative text-gray-300 font-medium text-xl transition-[background-size,color] duration-300 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-blue-400">Home</a>
        </li>
        <li>
          <a href="#about" className="relative text-gray-300 font-medium text-xl transition-[background-size,color] duration-300 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-blue-400">About</a>
        </li>
        <li>
          <a href="#skills" className="relative text-gray-300 font-medium text-xl transition-[background-size,color] duration-300 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-blue-400">Skills</a>
        </li>
        <li>
          <a href="#projects" className="relative text-gray-300 font-medium text-xl transition-[background-size,color] duration-300 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-blue-400">Projects</a>
        </li>
        <li>
          <a href="#testimonials" className="relative text-gray-300 font-medium text-xl transition-[background-size,color] duration-300 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-blue-400">Testimonials</a>
        </li>
        <li>
          <a href="#contact" className="relative text-gray-300 font-medium text-xl transition-[background-size,color] duration-300 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-blue-400">Contact</a>
        </li>
      </ul>

      {/* Mobile CV Download Button */}
      <div className="md:hidden mr-3">
        <a 
          href="/Ahmed_Fadl_CV.pdf" 
          download="Ahmed_Fadl_CV.pdf"
          className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          CV
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 z-40 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col pt-20 px-8 space-y-6">
          <a href="#" className="text-gray-300 font-medium hover:text-blue-400 text-xl py-3 border-b border-gray-700 transition-colors duration-300" onClick={toggleMenu}>Home</a>
          <a href="#" className="text-gray-300 font-medium hover:text-blue-400 text-xl py-3 border-b border-gray-700 transition-colors duration-300" onClick={toggleMenu}>About</a>
          <a href="#" className="text-gray-300 font-medium hover:text-blue-400 text-xl py-3 border-b border-gray-700 transition-colors duration-300" onClick={toggleMenu}>Skills</a>
          <a href="#" className="text-gray-300 font-medium hover:text-blue-400 text-xl py-3 border-b border-gray-700 transition-colors duration-300" onClick={toggleMenu}>Projects</a>
          <a href="#" className="text-gray-300 font-medium hover:text-blue-400 text-xl py-3 border-b border-gray-700 transition-colors duration-300" onClick={toggleMenu}>Testimonials</a>
          <a href="#" className="text-gray-300 font-medium hover:text-blue-400 text-xl py-3 border-b border-gray-700 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
        </div>
      </div>

      {/* Desktop CV Download Button */}
      <div className="hidden md:block">
        <a 
          href="/Ahmed_Fadl_CV.pdf" 
          download="Ahmed_Fadl_CV.pdf"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
