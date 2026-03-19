import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import c2img1 from "@/assets/carousel2/1.jpg";
import c2img2 from "@/assets/carousel2/2.jpg";
import c2img3 from "@/assets/carousel2/3.jpg";
import c2img4 from "@/assets/carousel2/4.jpg";
import c2img5 from "@/assets/carousel2/5.jpg";

import c3img1 from "@/assets/carousel3/1.jpg";
import c3img2 from "@/assets/carousel3/2.jpg";
import c3img3 from "@/assets/carousel3/3.jpg";
import c3img4 from "@/assets/carousel3/4.jpg";

type CarouselData = {
    id: string;
    title: string;
    description: React.ReactNode;
    link: string;
    images: { id: number; src: string; label: string }[];
};

const carouselsData: CarouselData[] = [
    {
        id: "post1",
        title: "10 Years of Climate Resilience",
        description: "Check out CRC's carousel post celebrating a decade of climate resilience leadership, impact, and community-driven solutions.",
        link: "https://www.linkedin.com/posts/climateresilienceconsulting_climateresilience-biodiversity-resilientmidwest-activity-7422311229047644162-B_jJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-6aRUBvR_6xR3RqtraHaMj8t5AWZ9Gnuo",
        images: [
            { id: 1, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce524b7176e252ed2f.jpg", label: "Slide 1" },
            { id: 2, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce753f157022d71fbd.jpg", label: "Slide 2" },
            { id: 3, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce8844f55fe9979bc8.jpg", label: "Slide 3" },
            { id: 4, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce9a0c182f7678310f.png", label: "Slide 4" },
            { id: 5, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce524b717eee52ed31.jpg", label: "Slide 5" },
            { id: 6, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2cec4df65de2b93c2ba.jpg", label: "Slide 6" },
            { id: 7, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce2f17be64b600b100.jpg", label: "Slide 7" },
            { id: 8, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce81e3ee00dc2c491f.jpg", label: "Slide 8" },
            { id: 9, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2cedc26f5c349343b85.jpg", label: "Slide 9" },
            { id: 10, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce2f17bef37900b101.jpg", label: "Slide 10" },
            { id: 11, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce81e3ee31c62c4920.jpg", label: "Slide 11" },
        ]
    },
    {
        id: "post2",
        title: "A Decade of Partnership",
        description: "To our nonprofit partners: This work belongs to all of us. Thank you for choosing collaboration.",
        link: "https://www.linkedin.com/posts/climateresilienceconsulting_crc10years-climateresilience-nonprofitcollaboration-activity-7429917633413599232-7fs3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-6aRUBvR_6xR3RqtraHaMj8t5AWZ9Gnuo",
        images: [
            { id: 1, src: c2img1, label: "Slide 1" },
            { id: 2, src: c2img2, label: "Slide 2" },
            { id: 3, src: c2img3, label: "Slide 3" },
            { id: 4, src: c2img4, label: "Slide 4" },
            { id: 5, src: c2img5, label: "Slide 5" },
        ]
    },
    {
        id: "post3",
        title: "From Experience to Tools",
        description: (
            <>
                10 years of this expertise. Built into a platform serving every community.
            </>
        ),
        link: "https://www.linkedin.com/posts/climateresilienceconsulting_climateresilience-resilienceaction-localgovernment-activity-7435353440878280704-igBa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-6aRUBvR_6xR3RqtraHaMj8t5AWZ9Gnuo",
        images: [
            { id: 1, src: c3img1, label: "Slide 1" },
            { id: 2, src: c3img2, label: "Slide 2" },
            { id: 3, src: c3img3, label: "Slide 3" },
            { id: 4, src: c3img4, label: "Slide 4" },
        ]
    }
];

const CarouselComponent = ({ data }: { data: CarouselData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % data.images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-advance every 5 seconds

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-lg md:text-xl font-semibold text-center text-foreground px-2">
                {data.title}
            </h3>

            <div className="relative aspect-[4/5] md:aspect-[4/4] lg:aspect-[4/5] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-crc-lg border border-border bg-white group">
                {/* Images */}
                {data.images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-2 bg-white ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <img
                            src={image.src}
                            alt={image.label}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 flex-wrap justify-center px-4 max-w-full">
                    {data.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-crc-gold shadow-sm" : "w-2 bg-gray-400/80 hover:bg-gray-600"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <p className="text-muted-foreground text-center text-sm md:text-base px-2 min-h-[60px]">
                {data.description}
            </p>

            <div className="flex justify-center mt-auto pb-4">
                <Button
                    size="default"
                    className="bg-crc-blue hover:bg-crc-blue-dark text-white group"
                    asChild
                >
                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                        View Carousel Post
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </Button>
            </div>
        </div>
    );
};

const CarouselSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-16 lg:py-20 bg-muted relative overflow-hidden border-b border-border/50">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-crc-gold" />
                        <span className="text-crc-gold font-medium uppercase tracking-widest text-sm">
                            LinkedIn Featured Posts
                        </span>
                        <div className="h-px w-12 bg-crc-gold" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        <span className="text-crc-blue">10 Years</span> of Thought Leadership
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                        Check out CRC's featured carousel posts celebrating a decade of climate resilience leadership, impact, and community-driven solutions.
                    </p>
                </motion.div>

                {/* Carousels Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`grid grid-cols-1 md:grid-cols-2 ${carouselsData.length >= 3 ? 'lg:grid-cols-3' : ''} gap-8 md:gap-12 w-full max-w-6xl mx-auto justify-center`}
                >
                    {carouselsData.map((data) => (
                        <CarouselComponent key={data.id} data={data} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CarouselSection;
