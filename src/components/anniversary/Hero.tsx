import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.png";
import crcLogo from "@/assets/crc-anniversary-logo.png";
import galleryImg1 from "@/assets/harvard-panel.jpg";
import galleryImg3 from "@/assets/bellagio-group.jpg";

const heroGallery = [
  { src: galleryImg1, label: "Harvard Future Cities Panel" },
  { src: galleryImg3, label: "Bellagio Resilience Brokers" },
  { src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce8844f50393979bc9.png", label: "Group Photo 1" },
  { src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2cf2f17be8f7e00b11c.jpg", label: "Group Photo 2" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            initial={{ d: "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{
              d: [
                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,165.3C672,160,768,192,864,192C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            fill="hsl(var(--crc-gold))"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 py-[100px]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 pt-[100px]"
        >
          A Decade of Building{" "}
          <span className="text-gradient-gold">Climate Resilience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-md md:text-lg lg:text-xl text-primary-foreground/90 max-w-4xl mx-auto mb-10 font-light leading-relaxed"
        >
          For a decade, CRC has partnered with communities, governments, and organizations to build the skills, strategies, and systems needed to turn climate threats into lasting resilience. Throughout 2026, we celebrate ten years of impact and look ahead to the next chapter.
        </motion.p>

        {/* Featured Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[90rem] mx-auto px-4"
        >
          {heroGallery.map((item, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-xl overflow-hidden border border-primary-foreground/20"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col items-center mt-12 mb-8"
        >
          <Button
            className="bg-crc-gold text-crc-blue-dark font-semibold hover:bg-crc-gold/90 transition-colors mb-6 px-8 py-6 text-lg rounded-md"
            asChild
          >
            <a href="#timeline">Explore Our Journey</a>
          </Button>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-primary-foreground/70"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
