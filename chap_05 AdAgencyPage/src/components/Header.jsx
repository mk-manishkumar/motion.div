export default function Header({ navigation }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-brand-orange m-0">Catalyst</h2>
          </div>
          <ul className="hidden md:flex space-x-8 list-none m-0 p-0">
            {navigation.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(" ", "").replace("us", "")}`} className="text-gray-700 hover:text-brand-orange font-medium transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
