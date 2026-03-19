import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LinkedinIcon, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "https://www.climateresilienceconsulting.com/", active: true },
  {
    label: "10 Years of Impact",
    href: "#",
    subItems: [
      { label: "Impact", href: "#impact" },
      { label: "Timeline", href: "#timeline" },
      { label: "10 year's Gallery", href: "#gallery" },
      { label: "Partner With Us", href: "#contact" }
    ]
  },
  { label: "The Resilience Advantage", href: "https://www.climateresilienceconsulting.com/small-business-resilience-advantage" },
  { label: "Government Capabilities", href: "https://www.climateresilienceconsulting.com/government-capabilities" },
  {
    label: "About",
    href: "https://www.climateresilienceconsulting.com/about-us",
    subItems: [
      { label: "About Us", href: "https://www.climateresilienceconsulting.com/about-us" },
      { label: "Leadership", href: "https://www.climateresilienceconsulting.com/leadership" },
      { label: "Our Approach", href: "https://www.climateresilienceconsulting.com/our-approach" },
      { label: "Partners", href: "https://www.climateresilienceconsulting.com/partners" }
    ]
  },
  {
    label: "Services",
    href: "#",
    subItems: [
      { label: "Resilience Strategy", href: "https://www.climateresilienceconsulting.com/resilience-strategy" },
      { label: "Resilience Implementation", href: "https://www.climateresilienceconsulting.com/resilience-implementation" },
      { label: "Resilience Thought Leadership", href: "https://www.climateresilienceconsulting.com/resilience-thought-leadership" }
    ]
  },
  { label: "Media", href: "https://www.climateresilienceconsulting.com/media" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"}`}>
        <div className="container mx-auto px-4 lg:px-6 max-w-[100rem]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="https://www.climateresilienceconsulting.com/" className="flex items-center px-2 py-1.5 z-50">
              <img src="https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1af2e753f152b32dd8a81.png" alt="CRC" className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center justify-end gap-x-6 lg:gap-x-8 flex-1 pr-6">
              {navItems.map(item => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`text-[15px] font-normal text-[#5f6368] hover:text-black transition-colors flex flex-col justify-center h-16`}
                  >
                    <span>{item.label}</span>
                    {item.active && (
                      <div className="h-0.5 bg-[#5f6368] w-full mt-0.5" />
                    )}
                  </a>

                  {item.subItems && (
                    <div className={`absolute top-14 left-0 bg-white border border-gray-100 shadow-lg rounded-md min-w-[240px] py-2 transition-all duration-200 transform origin-top ${openDropdown === item.label ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                      {item.subItems.map(subItem => (
                        <a key={subItem.label} href={subItem.href} className="block px-5 py-2.5 text-sm font-normal text-[#5f6368] hover:text-black hover:bg-gray-50 transition-colors">
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-4 ml-2 pl-6 border-l border-gray-300 h-6">
                <a href="https://www.linkedin.com/company/climate-resilience-consulting/" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
                  <LinkedinIcon className="w-5 h-5 fill-current" />
                </a>
                <a href="mailto:info@climateresilienceconsulting.com" className="text-black hover:opacity-70 transition-opacity">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </nav>

            {/* Contact Button Desktop */}
            <Button className="hidden xl:flex bg-[#FFB800] hover:bg-[#e6a600] text-black font-normal rounded-full px-7 py-5 h-auto text-[15px] transition-colors" asChild>
              <a href="https://www.climateresilienceconsulting.com/contact">Contact</a>
            </Button>

            {/* Mobile Menu Button */}
            <button className="xl:hidden p-2 relative z-50 text-black ml-auto rounded-md bg-white border border-gray-200 shadow-sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-white xl:hidden pt-24 overflow-y-auto w-full h-full pb-10">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1 w-full relative z-40">
              {navItems.map(item => (
                <div key={item.label} className="border-b border-gray-100 py-1">
                  {item.subItems ? (
                    <div>
                      <div className="flex justify-between items-center py-3">
                        <a href={item.href} onClick={() => !item.subItems && setIsMobileMenuOpen(false)} className={`text-lg font-normal text-[#5f6368] ${item.active ? "text-black" : ""}`}>
                          {item.label}
                        </a>
                        <button onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(openDropdown === item.label ? null : item.label);
                        }} className="p-2 -mr-2 text-gray-400">
                          <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="flex flex-col gap-3 pl-4 pb-4 bg-gray-50/50 rounded-lg p-4 mt-2 mb-2">
                              {item.subItems.map(subItem => (
                                <a key={subItem.label} href={subItem.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 block py-1">
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-normal text-[#5f6368] py-3 block ${item.active ? "text-black font-medium" : ""}`}>
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-6 mt-6 pb-6 border-b border-gray-100">
                <a href="https://www.linkedin.com/company/climate-resilience-consulting/" target="_blank" rel="noopener noreferrer" className="text-[#5f6368] hover:text-black">
                  <LinkedinIcon className="w-6 h-6 fill-current" />
                </a>
                <a href="mailto:info@climateresilienceconsulting.com" className="text-[#5f6368] hover:text-black">
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <Button className="bg-[#FFB800] hover:bg-[#e6a600] text-black font-normal mt-6 rounded-full py-6 text-lg w-full" asChild>
                <a href="https://www.climateresilienceconsulting.com/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
