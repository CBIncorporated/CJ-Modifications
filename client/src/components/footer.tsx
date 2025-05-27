import { SiDiscord, SiYoutube, SiGithub } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        "FiveM MLOs",
        "Roblox Scripts",
        "Custom Development",
        "Asset Packs",
      ],
    },
    {
      title: "Support",
      links: [
        "Documentation",
        "Installation Guides",
        "Video Tutorials",
        "Community Discord",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Terms of Service",
        "Privacy Policy",
        "Refund Policy",
      ],
    },
  ];

  const socialLinks = [
    { icon: SiDiscord, href: "#", label: "Discord" },
    { icon: SiYoutube, href: "#", label: "YouTube" },
    { icon: SiGithub, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">CJ Modifications</h3>
            <p className="text-gray-300 mb-4">
              Premium FiveM and Roblox assets for the gaming community. Quality, performance, and creativity in every product.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} CJ Modifications. All rights reserved. Made with ❤️ for the gaming community.</p>
        </div>
      </div>
    </footer>
  );
}