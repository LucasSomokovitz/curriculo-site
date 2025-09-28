import { CVData } from '@/data/cv-data';

interface ExperienceProps {
  experience: CVData['experience'];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
        </div>
        Experiência Profissional
      </h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="group">
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                  <p className="text-blue-600 font-medium text-lg">{job.company}</p>
                </div>
                <div className="text-sm text-gray-600 mt-2 md:mt-0">
                  <p className="font-semibold">{job.period}</p>
                  {job.duration && <p className="text-blue-500 font-medium">{job.duration}</p>}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">{job.location}</p>
              {job.description && (
                <div className="mt-4">
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
