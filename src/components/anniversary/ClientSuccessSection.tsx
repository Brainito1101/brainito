import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Users2, FileCheck, Award, BookMarked } from "lucide-react";

const ClientSuccessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Mantua, Philadelphia",
      subtitle: "Community-Centered Resilience",
      description: "Co-designed resilience hub addressing Mantua's high climate vulnerability while fostering community engagement, public health, and environmental justice. Phased budgeting approach starting with the resilience pod.",
      partner: "ONE Architecture & Urbanism"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Bethlehem Lutheran Church, St. Louis",
      subtitle: "Faith-Based Resilience",
      description: "Collaborated with faith leaders to repurpose existing space into a resilience hub with community garden and urban farm. Provides emergency shelter while addressing food desert challenges.",
      partner: "Food security, emergency services, community education"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "EPA Community Change Equitable Resilience TA",
      subtitle: "National Technical Assistance",
      description: "Leading major role in supporting community-based organizations creating community-serving buildings, public parks, transportation and mobility improvements.",
      partner: "25+ Partner Consortium"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Chicago Climate Action Plan (2008)",
      subtitle: "Pioneering Municipal Climate Action",
      description: "Joyce Coffee pioneered public-private partnerships, adaptation planning, interdepartmental coordination, and climate performance measurement as lead of one of the world's first comprehensive urban climate strategies.",
      partner: "Established model for municipal climate action nationwide"
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
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
              Client Success Stories
            </span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real <span className="text-crc-blue">Impact</span>, Real Communities
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our partnerships have transformed climate resilience from concept to reality.
          </p>
        </motion.div>
        
        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden shadow-crc-sm hover:shadow-crc-lg transition-all border border-border/50">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-crc-blue/20 to-crc-blue/5 flex items-center justify-center border-b border-border/50">
                  <div className="w-16 h-16 rounded-full bg-crc-blue/10 flex items-center justify-center">
                    <div className="text-crc-blue">{client.icon}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{client.title}</h3>
                  <p className="text-crc-gold font-medium text-sm mb-4">{client.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{client.description}</p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">Partner: </span>
                    <span className="text-xs font-medium text-foreground">{client.partner}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
