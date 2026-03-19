"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/section";
import Image from "next/image";

const section1Items = [
    {
        id: 1,
        yearTitle: "2015 — The First Startup",
        subtitle: "The First Startup and the Cost of Experimentation",
        description:
            "Our founder launched her first startup and gained early traction, but the marketing lacked clear direction. The experience revealed how quickly growth fails without clarity.",
        image: "/vectors/14.svg",
    },
    {
        id: 2,
        yearTitle: "2018 — The Birth of Clarity",
        subtitle: "Turning Failure into Insight",
        description:
            "After the startup closed, the focus shifted to helping founders gain clarity before spending on marketing. This work became the foundation of the DIY Marketing Plan.",
        image: "/vectors/15.svg",
    },
    {
        id: 3,
        yearTitle: "2019 – 2023 — Scaling the DIY Approach",
        subtitle: "Helping Businesses Grow with Direction",
        description:
            "A small team helped more than 1,800 businesses create clear marketing plans they could execute without guesswork or wasted budgets.",
        image: "/vectors/16.svg",
    },
];

const section2Items = [
    {
        id: 4,
        yearTitle: "Jan 2024 — Value Bridge Analysis",
        subtitle: "A Framework for Sustainable Growth",
        description:
            "Years of learning were formalized into the Value Bridge Analysis, connecting product value, user demand, market reality, and execution.",
        image: "/vectors/17.svg",
    },
    {
        id: 5,
        yearTitle: "May 2024 — Strategy to Execution",
        subtitle: "The Remote Marketing Manager Model",
        description:
            "To solve execution challenges, we introduced dedicated remote marketing managers who work like an internal team member with full ownership and accountability.",
        image: "/vectors/pana.svg",
    },
    {
        id: 6,
        yearTitle: "2025 — Refinement and Maturity",
        subtitle: "Strengthening the System",
        description:
            "We continued refining both the Value Bridge framework and the Remote Marketing Manager service to improve strategy and execution.",
        image: "/vectors/rafiki.svg",
    },
    {
        id: 7,
        yearTitle: "2026 — Productizing the Mission",
        subtitle: "Expanding Globally",
        description:
            "Our product launched to help founders worldwide gain clarity, grow with direction, and avoid wasting time, money, and effort.",
        image: "/vectors/pana-2.svg",
    },
];

