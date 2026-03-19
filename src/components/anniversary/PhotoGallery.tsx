import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import photo3 from "@/assets/photo-new-3.png";
import photo5 from "@/assets/photo-new-5.png";
import photo6 from "@/assets/photo-new-6.jpg";

const galleryImages = [
  { id: 206, src: photo6, label: "CRC Memory" },
  { id: 203, src: photo3, label: "CRC Memory" },
  { id: 2, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce524b717cb352ed30.png", label: "CRC Memory" },
  { id: 3, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b304753f155af1de81ed.jpg", label: "CRC Memory" },
  { id: 4, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b3052f17beaf0c07c6e8.jpg", label: "CRC Memory" },
  { id: 5, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b305524b7140d959bf0f.jpg", label: "CRC Memory" },
  { id: 6, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce2f17be10ac00b0ff.jpg", label: "CRC Memory" },
  { id: 7, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b3052f17bea0d807c6ea.jpg", label: "CRC Memory" },
  { id: 9, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2cf753f15154ed71fd0.jpg", label: "CRC Memory" },
  { id: 10, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce95735c5011a6ef1e.jpg", label: "CRC Memory" },
  { id: 11, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2cf81e3eecb672c494f.jpg", label: "CRC Memory" },
  { id: 12, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2cf8844f54962979bf1.jpg", label: "CRC Memory" },
  { id: 13, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1a2ce95735c59d9a6ef1f.jpg", label: "CRC Memory" },
  { id: 14, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b30581e3eed47132f854.png", label: "CRC Memory" },
  { id: 15, src: "images/photo-3.png", label: "CRC Memory" },
  { id: 16, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b305c4df65dd329a7455.jpeg", label: "CRC Memory" },
  { id: 17, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b30581e3ee19cf32f855.jpg", label: "CRC Memory" },
  { id: 18, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b8a12f17be909d096cb9.png", label: "CRC Memory" },
  { id: 19, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b8a181e3eecb6e349d3d.png", label: "CRC Memory" },
  { id: 20, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69a1b8a195735c5960afbb1f.png", label: "CRC Memory" },
  { id: 21, src: "https://assets.cdn.filesafe.space/dWngLoFGbdh0QqxXOj8c/media/69b026ebed0fb262e36391d4.jpg", label: "CRC Memory" },
];

const PhotoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-crc-gold" />
            <span className="text-crc-gold font-medium uppercase tracking-widest text-sm">Memories</span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            10 Years of <span className="text-crc-blue">CRC Memories</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            A visual journey through a decade of community engagement, collaboration, and transformational work.
          </p>
        </motion.div>

        {/* Masonry Photo Collage */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * Math.min(index, 10) }}
              className="relative group overflow-hidden rounded-xl break-inside-avoid shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-auto transform transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
