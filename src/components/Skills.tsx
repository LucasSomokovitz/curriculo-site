import { CVData } from '@/data/cv-data';

interface SkillsProps {
  skills: CVData['skills'];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        Habilidades Técnicas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">{category.category}</h3>
            <ul className="space-y-2">
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
