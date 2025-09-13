export default function HeroSection({ heroImages }) {
  return (
    <section className="bg-blue-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Drive growth 🔥 and build your brand with our marketing experts</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Transform your business with data-driven marketing strategies that deliver measurable results and sustainable growth.</p>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer">Get started</button>
          </div>
          <div className="relative h-96 hidden lg:block">
            <div className="absolute top-5 right-24 w-32 h-32">
              <img src={heroImages[0]} alt="Team member" className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg" />
            </div>
            <div className="absolute bottom-12 right-5 w-32 h-32">
              <img src={heroImages[1]} alt="Team member" className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg" />
            </div>
            <div className="absolute top-44 right-48 w-32 h-32">
              <img src={heroImages[2]} alt="Team member" className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
