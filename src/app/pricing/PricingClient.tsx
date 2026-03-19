"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://app.brainito.com/api";

interface Plan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    stripe_price_id?: string;
    variant: "outline" | "gradient" | "accent";
    popular: boolean;
}

const faqs = [
    {
        question: "How is billing handled?",
        answer: "Billing is done monthly on a subscription basis. All paid plans are recurring subscriptions.",
    },
    {
        question: "When will I be charged?",
        answer: "You are charged at the start of each billing cycle for all paid plans.",
    },
    {
        question: "Are there any long-term contracts?",
        answer: "No, subscription plans are month-to-month and can be canceled anytime.",
    },
    {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, plans can be changed at any time. Changes take effect at the start of the next billing cycle.",
    },
    {
        question: "Is there a setup fee?",
        answer: "No separate setup fee for any plan.",
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept all major credit cards and debit cards through Stripe.",
    },
    {
        question: "Do you offer refunds?",
        answer: "Refunds are handled on a case-by-case basis. Please contact support for assistance.",
    },
];

export function PricingClient() {
    const { user } = useAuth();
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [processingPlan, setProcessingPlan] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch(`${API_URL}/payments/plans/`);
                const data = await response.json();

                if (data.success && data.plans) {
                    const mappedPlans: Plan[] = [
                        {
                            name: "Free AI Plan",
                            price: "$0",
                            period: "",
                            description: "Perfect for exploring Brainito",
                            features: [
                                "1 Free AI Marketing Report",
                                "Basic strategy insights",
                                "AI-powered recommendations",
                                "Limited access to features",
                            ],
                            cta: "Start Free",
                            variant: "outline",
                            popular: false,
                        },
                        ...data.plans.map((plan: any) => {
                            const name = plan.name || "";
                            const isDIY = name.includes("DIY");
                            const isMarketer = name.includes("Marketer");

                            return {
                                name: plan.name,
                                price: `$${plan.price_monthly}`,
                                period: "/mo",
                                description: isDIY
                                    ? "For teams ready to execute"
                                    : isMarketer
                                        ? "Done-for-you marketing"
                                        : "Custom solution",
                                features: isDIY
                                    ? [
                                        "1 AI Marketing Report",
                                        "Full marketing strategy",
                                        "Competitor analysis",
                                        "Budget ROI analysis",
                                        "Execution roadmap",
                                        "30-day action plan",
                                    ]
                                    : isMarketer
                                        ? [
                                            "Unlimited AI Reports",
                                            "Dedicated marketing manager",
                                            "Full execution & management",
                                            "Weekly reporting & insights",
                                            "Strategy optimization",
                                            "Priority support",
                                        ]
                                        : [
                                            "Custom features",
                                            "Dedicated support",
                                        ],
                                cta: "Subscribe Now",
                                stripe_price_id: plan.stripe_price_id,
                                variant: isMarketer ? "accent" : "gradient",
                                popular: isMarketer,
                            };
                        }),
                        {
                            name: "Hire a Team",
                            price: "Custom",
                            period: "",
                            description: "Enterprise marketing team",
                            features: [
                                "Full marketing team",
                                "Multiple specialists",
                                "Custom strategy & execution",
                                "Dedicated account manager",
                                "Priority support",
                                "Custom integrations",
                            ],
                            cta: "Contact Sales",
                            variant: "outline",
                            popular: false,
                        },
                    ];

                    setPlans(mappedPlans);
                }
            } catch (error) {
                console.error("Error fetching plans:", error);
                toast.error("Failed to load pricing plans. Please refresh the page.");
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    const handlePlanClick = async (plan: Plan) => {
        if (plan.name === "Free AI Plan") {
            if (user) {
                window.location.href = `${process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.brainito.com"}/dashboard`;
            } else {
                window.location.href = "/login";
            }
            return;
        }

        if (plan.name === "Hire a Team") {
            window.location.href = "/contact";
            return;
        }

        if (!user) {
            window.location.href = "/login";
            return;
        }

        if (plan.stripe_price_id) {
            setProcessingPlan(plan.name);
            try {
                const accessToken = typeof window !== 'undefined' ? localStorage.getItem("access_token") : null;
                const response = await fetch(`${API_URL}/payments/create-checkout-session/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify({
                        price_id: plan.stripe_price_id,
                    }),
                });

                const data = await response.json();

                if (data.checkout_url) {
                    window.location.href = data.checkout_url;
                } else {
                    throw new Error(data.error || "Failed to create checkout session");
                }
            } catch (error: any) {
                console.error("Checkout error:", error);
                toast.error(error.message || "Failed to start checkout. Please try again.");
            } finally {
                setProcessingPlan(null);
            }
        }
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-b from-[#F9F5FF] to-white">
                <div className="max-w-[1240px] mx-auto px-6 text-center">
                    <h1 className="text-[40px] md:text-[64px] font-bold text-[#101011] mb-6 tracking-tight leading-none">
                        Transparent Pricing
                    </h1>
                    <p className="text-[18px] text-[#606266] max-w-2xl mx-auto">
                        Choose the perfect plan for your marketing needs. Start free or scale with our premium options.
                    </p>
                </div>
            </section>

            {/* Plans Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-10 h-10 animate-spin text-[#71389A] mb-4" />
                            <p className="text-[#606266] font-medium">Loading premium plans...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative bg-white rounded-[32px] p-8 border-2 transition-all duration-500 flex flex-col ${
                                        plan.popular
                                            ? "border-[#CB84FF] shadow-[0_20px_50px_rgba(203,132,255,0.15)] scale-[1.05] z-10"
                                            : "border-[#F2E6FF] hover:border-[#CB84FF]/40"
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-[#71389A] to-[#CB84FF] rounded-full shadow-lg">
                                            <span className="text-[11px] font-bold text-white uppercase tracking-widest">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-[20px] font-bold text-[#101011] mb-2">
                                            {plan.name}
                                        </h3>
                                        <p className="text-[#606266] text-[14px] leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    <div className="mb-10 flex items-baseline gap-1">
                                        <span className="text-[40px] font-bold text-[#101011] tracking-tight">
                                            {plan.price}
                                        </span>
                                        <span className="text-[#606266] font-medium">{plan.period}</span>
                                    </div>

                                    <ul className="space-y-4 mb-10 flex-1">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#F9F5FF] border border-[#F2E6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-[#71389A]" />
                                                </div>
                                                <span className="text-[#101011] text-[14px] font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => handlePlanClick(plan)}
                                        disabled={processingPlan === plan.name}
                                        className={`w-full h-14 rounded-full font-bold text-[16px] transition-all duration-300 flex items-center justify-center gap-2 ${
                                            plan.variant === "accent"
                                                ? "bg-[#101011] text-white hover:bg-black shadow-lg"
                                                : plan.variant === "gradient"
                                                ? "bg-gradient-to-r from-[#71389A] to-[#CB84FF] text-white hover:brightness-110 shadow-lg shadow-purple-500/10"
                                                : "border-2 border-[#101011] text-[#101011] hover:bg-[#101011] hover:text-white"
                                        }`}
                                    >
                                        {processingPlan === plan.name ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                {plan.cta}
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#F9F5FF] border-y border-[#F2E6FF]">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#101011] mb-5 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-[16px] text-[#606266]">
                            Everything you need to know about our pricing and plans.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white rounded-2xl border border-[#F2E6FF] px-7 data-[state=open]:border-[#CB84FF] data-[state=open]:shadow-lg transition-all"
                            >
                                <AccordionTrigger className="text-[#101011] font-bold text-[16px] hover:text-[#71389A] text-left py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#606266] text-[15px] leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    
                    <div className="mt-12 text-center">
                        <Link 
                            href="/help" 
                            className="inline-flex items-center gap-2 text-[#71389A] font-bold text-[16px] hover:underline"
                        >
                            View all FAQs <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#101011] text-white">
                <div className="max-w-[1240px] mx-auto px-6 text-center">
                    <h2 className="text-[32px] md:text-[48px] font-bold mb-6 tracking-tight">
                        Ready to Transform Your Marketing?
                    </h2>
                    <p className="text-[#a0a0a0] text-[18px] mb-10 max-w-2xl mx-auto">
                        Join thousands of businesses already growing with Brainito. Start free today and see the difference AI-powered marketing can make.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
                        <Link 
                            href="/"
                            className="inline-flex items-center justify-center px-10 h-[64px] rounded-full bg-gradient-to-r from-[#71389A] to-[#ba76ec] text-white font-bold text-[18px] hover:brightness-110 transition-all shadow-xl shadow-purple-500/20"
                        >
                            Get Started for FREE
                        </Link>
                        <Link 
                            href="/contact"
                            className="inline-flex items-center justify-center px-10 h-[64px] rounded-full border-2 border-white/20 text-white font-bold text-[18px] hover:bg-white/10 transition-all"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
