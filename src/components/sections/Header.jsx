import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const PHRASES = [
  "Developing full-stack applications",
  "Creating digital solutions",
  "Building beautiful web experiences",
];

function Header() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = PHRASES[phraseIndex % PHRASES.length];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseAtEnd = 1200;

    let timeoutId;

    if (!isDeleting && text.length < current.length) {
      timeoutId = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!isDeleting && text.length === current.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && text.length > 0) {
      timeoutId = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="home" className="relative flex flex-col gap-4 h-full items-center justify-center mx-auto max-w-6xl px-8 pb-24">
      <span className="bg-[#1e3b8a8f]  rounded text-center px-4 py-1 text-[#93C5FD]">Full-Stack Developer</span>
      <div className="">
        <h1 className="text-white text-3xl lg:text-6xl font-bold text-center">Hi Iam <span className="text-blue-500">Ahmed Fadl</span></h1>
        <p className="mt-3 text-xl lg:text-2xl text-blue-100/90 text-center">
          <span>{text}</span>
          <span className="ml-1 inline-block w-0.5 h-6 align-middle bg-blue-300 animate-pulse"></span>
        </p>
        <p className="text-[#9CA3AF] text-center mt-3 max-w-xl text-md lg:text-xl">Passionate about creating intuitive, accessible, and performant web applications that solve real-world problems.</p>
        <div className="flex flex-col lg:flex-row text-center mx-auto justify-center gap-4 mt-8">
          <a href="#contact" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer">Get In Touch</a>
          <a href="#projects" className="bg-transparent border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-500 cursor-pointer hover:text-white transition-colors duration-300">View My Work</a>
        </div>
        <div className="social-icons">
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://github.com/ahmedfadl156"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-500/40 text-blue-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-fadl-753b84319/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-500/40 text-blue-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/ahme_dfadl/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-500/40 text-blue-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 lg:bottom-28 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center animate-bounce select-none">
        <p className="text-xs uppercase tracking-wider text-blue-200/90 mb-1 drop-shadow-sm">Scroll down</p>
        <a
          href="#about"
          aria-label="Scroll down"
          className="text-white hover:text-blue-100 transition-colors pointer-events-auto"
        >
          <div className="w-12 h-12 rounded-full border border-blue-400/60 ring-1 ring-blue-500/30 flex items-center justify-center bg-blue-500/10 backdrop-blur-sm shadow-lg shadow-blue-900/20 hover:bg-blue-500/20">
            <FiChevronDown size={24} />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Header
