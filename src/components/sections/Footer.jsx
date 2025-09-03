function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ahmed <span className="text-blue-400">Fadl</span>
            </h3>
            <p className="text-slate-300 mb-4">
              Full-Stack Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/ahmedfadl156"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-fadl-753b84319/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
              >
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/ahme_dfadl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
              >
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-slate-300">
                <i className="fa-solid fa-envelope mr-2 text-blue-400"></i>
                af38765222@gmail.com
              </p>
              <p className="text-slate-300">
                <i className="fa-solid fa-location-dot mr-2 text-blue-400"></i>
                New Damietta, Egypt
              </p>
              <a 
                href="/Ahmed_Fadl_CV.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600/20 border border-blue-400/30 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all duration-200"
              >
                <i className="fa-solid fa-download"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ahmed Fadl. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

