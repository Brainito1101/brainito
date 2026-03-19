import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, FileText, Mic } from "lucide-react";

const RecognitionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership & Advisory Roles",
      items: [
        "20+ Board Positions on international and national nonprofit boards",
        "Fifth National Climate Assessment Technical Contributor",
        "MIT Visiting Committee Appointee",
        "Senior Sustainability Fellow, Global Institute of Sustainability"
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Major Partnerships",
      items: [
        "World Bank Global Adaptation and Resilience Fund",
        "Rockefeller Foundation Financing Urban Resilience",
        "U.S. Climate Alliance Climate and Land Use Planning",
        "EPA Office of Environmental Justice (CCER TA lead)"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Certifications",
      items: [
        "SBA-certified Women Owned Small Business (WBE)",
        "GSA Multiple Award Schedule Contractor",
        "Social Enterprise designation",
        "Featured in Harvard GSD Executive Education"
      ]
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Media & Speaking",
      items: [
        "Regular presenter at APA, ICMA, NLC conferences",
        "Quoted expert in Governing magazine",
        "Podcast features on climate resilience",
        "Op-eds on social equity and climate finance"
      ]
    }
  ];

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
              Recognition & Milestones
            </span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recognized <span className="text-crc-blue">Leadership</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expertise has been recognized through partnerships, certifications, 
            and advisory roles at the highest levels.
          </p>
        </motion.div>
        
        {/* Recognition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card rounded-2xl p-8 shadow-crc-sm border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crc-gold/20 flex items-center justify-center">
                  <div className="text-crc-gold">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-crc-blue mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
