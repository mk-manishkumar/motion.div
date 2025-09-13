export default function TeamSection({ teamMember }) {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-center">
          <div className="text-center">
            <img src={teamMember.image} alt={teamMember.name} className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-6 border-brand-orange" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{teamMember.name}</h3>
            <p className="text-gray-600">{teamMember.role}</p>
          </div>
          <div className="lg:col-span-3">
            <blockquote className="text-lg text-gray-700 italic bg-white p-8 rounded-lg border-l-4 border-brand-orange shadow-sm leading-relaxed">"{teamMember.quote}"</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
