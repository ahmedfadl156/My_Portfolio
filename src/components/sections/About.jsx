function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-900/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="logo font-bold text-4xl md:text-5xl text-white">
          About <span className="text-blue-400">Me</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-300">
          Get to know me, my background, and what drives my passion for creating
          exceptional digital experiences.      
        </p>

        <div className="mt-10 mx-auto h-px w-40 bg-blue-400/15" />

        {/* About Me */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 mx-auto max-w-7xl mt-16">
          <div className="about-container text-left flex flex-col gap-4 lg:basis-1/2 max-w-none order-2 lg:order-1">
            <h2 className="logo text-2xl lg:text-3xl text-center lg:text-left font-bold mb-2">
              My Journy
            </h2>
            <p className="text-sm md:text-lg text-slate-300 mb-2">
              Hi, I’m Ahmed Fadl Ahmed AbdoRabo, a passionate Frontend Developer
              with over three years of self-taught experience, dedicated to
              crafting responsive, user-centric web applications. My journey
              began with a curiosity for web development, leading me to master
              HTML, CSS, JavaScript, and frameworks like Angular, and now I’m
              diving deep into React to build modern, dynamic interfaces.
            </p>
            <p className="text-sm md:text-lg text-slate-300 mb-2">
              Currently pursuing a B.Sc. in Computer Science at New Mansoura
              University, I thrive on turning ideas into seamless, responsive
              applications. Throughout my journey, I’ve honed my skills in
              responsive design, API integration, and clean code practices. I’m
              fueled by solving complex challenges, collaborating with teams,
              and staying ahead of web development trends. My goal is to craft
              impactful digital solutions that delight users and meet client
              needs.
            </p>
            <p className="text-sm md:text-lg text-slate-300 mb-2">
              Let’s connect to create something extraordinary
            </p>
            <a
              href="/AhmedFadl_CV.pdf"
              className="btn self-start text-sm md:text-lg bg-blue-400 hover:bg-blue-500 text-center text-white transition-colors duration-300 ease-in-out px-6 py-2 rounded-lg"
              download="AhmedFadl_CV.pdf"
            >
              Download Resume
              <i className="fa-solid fa-download ml-2"></i>
            </a>
          </div>
          <div className="image-container h-64 lg:h-auto lg:basis-1/2 rounded-xl overflow-hidden shadow-lg shadow-blue-900/20 order-1 lg:order-2">
            <img
              src="/Me.jpg"
              alt="Me Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
