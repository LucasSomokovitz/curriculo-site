interface AdditionalInfoProps {
  additionalInfo: string[];
}

export default function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
  return (
      <section className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          Informações Adicionais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalInfo.map((info, index) => (
            <div key={index} className="group">
              <div className="flex items-start bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg group-hover:text-blue-800 transition-colors">{info}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
