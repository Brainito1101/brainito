import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CaseStudyDetail } from "@/components/sections/case-study-detail";
import { getCaseStudyBySlug, caseStudies } from "@/lib/case-studies-data";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);
    if (!caseStudy) return { title: "Case Study Not Found" };

    return {
        title: `${caseStudy.category} | Brainito Case Study`,
        description: caseStudy.subtitle,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main>
                <CaseStudyDetail caseStudy={caseStudy} />
            </main>
            <Footer />
        </>
    );
}
