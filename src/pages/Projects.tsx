import ProjectBox from '../components/ProjectBox';
import portfolioData from '../data/portfolio.json';

const Projects = () => {

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-4">
        <h2 className="text-4xl font-bold">Selected Projects</h2>
        <span className="text-xl opacity-50">Count: {String(portfolioData.projects.length).padStart(2, '0')}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioData.projects.map((project, idx) => (
          <ProjectBox
            key={project.id}
            id={project.id}
            title={project.name}
            desc={project.description}
            tags={project.tech}
            color={project.color}
            index={idx}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
