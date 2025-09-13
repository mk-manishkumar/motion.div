export default function DarkCTASection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Make your business more profitable</h2>
            <p className="text-xl text-gray-300 leading-relaxed">Unlock your business potential with our proven marketing strategies that have helped companies increase revenue by an average of 150%.</p>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 cursor-pointer">Learn more</button>
          </div>
          <div className="flex justify-center">
            <svg width="200" height="120" viewBox="0 0 200 120" className="text-brand-orange">
              <polyline fill="none" stroke="currentColor" strokeWidth="3" points="20,100 60,80 100,40 140,20 180,10" />
              <circle cx="20" cy="100" r="4" fill="currentColor" />
              <circle cx="60" cy="80" r="4" fill="currentColor" />
              <circle cx="100" cy="40" r="4" fill="currentColor" />
              <circle cx="140" cy="20" r="4" fill="currentColor" />
              <circle cx="180" cy="10" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
