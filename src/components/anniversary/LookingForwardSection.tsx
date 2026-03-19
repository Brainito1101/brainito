import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Heart, Lightbulb, DollarSign, Users, Wrench, Building2 } from "lucide-react";

const LookingForwardSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const commitments = [
    { icon: <Zap className="w-5 h-5" />, text: "Enhanced Implementation Support" },
    { icon: <Heart className="w-5 h-5" />, text: "Deeper Community Partnerships" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Continued Thought Leadership" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Innovation in Resilience Finance" },
    { icon: <Users className="w-5 h-5" />, text: "Workforce Development" },
    { icon: <Wrench className="w-5 h-5" />, text: "Ongoing Tool Development" },
    { icon: <Building2 className="w-5 h-5" />, text: "Scaling the Resilience Hub Model" }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crc-blue/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-crc-gold" />
              <span className="text-crc-gold font-medium uppercase tracking-widest text-sm">
                Looking Forward
              </span>
              <div className="h-px w-12 bg-crc-gold" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Next Decade of <span className="text-crc-blue">Impact</span>
            </h2>
          </motion.div>
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-crc-md border border-border/50"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Commitment Moving Forward
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-serif">
              As we enter our second decade, we're doubling down on our founding vision: 
              making climate resilience <span className="text-crc-blue font-sans font-semibold">accessible</span>, 
              <span className="text-crc-blue font-sans font-semibold"> actionable</span>, and 
              <span className="text-crc-blue font-sans font-semibold"> equitable</span> for all communities.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-10">
              The urgency of this moment demands bold action. Climate impacts are accelerating, 
              and communities need practical tools and expert support to build resilience now. 
              We're committed to expanding our reach while maintaining the deep, equity-centered 
              partnerships that have defined our work.
            </p>
            
            {/* Commitments */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                We're expanding our impact through:
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={commitment.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-crc-blue/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-crc-gold/20 flex items-center justify-center text-crc-gold group-hover:bg-crc-gold group-hover:text-crc-blue-dark transition-colors">
                      {commitment.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{commitment.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <blockquote className="border-l-4 border-crc-gold pl-6 py-2">
              <p className="text-lg md:text-xl font-medium text-foreground italic">
                "Because the next decade demands more than incremental progress — it demands 
                transformation, and we're committed to supporting communities as they lead the way."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LookingForwardSection;
