import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import partnersLatest from "@/assets/partners-image-latest.png";

const TributeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted relative overflow-hidden">
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
                To Everyone Who Made This Possible
              </span>
              <div className="h-px w-12 bg-crc-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              This Milestone Belongs to <span className="text-crc-blue">All of Us</span>
            </h2>
          </motion.div>

          {/* Tribute Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-crc-md border border-border/50"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-center font-normal font-sans">
              "To the city managers who took a chance on a new approach. To the community leaders who
              shared their stories and trusted us with their vision. To the funders who saw potential
              before it had a name. To every partner, collaborator, and champion who believed
              communities deserve better than disaster recovery, they deserve the chance to thrive."
            </p>

            {/* Joyce & Robert */}
            <div className="flex flex-col items-center justify-center gap-6 pt-8 border-t border-border/50">
              <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={partnersLatest}
                  alt="Joyce Coffee & Robert Macnee"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center">
                <p className="text-base text-muted-foreground italic mb-2">
                  Thank you for advancing resilience with us,
                </p>
                <p className="text-xl font-bold text-foreground">Joyce Coffee & Robert Macnee</p>
                <p className="text-crc-blue font-medium">
                  Climate Resilience Consulting
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TributeSection;
