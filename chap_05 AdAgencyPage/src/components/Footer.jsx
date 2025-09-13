import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email?.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 2000);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div id="resources">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Catalyst</h3>
            <p className="text-gray-300 leading-relaxed">Transforming businesses through innovative marketing strategies and data-driven solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a href="#service" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Marketing Strategy
                </a>
              </li>
              <li>
                <a href="#service" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Market Analytics
                </a>
              </li>
              <li>
                <a href="#service" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Public Relations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 leading-relaxed">Subscribe to our newsletter for marketing tips and insights.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-2">
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange" />
              <button type="button" onClick={handleSubscribe} className={`px-4 py-2 w-fit mx-auto rounded font-semibold transition-colors ${subscribed ? "bg-green-600 text-white" : "bg-orange-600 text-white hover:bg-orange-600"}`}>
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Catalyst. All rights reserved.</p>
          <div className="flex space-x-6">
            <button target="_blank" className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer">
              Twitter
            </button>
            <button target="_blank" className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer">
              LinkedIn
            </button>
            <button target="_blank" className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
