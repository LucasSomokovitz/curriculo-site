interface SummaryProps {
  summary: string;
}

export default function Summary({ summary }: SummaryProps) {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        Resumo Profissional
      </h2>
      <p className="text-gray-700 leading-relaxed text-lg">{summary}</p>
    </section>
  );
}
