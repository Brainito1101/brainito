"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedText } from "@/components/ui/animated-button";
import { AuthModal } from "@/components/sections/auth-modal";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-[0_1px_12px_rgba(113,56,154,0.08)]"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
                <nav className="flex items-center justify-between h-16 md:h-[72px]">

                    {/* ── Logo ─────────────────────────────────────────── */}
                    <Link href="/" className="flex items-center select-none">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/brainito-logo.svg"
                            alt="Brainito"
                            style={{ height: "36px", width: "auto" }}
                        />
                    </Link>

                    {/* ── Desktop Buttons ───────────────────────────────── */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Login — purple outline pill */}
                        <button
                            onClick={() => setShowAuthModal(true)}
                            className="group"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "38px",
                                paddingLeft: "24px",
                                paddingRight: "24px",
                                borderRadius: "9999px",
                                border: "2px solid #71389A",
                                background: "transparent",
                                color: "#606266",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontFamily: "var(--font-poppins), ui-sans-serif",
                                textDecoration: "none",
                                transition: "all 0.2s ease",
                                whiteSpace: "nowrap",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#FAF5FF";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <AnimatedText>Login</AnimatedText>
                        </button>

                        {/* Hire Marketer — gradient purple pill with glassy sheen */}
                        <Link
                            href="/hire-marketer"
                            className="group"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "38px",
                                paddingLeft: "24px",
                                paddingRight: "24px",
                                borderRadius: "9999px",
                                border: "2px solid #71389A",
                                background: "linear-gradient(to top right, #B265E6 0%, #71389A 100%)",
                                color: "#ffffff",
                                fontSize: "14px",
                                fontWeight: 300,
                                fontFamily: "var(--font-poppins), ui-sans-serif",
                                textDecoration: "none",
                                boxShadow: "0 4px 14px rgba(113, 56, 154, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                                transition: "all 0.2s ease",
                                whiteSpace: "nowrap",
                                position: "relative",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 6px 22px rgba(113, 56, 154, 0.50), inset 0 1px 0 rgba(255,255,255,0.22)";
                                e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 16px rgba(113, 56, 154, 0.38), inset 0 1px 0 rgba(255,255,255,0.22)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <AnimatedText>Hire Marketer</AnimatedText>
                        </Link>
                    </div>

                    {/* ── Mobile Toggle ─────────────────────────────────── */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#606266] hover:text-[#71389A] hover:bg-[#FAF5FF] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            {/* ── Mobile Menu ──────────────────────────────────────── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white border-t border-[#e9e0f5] shadow-lg"
                    >
                        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2">
                            <button
                                onClick={() => {
                                    setMobileOpen(false);
                                    setShowAuthModal(true);
                                }}
                                className="group"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "40px",
                                    borderRadius: "9999px",
                                    border: "2px solid #71389A",
                                    background: "transparent",
                                    color: "#606266",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    fontFamily: "var(--font-poppins), ui-sans-serif",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                }}
                            >
                                <AnimatedText>Login</AnimatedText>
                            </button>
                            <Link
                                href="/hire-marketer"
                                className="group"
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "40px",
                                    borderRadius: "9999px",
                                    background: "linear-gradient(to top right, #B265E6 0%, #71389A 100%)",
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    fontFamily: "var(--font-poppins), ui-sans-serif",
                                    textDecoration: "none",
                                    boxShadow: "0 4px 14px rgba(113, 56, 154, 0.3)",
                                }}
                            >
                                <AnimatedText>Hire Marketer</AnimatedText>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </header>
    );
}
