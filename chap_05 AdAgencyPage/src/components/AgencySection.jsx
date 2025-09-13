export default function AgencySection() {
  return (
    <section id="about" className="bg-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="flex justify-center order-2 lg:order-none">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" alt="Team collaboration" className="w-96 h-96 rounded-full object-cover border-8 border-brand-orange" />
          </div>
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-none">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Work with the best marketing agency</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Partner with industry leaders who understand your business needs and deliver exceptional results through innovative marketing solutions.</p>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer">About us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
