export default function BrandsSection({ brandLogos }) {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">Brands we have worked with</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {brandLogos.map((brand) => (
            <div key={brand.name} className="text-center font-bold text-lg text-gray-600 p-5 bg-white rounded-lg hover:text-brand-orange hover:scale-105 transition-all duration-200 cursor-pointer">
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
