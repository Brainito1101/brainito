"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/section";

export function BrandsSection() {
    return (
        <section className="pt-24 pb-12 bg-white">
            <Container>
                {/* ── Logos Marquee ──────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        width: "100%",
                        overflow: "hidden",
                        position: "relative",
                        // Smooth fade on left and right edges
                        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                    }}
                >
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 35, // Adjust speed as needed
                        }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "max-content",
                        }}
                    >
                        {[0, 1].map((copyIdx) => (
                            <div
                                key={copyIdx}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "70px",
                                    paddingRight: "70px", // Uniform gap into the repetition
                                }}
                            >
                                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                    <img
                                        key={num}
                                        src={`/logos/logo${num}.svg`}
                                        alt={`Partner logo ${num}`}
                                        style={{
                                            height: "36px",
                                            width: "auto",
                                            objectFit: "contain",
                                            opacity: 0.9,
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
