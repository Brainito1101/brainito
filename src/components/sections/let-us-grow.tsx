"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/section";
import { FileText, ArrowUpRight } from "lucide-react";
import { CustomSelect } from "@/components/ui/custom-select";
import { ActionButton } from "@/components/ui/action-button";

const budgetOptions = [
    { label: "Under $5,000", value: "budget-1" },
    { label: "Under $5,000", value: "budget-2" },
    { label: "Under $5,000", value: "budget-3" },
    { label: "Under $5,000", value: "budget-4" },
    { label: "Under $5,000", value: "budget-5" },
];

const challengeOptions = [
    { label: "Branding & Awareness", value: "challenge-1" },
    { label: "Traffic Growth", value: "challenge-2" },
    { label: "Lead Generation", value: "challenge-3" },
    { label: "Under $5,000", value: "challenge-4" },
    { label: "Under $5,000", value: "challenge-5" },
];

export function LetUsGrowSection() {
    const [budget, setBudget] = useState("");
    const [challenge, setChallenge] = useState("");
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAF5FF 50%, #FFFFFF 100%)" }}>
            <Container className="max-w-[800px] relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <h2
                        className="font-medium leading-tight mb-4"
                        style={{
                            fontFamily: "var(--font-poppins), ui-sans-serif",
                            fontSize: "clamp(40px, 5vw, 60px)",
                            color: "#101011",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        <span style={{ color: "#71389A" }}>Let's Grow</span> Your Business
                    </h2>
                    <p
                        className="text-[#606266] max-w-2xl text-center"
                        style={{ fontFamily: "var(--font-poppins), ui-sans-serif", fontSize: "18px" }}
                    >
                        A structured hiring and execution process designed for<br className="hidden md:block" /> speed and accountability
                    </p>
                </motion.div>

                {/* Form Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <div
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "24px",
                            padding: "40px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                            border: "1px solid rgba(0,0,0,0.04)",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#71389A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <FileText size={20} color="#FFFFFF" />
                            </div>
                            <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "20px", fontWeight: 500, color: "#111827" }}>
                                Request a Free Strategy Discussion
                            </h2>
                        </div>

                        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                <div>
                                    <label style={{ display: "block", fontFamily: "var(--font-poppins)", fontSize: "13px", fontWeight: 500, color: "#4B5563", marginBottom: "8px" }}>Full Name*</label>
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            borderRadius: "99px",
                                            backgroundColor: "#F3F4F6",
                                            border: "1px solid transparent",
                                            padding: "0 24px",
                                            fontFamily: "var(--font-poppins)",
                                            fontSize: "14px",
                                            outline: "none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontFamily: "var(--font-poppins)", fontSize: "13px", fontWeight: 500, color: "#4B5563", marginBottom: "8px" }}>Phone*</label>
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            borderRadius: "99px",
                                            backgroundColor: "#F3F4F6",
                                            border: "1px solid transparent",
                                            padding: "0 24px",
                                            fontFamily: "var(--font-poppins)",
                                            fontSize: "14px",
                                            outline: "none",
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                <div>
                                    <label style={{ display: "block", fontFamily: "var(--font-poppins)", fontSize: "13px", fontWeight: 500, color: "#4B5563", marginBottom: "8px" }}>Business Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            borderRadius: "99px",
                                            backgroundColor: "#F3F4F6",
                                            border: "1px solid transparent",
                                            padding: "0 24px",
                                            fontFamily: "var(--font-poppins)",
                                            fontSize: "14px",
                                            outline: "none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontFamily: "var(--font-poppins)", fontSize: "13px", fontWeight: 500, color: "#4B5563", marginBottom: "8px" }}>Website / App URL</label>
                                    <input
                                        type="url"
                                        placeholder="https://yourcompany.com"
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            borderRadius: "99px",
                                            backgroundColor: "#F3F4F6",
                                            border: "1px solid transparent",
                                            padding: "0 24px",
                                            fontFamily: "var(--font-poppins)",
                                            fontSize: "14px",
                                            outline: "none",
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                <div>
                                    <label style={{ display: "block", fontFamily: "var(--font-poppins)", fontSize: "13px", fontWeight: 500, color: "#4B5563", marginBottom: "8px" }}>Monthly Budget</label>
                                    <div style={{ position: "relative" }}>
                                        <CustomSelect
                                            options={budgetOptions}
                                            placeholder="Select budget"
                                            value={budget}
                                            onChange={setBudget}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: "block", fontFamily: "var(--font-poppins)", fontSize: "13px", fontWeight: 500, color: "#4B5563", marginBottom: "8px" }}>#1 Challenge</label>
                                    <div style={{ position: "relative" }}>
                                        <CustomSelect
                                            options={challengeOptions}
                                            placeholder="Select challenge"
                                            value={challenge}
                                            onChange={setChallenge}
                                        />
                                    </div>
                                </div>
                            </div>

                            <ActionButton className="w-full mt-3" type="button" icon={<ArrowUpRight size={18} />}>
                                Request Strategy Discussion
                            </ActionButton>
                        </form>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
