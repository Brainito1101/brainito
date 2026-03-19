import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Building2, Trophy, BookOpen, Handshake, GraduationCap } from "lucide-react";

interface StatItemProps {
  imageSrc: string;
  imagePosition?: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  description: string;
  delay: number;
  isInView: boolean;
}

const useCounter = (end: number, duration: number = 2000, isInView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
};

const StatItem = ({ imageSrc, imagePosition = "object-center", value, numericValue, suffix = "", label, description, delay, isInView }: StatItemProps) => {
  const count = useCounter(numericValue || 0, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative group h-full"
    >
      <div className="bg-card rounded-2xl h-full shadow-crc-sm hover:shadow-crc-lg transition-all duration-300 border border-border/50 group-hover:-translate-y-1 overflow-hidden flex flex-col">
        {/* Horizontal Snippet Image */}
        <div className="w-full h-32 sm:h-36 overflow-hidden relative shrink-0">
          <img
            src={imageSrc}
            alt={label}
            className={`w-full h-full ${imagePosition.includes("object-contain") ? "object-contain bg-slate-50 dark:bg-slate-900" : "object-cover"} ${!imagePosition.includes("object-contain") ? imagePosition : ""} group-hover:scale-105 transition-transform duration-500`}
          />
          {/* Light Overlay to help abstract them or make them blend well */}
          <div className="absolute inset-0 bg-crc-blue/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex-1 flex flex-col relative">
          <div className="mb-3">
            <span className="text-4xl md:text-5xl font-bold text-foreground stat-counter">
              {numericValue ? count : value}
            </span>
            <span className="text-4xl md:text-5xl font-bold text-crc-gold">{suffix}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{label}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  {
    imageSrc: "/images/image-5.jpg",
    value: "300+", numericValue: 300, suffix: "+",
    label: "Clients",
    description: "Served public, private, nonprofit and academic leaders with strategies and implementation support.",
  },
  {
    imageSrc: "/images/image-7.jpg",
    value: "20+", numericValue: 20, suffix: "+",
    label: "Resilience Hubs",
    description: "Co-designed with community-based organizations nationwide, creating community anchors.",
  },
  {
    imageSrc: "/images/leadership-25.jpg",
    imagePosition: "object-contain",
    value: "25+", numericValue: 25, suffix: "+",
    label: "Years of Leadership",
    description: "Experience by our founder, Joyce Coffee, in leading resilience strategy across every major sector.",
  },
  {
    imageSrc: "/images/image-4.jpg",
    imagePosition: "object-top",
    value: "20+", numericValue: 20, suffix: "+",
    label: "Board Leadership",
    description: "Appointed to international and national nonprofit boards and initiatives focused on resilience and social equity.",
  },
  {
    imageSrc: "/images/image-1.png",
    value: "24+", numericValue: 24, suffix: "+",
    label: "Publications & Tools",
    description: "Authored resilience-related reports, including landmark guidance for philanthropy, government, and practitioners.",
  },
  {
    imageSrc: "/images/image-3.png",
    value: "25+", numericValue: 25, suffix: "+",
    label: "Partner Organizations",
    description: "Created partnerships with NGOs and local and small firms to best serve communities.",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-30" />
      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-crc-gold" />
            <span className="text-crc-gold font-medium uppercase tracking-widest text-sm">By the Numbers</span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Decade of <span className="text-crc-blue">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ten years of trailblazing climate resilience solutions, measured in communities empowered and lasting change created.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={0.1 + index * 0.1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
