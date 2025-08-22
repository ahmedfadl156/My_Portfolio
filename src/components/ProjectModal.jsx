import { useEffect } from 'react';

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all duration-200"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-1/2 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/30"></div>
          </div>

          <div className="lg:w-1/2 p-8 flex flex-col">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Key Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {project.features?.map((feature, index) => (
                    <div key={index} className="flex items-center text-slate-300">
                      <i className="fa-solid fa-check text-green-400 mr-3"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-700/50">
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Live Demo
                </button>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <i className="fa-brands fa-github"></i>
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
