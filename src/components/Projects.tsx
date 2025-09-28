import { CVData } from '@/data/cv-data';

interface ProjectsProps {
  projects: CVData['projects'];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
      <section className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          Projetos Relevantes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.objective && (
                  <p className="text-gray-600 text-sm mb-4">{project.objective}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="mt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Ver Site
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