function LaptopMockup({ items, activeId }: { items: any[]; activeId: number }) {
    return (
        <div className="relative px-2 pb-4 w-full">
            <div className="bg-[#101011] p-[2.5%] pt-[2.5%] pb-[3.5%] rounded-t-[1.5rem] rounded-b-[4px] border border-gray-800 shadow-2xl relative z-10 w-[96%] mx-auto overflow-hidden">
                <div className="bg-white rounded-[4px] overflow-hidden aspect-[16/10.5] relative shadow-inner">
                    {items.map((item) => (
                        <Image
                            key={item.id}
                            src={item.image}
                            alt={item.subtitle}
                            fill
                            className={`object-cover object-center transition-opacity duration-700 ${activeId === item.id ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        />
                    ))}
                </div>
                <div className="absolute bottom-[0.8%] left-1/2 -translate-x-1/2 text-[7px] text-gray-500 tracking-[0.2em] font-medium opacity-40">BRAINITO</div>
            </div>
            <div className="bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] h-[10px] md:h-[12px] rounded-b-2xl relative z-20 w-[105%] left-[-2.5%] shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-black/10 rounded-b-full"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/5 blur-2xl rounded-full -z-10"></div>
        </div>
    );
}

export function AboutStorySection() {
    const [activeId, setActiveId] = useState(1);
    const allItems = [...section1Items, ...section2Items];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_#faf5ff_0%,_transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#faf5ff_0%,_transparent_50%)] pointer-events-none" />

            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[34px] md:text-5xl font-semibold text-[#101011] tracking-tight mb-5"
                        style={{ lineHeight: 1.25 }}
                    >
                        <span className="text-[#A359D9]">One mistake</span> shaped<br className="hidden md:block" />everything we do today
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[16px] md:text-[17px] text-[#606266] leading-relaxed max-w-[600px] mx-auto opacity-90"
                    >
                        You want to grow your business. You're motivated by impact and purpose.
                        And you want your marketing to make a difference. We want the same thing.
                    </motion.p>
                </div>

                {/* SECTION 1: Items 1-3 */}
                <div className="max-w-[1200px] mx-auto relative pt-12 mb-20 md:mb-32">
                    {/* Timeline Line 1: Items 1-3 */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1.5px] bg-[#f0e8f6] top-0 bottom-0">
                        {/* Top Dot */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#A359D9]/30 ring-4 ring-[#A359D9]/5" />
                        {/* Bottom Arrow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0V12M7 12L2 7M7 12L12 7" stroke="#A359D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-24 md:space-y-0">
                        {section1Items.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <div key={item.id} className="relative md:min-h-[300px] flex flex-col md:block">
                                    {/* Mobile Number Circle */}
                                    <div className="md:hidden flex justify-center mb-8">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium border-2 transition-all duration-300 ${isActive ? "bg-[#A359D9] text-white border-[#A359D9]" : "bg-white text-[#A359D9] border-[#A359D9]/20"}`}>
                                            {item.id}
                                        </div>
                                    </div>

                                    {/* Central Number Circle (Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 z-20">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => setActiveId(item.id)}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-300 shadow-lg ${
                                                isActive 
                                                    ? "bg-[#A359D9] text-white ring-4 ring-[#A359D9]/20" 
                                                    : "bg-white text-gray-400 border border-[#A359D9]/20 hover:border-[#A359D9] hover:text-[#A359D9]"
                                            }`}
                                        >
                                            {item.id}
                                        </motion.button>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                                        {/* Content Side (Right for Section 1) */}
                                        <div className="md:order-2 md:pl-16 order-2">
                                            <motion.div
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                onMouseEnter={() => setActiveId(item.id)}
                                                className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-40"}`}
                                            >
                                                <h3 className="text-xl md:text-2xl font-semibold text-[#A359D9] mb-3">{item.yearTitle}</h3>
                                                <h4 className="text-lg font-medium text-[#101011] mb-3">{item.subtitle}</h4>
                                                <p className="text-[#606266] text-[15px] md:text-[16px] leading-relaxed max-w-[600px] mb-16">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Laptop Mockup Side (Left for Section 1) */}
                                        <div className="md:order-1 md:pr-12 order-1">
                                            {item.id === 1 && (
                                                <div className="hidden md:block absolute -left-10 top-0 w-[420px]">
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -50 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <LaptopMockup items={section1Items} activeId={activeId} />
                                                    </motion.div>
                                                </div>
                                            )}
                                            <div className="md:hidden">
                                                {item.id === 1 && <LaptopMockup items={section1Items} activeId={activeId} />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block h-32" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 2: Items 4-7 */}
                <div className="max-w-[1200px] mx-auto relative pt-12">
                    {/* Timeline Line 2: Items 4-7 */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1.5px] bg-[#f0e8f6] top-0 bottom-0">
                        {/* Top Dot */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#A359D9]/30 ring-4 ring-[#A359D9]/5" />
                        {/* Bottom Arrow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0V12M7 12L2 7M7 12L12 7" stroke="#A359D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-24 md:space-y-0">
                        {section2Items.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <div key={item.id} className="relative md:min-h-[300px] flex flex-col md:block">
                                    {/* Mobile Number Circle */}
                                    <div className="md:hidden flex justify-center mb-8">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium border-2 transition-all duration-300 ${isActive ? "bg-[#A359D9] text-white border-[#A359D9]" : "bg-white text-[#A359D9] border-[#A359D9]/20"}`}>
                                            {item.id}
                                        </div>
                                    </div>

                                    {/* Central Number Circle (Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 z-20">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => setActiveId(item.id)}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-300 shadow-lg ${
                                                isActive 
                                                    ? "bg-[#A359D9] text-white ring-4 ring-[#A359D9]/20" 
                                                    : "bg-white text-gray-400 border border-[#A359D9]/20 hover:border-[#A359D9] hover:text-[#A359D9]"
                                            }`}
                                        >
                                            {item.id}
                                        </motion.button>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                                        {/* Content Side (Left for Section 2) */}
                                        <div className="md:order-1 md:text-right md:pr-16 order-2">
                                            <motion.div
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                onMouseEnter={() => setActiveId(item.id)}
                                                className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-40"}`}
                                            >
                                                <h3 className="text-xl md:text-2xl font-semibold text-[#A359D9] mb-3">{item.yearTitle}</h3>
                                                <h4 className="text-lg font-medium text-[#101011] mb-3">{item.subtitle}</h4>
                                                <p className="text-[#606266] text-[15px] md:text-[16px] leading-relaxed max-w-[600px] md:ml-auto mb-16">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Laptop Mockup Side (Right for Section 2) */}
                                        <div className="md:order-2 md:pl-12 order-1">
                                            {item.id === 5 && (
                                                <div className="hidden md:block absolute -right-10 top-0 w-[420px]">
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 50 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <LaptopMockup items={section2Items} activeId={activeId} />
                                                    </motion.div>
                                                </div>
                                            )}
                                            <div className="md:hidden">
                                                {item.id === 5 && <LaptopMockup items={section2Items} activeId={activeId} />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block h-32" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}