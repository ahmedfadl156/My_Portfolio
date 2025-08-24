import { useState } from "react";
import ProjectModal from "../ProjectModal";
import { projectsData } from "../data/Data";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = ["All", "Frontend", "Backend", "Full Stack"];

  const getProjectCategory = (techStack) => {
    const frontendTechs = [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
    ];
    const backendTechs = [
      "Node.js",
      "Express.js",
      "PHP",
      "SQL",
      "MongoDB",
      "OMDB API",
      "TheMealDB API",
    ];

    const hasFrontend = techStack.some((tech) => frontendTechs.includes(tech));
    const hasBackend = techStack.some((tech) => backendTechs.includes(tech));

    if (hasFrontend && hasBackend) return "Full Stack";
    if (hasBackend) return "Backend";
    return "Frontend";
  };

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter(
          (project) => getProjectCategory(project.techStack) === activeFilter
        );

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-900/15 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="logo font-bold text-3xl md:text-4xl text-white">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-300">
          Explore a selection of my recent work showcasing my skills and
          expertise in web development.
        </p>
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <div className="flex text-sm lg:text-lg gap-1 lg:gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full p-2">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 lg:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-containers grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-6xl mt-8 px-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-container bg-[#374151] rounded-lg flex flex-col gap-4"
          >
            <div className="image h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="info px-6 py-2 flex flex-col">
              <h2 className="font-bold text-xl md:text-2xl text-white mb-2">
                {project.title}
              </h2>
              <span className="mt-1 text-sm md:text-md text-slate-300">
                {project.description}
              </span>
              <div className="techStack flex flex-wrap gap-2 mt-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="techStack-item bg-[#1e3b8a8c] text-sm px-3 py-1 rounded-full text-[#93C5FD]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links flex justify-between items-center mt-10 pt-4">
                <button
                  className="details-btn text-[#60A5FA] cursor-pointer hover:text-blue-300 transition-colors"
                  onClick={() => openModal(project)}
                >
                  View Details
                </button>
                <div className="links flex gap-3 text-white text-xl">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="link-btn cursor-pointer">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    </button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="link-btn cursor-pointer">
                      <i className="fa-brands fa-github"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

export default Projects;
