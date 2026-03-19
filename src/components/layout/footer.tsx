import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/section";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-button";

// Custom X Icon since it's commonly asked for modern designs replacing Twitter bird
const XIcon = ({ size = 16, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: XIcon, href: "#", label: "X" },
];

export function Footer() {
    return (
        <footer className="bg-white pt-28 md:pt-36 pb-12 relative z-10">
            <Container className="max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Left Column - Brand & Newsletter */}
                    <div className="lg:col-span-4 flex flex-col">
                        <Link href="/" className="mb-6 inline-block">
                            <Image
                                src="/brainito-logo.svg"
                                alt="Brainito Logo"
                                width={230}
                                height={55}
                                className="h-13 w-auto mix-blend-multiply"
                            />
                        </Link>

                        <p className="text-[14px] text-[#606266] leading-relaxed mb-8 max-w-[280px]">
                            Turn your website into a growth engine with AI-powered marketing strategies.
                        </p>

                        <div className="flex items-center gap-3 mb-14">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-[36px] h-[36px] rounded-full bg-[#FAF5FF] text-[#101011] hover:bg-[#71389A] hover:text-white flex items-center justify-center transition-colors duration-200"
                                >
                                    <social.icon size={16} strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-[16px] font-medium text-[#101011] mb-5">Subscribe for our newsletter</h4>
                            <div className="relative w-full max-w-[380px] h-[52px] rounded-full border border-[#e9e0f5] bg-white flex items-center p-1 focus-within:border-[#CB84FF] transition-colors shadow-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full h-full bg-transparent pl-5 pr-4 text-[14px] text-[#101011] placeholder:text-[#a0a0a0] focus:outline-none"
                                />
                                <button className="h-full px-8 rounded-full bg-gradient-to-r from-[#8549b0] to-[#ba76ec] text-white font-medium text-[14px] hover:brightness-110 transition-all flex-shrink-0 group">
                                    <AnimatedText>Subscribe</AnimatedText>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Columns - Links & Offices */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-10">
                            <div>
                                <h4 className="text-[16px] font-medium text-[#101011] mb-5">Product</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/diy-marketing-plan" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">DIY Marketing Plan</Link></li>
                                    <li><Link href="/hire-marketer" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Hire Marketer</Link></li>
                                    <li><Link href="/pricing" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Pricing</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[16px] font-medium text-[#101011] mb-5">Resources</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/case-studies" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Case Studies</Link></li>
                                    <li><Link href="/help" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Help</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-10">
                            <div>
                                <h4 className="text-[16px] font-medium text-[#101011] mb-5">Company</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/about" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">About</Link></li>
                                    <li><Link href="/contact" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Contact</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[16px] font-medium text-[#101011] mb-5">Legal</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/privacy-policy" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="/terms-of-service" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Terms of Service</Link></li>
                                    <li><Link href="/refund-policy" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Refund Policy</Link></li>
                                    <li><Link href="/data-cookie-policy" className="text-[14px] text-[#606266] hover:text-[#71389A] transition-colors">Data & Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3 - Offices */}
                        <div>
                            <h4 className="text-[16px] font-medium text-[#101011] mb-5">Our Offices</h4>

                            <div className="mb-8">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                    <Image src="/india.svg" alt="India flag" width={20} height={15} className="w-[18px] h-[18px] rounded-full object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
                                    <span className="text-[15px] font-medium text-[#101011]">India (Headquarters)</span>
                                </div>
                                <div className="pl-6 space-y-2">
                                    <p className="text-[13px] text-[#606266] leading-[1.6]">
                                        Wockito Innovative Solutions PVT LTD<br />
                                        1101, 11th Floor, Satyamev Elite<br />
                                        Ambli-Bopal, Vakil Saheb Bridge, T Junction<br />
                                        Ahmedabad, Gujarat 380058
                                    </p>
                                    <div className="flex items-center gap-2 text-[#606266] text-[13px]">
                                        <Phone size={13} strokeWidth={1.5} />
                                        <span>+91 7383691101</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2.5 mb-2.5">
                                    <Image src="/usa.svg" alt="USA flag" width={20} height={15} className="w-[18px] h-[18px] rounded-full object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
                                    <span className="text-[15px] font-medium text-[#101011]">United States</span>
                                </div>
                                <div className="pl-6 space-y-2">
                                    <p className="text-[13px] text-[#606266] leading-[1.6]">
                                        2055 Limestone Rd STE 200-C<br />
                                        Wilmington, DE, New Castle<br />
                                        US, 19808
                                    </p>
                                    <div className="flex items-center gap-2 text-[#606266] text-[13px]">
                                        <Phone size={13} strokeWidth={1.5} />
                                        <span>+1 442 289 2313</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-[#f2e6ff] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] text-[#606266]">
                        © 2026 Brainito Inc. All rights reserved.
                    </p>
                    <a href="mailto:support@brainito.com" className="flex items-center gap-1.5 text-[14px] text-[#101011] font-medium hover:text-[#71389A] transition-colors">
                        <Mail size={16} strokeWidth={1.5} />
                        support@brainito.com
                    </a>
                </div>
            </Container>
        </footer>
    );
}
