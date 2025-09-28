import Header from '@/components/Header';
import Summary from '@/components/Summary';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import AdditionalInfo from '@/components/AdditionalInfo';
import { cvData } from '@/data/cv-data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <Header data={cvData.personalInfo} />
          <div className="opacity-100 translate-y-0">
            <Summary summary={cvData.summary} />
          </div>
          <div className="opacity-100 translate-y-0">
            <Experience experience={cvData.experience} />
          </div>
          <div className="opacity-100 translate-y-0">
            <Skills skills={cvData.skills} />
          </div>
          <div className="opacity-100 translate-y-0">
            <Certifications certifications={cvData.certifications} />
          </div>
          <div className="opacity-100 translate-y-0">
            <Projects projects={cvData.projects} />
          </div>
          <div className="opacity-100 translate-y-0">
            <AdditionalInfo additionalInfo={cvData.additionalInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}