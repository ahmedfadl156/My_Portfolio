import { ForntEndData, BackEndData, otherSkills } from "../data/Data";

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-900/15 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="logo font-bold text-3xl md:text-4xl text-white mb-4">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-300">
          A comprehensive overview of my technical skills and proficiency levels
          in various technologies.
        </p>
      </div>

      <div className="skills-containers grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-6xl mt-16 px-8">
        <div className="skill-container bg-[#111827] flex flex-col gap-3 py-8 px-6 rounded-xl">
          {/* Frontend Container */}
          <h2 className="text-white text-xl font-bold">Frontend Development</h2>
          <div className="skills-progress flex flex-col gap-6 mt-6">
            {ForntEndData.map((skill) => (
              <div key={skill.title}>
                <div className="progress-info flex justify-between items-center">
                  <h2 className="mb-2 text-white text-sm">{skill.title}</h2>
                  <p className="text-[#9CA3AF] text-xs">{skill.progress}%</p>
                </div>
                <div className="skill-progress-bar relative w-full h-3 rounded-full bg-[#374151] overflow-hidden">
                  <div
                    className="skill-progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-[#3B82F6] to-[#9333EA] rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Backend Container */}
        <div className="skill-container bg-[#111827] flex flex-col gap-3 py-8 px-6 rounded-xl">
          <h2 className="text-white text-xl font-bold">Backend Development</h2>
          <div className="skills-progress flex flex-col gap-6 mt-6">
            {BackEndData.map((skill) => (
              <div key={skill.title}>
                <div className="progress-info flex justify-between items-center">
                  <h2 className="mb-2 text-white text-sm">{skill.title}</h2>
                  <p className="text-[#9CA3AF] text-xs">{skill.progress}%</p>
                </div>
                <div className="skill-progress-bar relative w-full h-3 rounded-full bg-[#374151] overflow-hidden">
                  <div
                    className="skill-progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-[#3B82F6] to-[#9333EA] rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Other Skills Container */}
        <div className="skill-container bg-[#111827] flex flex-col gap-3 py-8 px-6 rounded-xl">
          <h2 className="text-white text-xl font-bold">Other Skills</h2>
          <div className="skills-progress flex flex-col gap-6 mt-6">
            {otherSkills.map((skill) => (
              <div key={skill.title}>
                <div className="progress-info flex justify-between items-center">
                  <h2 className="mb-2 text-white text-sm">{skill.title}</h2>
                  <p className="text-[#9CA3AF] text-xs">{skill.progress}%</p>
                </div>
                <div className="skill-progress-bar relative w-full h-3 rounded-full bg-[#374151] overflow-hidden">
                  <div
                    className="skill-progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-[#3B82F6] to-[#9333EA] rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
