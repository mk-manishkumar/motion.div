import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-8 border-t border-neutral-700 pt-4">
        <p className="text-neutral-400 text-xs md:text-[1rem]">&copy; VirtualR 2024; All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
