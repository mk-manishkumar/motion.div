import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
    name: "Facebook",
  },

  {
    href: "https://instagram.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
    name: "Instagram",
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
    name: "X",
  },
];

const Footer = () => {
  return (
    <div className="mb-8 mt-20 ">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">&copy;restaura. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
