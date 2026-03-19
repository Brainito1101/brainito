import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen, FileText, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  links: { label: string; url: string; type: "primary" | "secondary" }[];
  index: number;
  isInView: boolean;
}

const ResourceCard = ({ icon, title, description, links, index, isInView }: ResourceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-card rounded-2xl p-6 shadow-crc-sm hover:shadow-crc-md transition-all border border-border/50 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-crc-blue/10 flex items-center justify-center flex-shrink-0">
          <div className="text-crc-blue">{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {links.map(link => (
          <Button
            key={link.label}
            variant={link.type === "primary" ? "default" : "outline"}
            size="sm"
            className={link.type === "primary" ? "bg-crc-blue hover:bg-crc-blue-dark" : "border-crc-blue text-crc-blue hover:bg-crc-blue hover:text-primary-foreground"}
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
              <ExternalLink className="ml-1 w-3 h-3" />
            </a>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

const resources = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "EPA Equitable Resilience Builder (ERB)",
    description: "Co-developed tool using human-centered design that engages community members in resilience planning to generate solutions that advance equity.",
    links: [
      { label: "Learn More About ERB", url: "https://www.epa.gov/emergency-response-research/equitable-resilience-builder-erb", type: "primary" as const },
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Resilience Hub",
    description: "Distilled insights from 20+ trailblazing hub projects offering practical guidance on functions, design, funding and community leadership.",
    links: [
      { label: "Download the Compendium", url: "https://www.climateresilienceconsulting.com/s/Resilience-Hub-Plan-Design-Compendium-CRC-ONE-RBD-FR.pdf", type: "primary" as const },
      { label: "Learn More", url: "https://www.climateresilienceconsulting.com/compendium", type: "secondary" as const },
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Philanthropic Resilience Leadership",
    description: "\"Toward a New Era in Climate Resilience Building\" guiding investment in climate resilience.",
    links: [
      { label: "Explore the Report", url: "https://www.climateresilienceconsulting.com/climate-adaptation-field-status", type: "primary" as const },
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Climate and Land Use Planning: A Policy Guide",
    description: "Partnership with U.S. Climate Alliance and Smart Growth America showing how land use policies can reduce emissions, improve ecosystem resilience, and advance equity.",
    links: [
      { label: "Download Policy Guide", url: "https://usclimatealliance.org/wp-content/uploads/2025/02/USCA_ClimateandLandUsePlanningPolicyGuide_20250211-LowRes.pdf", type: "primary" as const },
    ],
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "The Resilience Advantage: A Small Business Guide",
    description: "The Resilience Advantage: A Small Business Guide to Preparing for Floods, Heatwaves, Wildfires, and Other Climate Disasters.",
    links: [
      { label: "Order Here", url: "https://amazon.com/dp/B0FNBVSL8W", type: "primary" as const },
      { label: "Free Chapter 1 Excerpt", url: "https://www.climateresilienceconsulting.com/s/The-Resilience-Advantage-Chapter-1-Excerpt.pdf", type: "secondary" as const },
      { label: "Learn More", url: "https://www.climateresilienceconsulting.com/small-business-resilience-advantage", type: "secondary" as const },
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Mobilizing Private Capital for Climate Adaptation Infrastructure",
    description: "A report for the Canadian Climate Institute. Private capital is needed to invest in climate adaptation infrastructure as extreme weather events become more acute.",
    links: [
      { label: "Download the Report", url: "https://climateinstitute.ca/wp-content/uploads/2023/05/mobilizing-private-capital-climate-adaptation-infrastructure.pdf", type: "primary" as const },
    ],
  },
];

const ResourcesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted relative overflow-hidden lg:py-[20px]">
      <div className="container mx-auto px-4">
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
              Signature CRC Resources
            </span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tools for <span className="text-crc-blue">Action</span>
          </h2>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard key={resource.title} {...resource} index={index} isInView={isInView} />
          ))}
        </div>

        {/* See More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.climateresilienceconsulting.com/thought-leadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-crc-blue hover:text-crc-blue-dark font-medium underline underline-offset-4 transition-colors"
          >
            See more here →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
