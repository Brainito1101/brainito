import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Heart, Target, Lightbulb, BookOpen } from "lucide-react";

interface ApproachCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const ApproachCard = ({ icon, title, description, index, isInView }: ApproachCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group relative"
    >
      <div className="h-full bg-gradient-to-br from-crc-blue-dark to-crc-blue rounded-2xl p-8 text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id={`approach-pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#approach-pattern-${index})`} />
          </svg>
        </div>
        
        {/* Icon */}
        <div className="relative w-16 h-16 rounded-xl bg-crc-gold/20 flex items-center justify-center mb-6 group-hover:bg-crc-gold/30 transition-colors">
          <div className="text-crc-gold">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="relative text-2xl font-bold mb-4">{title}</h3>
        <p className="relative text-primary-foreground/80 leading-relaxed">{description}</p>
        
        {/* Hover Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-crc-gold to-crc-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </div>
    </motion.div>
  );
};

const approaches = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "The Resilience Hub Model",
    description: "Pioneering multi-benefit community facilities that serve as anchors before, during, and after climate emergencies — integrating clean energy, community services, and emergency response."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Equity-Centered Planning",
    description: "Ensuring climate resilience solutions prioritize the communities most vulnerable to climate impacts while building capacity for community-led solutions."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Implementation-Focused Strategy",
    description: "Moving beyond plans to action through project finance advising, capacity-building, stakeholder facilitation, and one-on-one coaching."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Integrated Solutions",
    description: "Connecting resilience planning with economic development, workforce solutions, green infrastructure, and community health."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Knowledge Democratization",
    description: "Translating complex climate science into accessible, actionable guidance that empowers diverse stakeholders to lead."
  }
];

const ApproachesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted relative overflow-hidden">
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
              Our Signature Approaches
            </span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We <span className="text-crc-blue">Create Change</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodologies combine deep expertise with community-centered approaches 
            to deliver lasting resilience outcomes.
          </p>
        </motion.div>
        
        {/* Approaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {approaches.slice(0, 3).map((approach, index) => (
            <ApproachCard
              key={approach.title}
              {...approach}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        {/* Second Row - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-4xl mx-auto">
          {approaches.slice(3).map((approach, index) => (
            <ApproachCard
              key={approach.title}
              {...approach}
              index={index + 3}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachesSection;
