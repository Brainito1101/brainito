import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import crcFavicon from "@/assets/crc-favicon.png";
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="py-16 lg:py-20 bg-gradient-to-br from-crc-blue-dark via-crc-blue to-crc-blue-light relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-10">
      <svg viewBox="0 0 100 100" className="w-full h-full bg-primary-foreground">
        <pattern id="contact-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M0 15 Q7.5 7.5 15 15 T30 15" stroke="white" fill="none" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#contact-pattern)" />
      </svg>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Section Header */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          We'd love to <span className="text-crc-gold">hear from you!</span>
        </h2>
      </motion.div>

      {/* Contact Info */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap mb-10 gap-6 lg:gap-10 items-center justify-center">
          <a href="mailto:info@climateresilienceconsulting.com" className="flex items-center gap-3 text-primary-foreground/90 hover:text-crc-gold transition-colors text-base md:text-lg">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <span>info@climateresilienceconsulting.com</span>
          </a>

          <a href="tel:+13128949028" className="flex items-center gap-3 text-primary-foreground/90 hover:text-crc-gold transition-colors text-base md:text-lg">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <span>+1 312 894 9028</span>
          </a>

          <div className="flex items-center gap-3 text-primary-foreground/90 text-base md:text-lg">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <span>Chicago, IL, USA</span>
          </div>

          <a href="https://www.linkedin.com/company/climateresilienceconsulting/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/90 hover:text-crc-gold transition-colors text-base md:text-lg">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Linkedin className="w-6 h-6" />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Favicon at bottom */}
        <motion.div initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex justify-center">

        </motion.div>
      </motion.div>
    </div>
  </section>;
};
export default ContactSection;