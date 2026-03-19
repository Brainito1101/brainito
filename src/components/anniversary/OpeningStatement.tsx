import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OpeningStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <pattern id="wave-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q10 10 20 20 T40 20" stroke="currentColor" fill="none" strokeWidth="2" className="text-crc-blue" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-crc-gold" />
            <span className="text-crc-gold font-medium uppercase tracking-widest text-sm">
              Our 10-Year Milestone
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            Arrives at a Critical Moment{" "}
            <span className="text-crc-blue">for Communities</span>
          </h2>
          
          {/* Opening Paragraphs */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-serif">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Climate resilience isn't just about responding to disasters — it's about empowering 
              communities to lead their own futures. For ten years, Climate Resilience Consulting 
              has stood at the forefront of this movement, transforming how governments, 
              organizations, and communities prepare for and adapt to climate change.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We started in 2016 with a bold vision: to make climate resilience{" "}
              <span className="text-crc-blue font-sans font-semibold">accessible</span>,{" "}
              <span className="text-crc-blue font-sans font-semibold">actionable</span>, and{" "}
              <span className="text-crc-blue font-sans font-semibold">equitable</span>. 
              Since then, climate-related losses have surged to nearly{" "}
              <span className="text-crc-gold font-sans font-bold">$120 billion annually</span> — 
              ten times the amount from 1980. But we've also witnessed something extraordinary: 
              communities discovering their own capacity to build resilience, protect lives, 
              and strengthen livelihoods.
            </motion.p>
          </div>
          
          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-12 h-1 bg-gradient-to-r from-crc-blue via-crc-gold to-crc-blue rounded-full origin-left"
          />
          
          {/* Second Part */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our First Decade Has Proven That{" "}
              <span className="text-crc-gold">Communities Are Leaders</span> in Climate Action
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-serif mb-6">
              From co-creating one of the world's first comprehensive resilience strategies 
              in Chicago (2008) to pioneering the Resilience Hub model that's now being 
              replicated nationwide, we've demonstrated how local action drives transformational 
              change. We've supported over <span className="text-crc-blue font-sans font-bold">300 clients nationwide</span> as 
              they turned climate risks into opportunities for stronger, more equitable futures.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-serif">
              Our partners haven't just survived, they've led. They've secured funding for 
              green infrastructure, built resilience hubs that serve as community anchors, 
              developed workforce solutions that create economic opportunity, and created 
              policies that protect the most vulnerable.
            </p>
          </motion.div>
          
          {/* Looking Forward Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pl-6 border-l-4 border-crc-gold"
          >
            <p className="text-xl md:text-2xl font-medium text-foreground italic">
              "Because climate change doesn't discriminate, and neither should access to 
              resilience tools and expertise."
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default OpeningStatement;
