import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, Target, Users, DollarSign, Quote, CheckCircle2, LayoutDashboard, Share2 } from "lucide-react";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "@/lib/case-studies-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) return {};

    return {
        title: `${study.title} | Brainito Case Studies`,
        description: study.subtitle,
    };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
    const study = getCaseStudyBySlug(params.slug);

    if (!study) {
        notFound();
    }

    const relatedStudies = getRelatedCaseStudies(study.slug);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="pt-40 pb-20 bg-gradient-to-b from-[#F9F5FF] to-white relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CB84FF]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#71389A]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                        <Link 
                            href="/case-studies" 
                            className="inline-flex items-center gap-2 text-[#606266] hover:text-[#71389A] mb-10 transition-colors font-medium group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Case Studies
                        </Link>

                        <div className="max-w-4xl">
                            <span className="inline-block bg-[#F9F5FF] text-[#71389A] text-[14px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-[#F2E6FF]">
                                {study.category}
                            </span>

                            <h1 className="text-[36px] md:text-[56px] font-bold text-[#101011] mb-8 leading-[1.1] tracking-tight">
                                {study.title}
                            </h1>

                            <p className="text-[20px] text-[#606266] mb-10 leading-relaxed font-medium">
                                {study.subtitle}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {study.metrics.map((metric, idx) => (
                                    <div 
                                        key={idx}
                                        className="bg-white/80 backdrop-blur-sm border border-[#F2E6FF] text-[#71389A] font-bold px-6 py-3 rounded-2xl shadow-sm flex items-center gap-3 animate-fade-in"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#CB84FF]" />
                                        {metric}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image Section */}
                <section className="bg-white">
                    <div className="max-w-[1240px] mx-auto px-6">
                        <div className="max-w-5xl rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-[#71389A] to-[#CB84FF] relative group">
                            <img
                                src={study.image}
                                alt={study.title}
                                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="py-24 bg-white font-poppins">
                    <div className="max-w-[1240px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                            {/* Left Content Column */}
                            <div className="lg:col-span-8 space-y-20">
                                {/* About Section */}
                                <div className="animate-reveal">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F9F5FF] border border-[#F2E6FF] text-[#71389A] mb-6">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-[32px] font-bold text-[#101011] mb-6 tracking-tight">About the Business</h2>
                                    <p className="text-[#606266] text-[17px] leading-relaxed whitespace-pre-line font-medium">
                                        {study.aboutBusiness}
                                    </p>
                                </div>

                                {/* Challenge Section */}
                                <div className="animate-reveal">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFF1F2] border border-[#FFE4E6] text-red-600 mb-6">
                                        <Target className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-[32px] font-bold text-[#101011] mb-6 tracking-tight">The Challenge</h2>
                                    <p className="text-[#606266] text-[17px] leading-relaxed whitespace-pre-line font-medium">
                                        {study.theChallenge}
                                    </p>
                                </div>

                                {/* Approach Section */}
                                <div className="animate-reveal">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F0F9FF] border border-[#E0F2FE] text-blue-600 mb-6">
                                        <TrendingUp className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-[32px] font-bold text-[#101011] mb-6 tracking-tight">Our Strategic Approach</h2>
                                    <p className="text-[#606266] text-[17px] leading-relaxed mb-8 font-medium">
                                        {study.ourApproach.intro}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {study.ourApproach.bullets.map((bullet, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-[#F9F5FF] border border-[#F2E6FF] hover:border-[#CB84FF]/40 transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-[#71389A] mt-1 flex-shrink-0" />
                                                <span className="text-[#101011] font-semibold text-[15px]">{bullet}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Solution Section */}
                                <div className="animate-reveal">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-green-600 mb-6">
                                        <LayoutDashboard className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-[32px] font-bold text-[#101011] mb-6 tracking-tight">The Solution</h2>
                                    <p className="text-[#606266] text-[17px] leading-relaxed whitespace-pre-line font-medium italic border-l-4 border-[#CB84FF] pl-8 py-2">
                                        {study.theSolution}
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar Column */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-32 space-y-8">
                                    {/* Quick Facts Card */}
                                    <div className="bg-white rounded-[32px] p-8 border-2 border-[#F2E6FF] shadow-sm">
                                        <h3 className="text-[18px] font-bold text-[#101011] mb-8 border-b border-[#F2E6FF] pb-4">Project Overview</h3>
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[#606266] font-medium">Duration</span>
                                                <span className="text-[#101011] font-bold uppercase text-xs tracking-wider bg-[#F9F5FF] px-3 py-1 rounded-full">{study.duration}</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[#606266] font-medium">Industry</span>
                                                <span className="text-[#101011] font-bold">{study.industry}</span>
                                            </div>
                                            <div className="flex flex-col gap-3 pt-2">
                                                <span className="text-[#606266] font-medium">Services Provided</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {study.services.map((service, idx) => (
                                                        <span key={idx} className="text-[11px] font-bold uppercase tracking-widest bg-white border border-[#F2E6FF] px-3 py-1 rounded-md text-[#71389A]">
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Card */}
                                    <div className="relative group rounded-[32px] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#71389A] to-[#CB84FF] transform transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform">
                                            <Share2 size={100} className="text-white" />
                                        </div>
                                        <div className="relative p-10 text-white z-10">
                                            <h3 className="text-[24px] font-bold mb-4 leading-tight">Want Similar Results?</h3>
                                            <p className="text-white/80 mb-8 font-medium">
                                                Let us create a data-driven marketing strategy for your business.
                                            </p>
                                            <Link 
                                                href="/"
                                                className="inline-flex items-center justify-center w-full h-[56px] rounded-full bg-white text-[#71389A] font-bold text-[16px] hover:shadow-xl transition-all"
                                            >
                                                Analyze Website
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Visualizer Section */}
                <section className="py-24 bg-[#F9F5FF] border-y border-[#F2E6FF]">
                    <div className="max-w-[1240px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-[36px] md:text-[48px] font-bold text-[#101011] mb-4 tracking-tight">The Impact</h2>
                            <p className="text-[#606266] text-[18px]">Measuring success through real-world performance metrics.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {study.results.map((result, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white rounded-[40px] p-10 text-center border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 ${
                                        result.highlight 
                                            ? "border-[#CB84FF] shadow-xl md:scale-105 z-10" 
                                            : "border-[#F2E6FF] hover:border-[#CB84FF]/40"
                                    }`}
                                >
                                    <div className="w-16 h-16 rounded-3xl bg-[#F9F5FF] border border-[#F2E6FF] flex items-center justify-center mx-auto mb-8">
                                        {result.icon === 'chart' || result.icon === 'revenue' ? <TrendingUp className="w-8 h-8 text-[#71389A]" /> : 
                                         result.icon === 'roas' || result.icon === 'cac' ? <DollarSign className="w-8 h-8 text-[#71389A]" /> :
                                         <Target className="w-8 h-8 text-[#71389A]" />}
                                    </div>
                                    <p className="text-[48px] font-black text-[#101011] mb-2 tracking-tighter leading-none">{result.metric}</p>
                                    <p className="text-[14px] font-bold text-[#71389A] uppercase tracking-[0.2em] mb-4">{result.label}</p>
                                    <p className="text-[14px] text-[#606266] leading-relaxed font-medium">{result.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                {study.testimonial && (
                    <section className="py-24 bg-white relative overflow-hidden">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
                            <Quote size={400} />
                        </div>
                        <div className="max-w-[900px] mx-auto px-6">
                            <div className="text-center relative z-10">
                                <div className="flex justify-center mb-12">
                                    <img 
                                        src={study.testimonial.avatar} 
                                        alt={study.testimonial.name}
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-2xl object-cover"
                                    />
                                </div>
                                <p className="text-[24px] md:text-[32px] font-bold text-[#101011] leading-tight mb-12 italic tracking-tight">
                                    "{study.testimonial.quote}"
                                </p>
                                <div className="space-y-1">
                                    <p className="font-bold text-[18px] text-[#101011]">{study.testimonial.name}</p>
                                    <p className="text-[#606266] font-medium tracking-wide uppercase text-xs">
                                        {study.testimonial.role}, {study.testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* More Success Stories */}
                <section className="py-24 bg-white border-t border-[#F2E6FF]">
                    <div className="max-w-[1240px] mx-auto px-6 font-poppins">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-[32px] font-bold text-[#101011] tracking-tight">More Success Stories</h2>
                            <Link href="/case-studies" className="text-[#71389A] font-bold flex items-center gap-2 hover:underline">
                                View All <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedStudies.map((rel, idx) => (
                                <Link
                                    key={rel.slug}
                                    href={`/case-studies/${rel.slug}`}
                                    className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-[#F2E6FF] hover:border-[#CB84FF] transition-all duration-500 shadow-sm"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={rel.image}
                                            alt={rel.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#71389A] mb-3 block">
                                            {rel.category}
                                        </span>
                                        <h3 className="text-[20px] font-bold text-[#101011] mb-6 group-hover:text-[#71389A] transition-colors line-clamp-2 leading-snug">
                                            {rel.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {rel.metrics.slice(0, 2).map((m, i) => (
                                                <span key={i} className="text-[11px] font-bold bg-[#F9F5FF] text-[#71389A] px-3 py-1 rounded-full border border-[#F2E6FF]">
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 bg-[#101011] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
                    <div className="max-w-[1240px] mx-auto px-6 text-center relative z-10">
                        <h2 className="text-[32px] md:text-[56px] font-bold text-white mb-6 tracking-tight leading-tight">
                            Build Your Own<br />Success Story
                        </h2>
                        <p className="text-[#a0a0a0] text-[18px] mb-12 max-w-2xl mx-auto font-medium">
                            Join hundreds of businesses that have transformed their marketing with Brainito's AI-powered strategy and dedicated execution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link 
                                href="/"
                                className="inline-flex items-center justify-center px-12 h-[64px] rounded-full bg-gradient-to-r from-[#71389A] to-[#ba76ec] text-white font-bold text-[18px] hover:brightness-110 transition-all shadow-2xl shadow-purple-500/20 group"
                            >
                                Get Started for FREE <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
