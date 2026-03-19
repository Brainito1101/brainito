import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "I was very impressed with the services provided by Climate Resilience Consulting. The team's expertise and dedication to helping organizations address climate change challenges are commendable. They offered practical and innovative solutions tailored to our organization's specific needs.",
    category: "On Expertise and Dedication"
  },
  {
    quote: "The consulting services I received were top-notch. The team was highly professional and demonstrated a thorough understanding of climate resilience. They provided practical solutions that were tailored to our organization's needs. I was particularly impressed by their attention to detail and the depth of their knowledge.",
    category: "On Professionalism and Knowledge"
  },
  {
    quote: "Working with CRC transformed how we think about climate adaptation. They centered equity from day one and ensured our most vulnerable residents had voice and agency in the planning process.",
    category: "On Transformative Impact"
  },
  {
    quote: "Climate Resilience Consulting is a truly exceptional company. Their expertise and dedication in helping organizations address climate change and build resilience is unmatched. The solutions they offer are practical, innovative, and highly effective.",
    category: "On Practical Solutions"
  },
  {
    quote: "CRC didn't just give us a plan — they gave us the tools, the confidence, and the partnerships to actually build resilience in our community. Their implementation focus made all the difference.",
    category: "On Partnership Value"
  },
  {
    quote: "The consultants are knowledgeable, professional, and responsive. They have a deep understanding of climate resilience and offer practical solutions to address the impacts of climate change.",
    category: "On Responsiveness"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-crc-blue-dark via-crc-blue to-crc-blue-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="testimonial-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              What Our Partners Are Saying
            </span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Voices of <span className="text-crc-gold">Impact</span>
          </h2>
        </motion.div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Quote Icon */}
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-crc-gold/20 flex items-center justify-center">
              <Quote className="w-8 h-8 text-crc-gold" />
            </div>
            
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-primary-foreground font-serif leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            {/* Category */}
            <p className="text-crc-gold font-semibold text-lg">
              {testimonials[currentIndex].category}
            </p>
          </motion.div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="text-primary-foreground hover:bg-primary-foreground/10 w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-crc-gold w-8" 
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="text-primary-foreground hover:bg-primary-foreground/10 w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
