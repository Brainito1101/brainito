import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clientsPartnersImg from "@/assets/clients-partners.jpg";

interface TimelineEvent {
  year: string;
  title: string;
  description: React.ReactNode;
  isFoundingYear?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  { year: "2016", title: "Bellagio Blueprint for Urban Resilience", description: "Convened global finance, insurance, and city leaders at Rockefeller’s Bellagio Center to produce the Blueprint for Action to Finance Urban Resilience, shaping early global frameworks for financing urban climate resilience.", isFoundingYear: true },
  { year: "2016", title: "NSF Urban Resilience to Extremes Network", description: "Served as practitioner lead for the NSF Urban Resilience to Extremes Network, connecting 100+ researchers to translate extreme weather science into city resilience strategies.", isFoundingYear: true },
  { year: "2016", title: "Climate Week NYC Adaptation Leadership", description: "Organized one of the earliest Climate Week NYC events dedicated to climate adaptation, convening 300+ leaders and elevating resilience in international climate discussions.", isFoundingYear: true },
  { year: "2017", title: "Enterprise Resilience Partnership", description: "Launched decade-long national nonprofit collaborations that produced practical resilience guides used by hundreds of communities, including the Safer and Stronger Cities framework." },
  { year: "2017", title: "Kresge Foundation National Philanthropy", description: "Published an early national mapping of climate resilience philanthropy, helping document and catalyze a sector experiencing rapid year-over-year funding growth and initiating a ten year bi-annual stocktake." },
  { year: "2017", title: "Resilient by Design Replication", description: "Helped replicate the Rebuild by Design model in new regions, demonstrating how collaborative design competitions can generate implementable climate resilience projects." },
  { year: "2018", title: "Agricultural Resilience Investment Screen", description: "Developed climate risk screening tools for agriculture investors, helping influence over $1B in agricultural investments toward more resilient operations." },
  { year: "2018", title: "Real Estate Climate Risk Integration", description: "Partnered with national real estate leaders to integrate climate risk into development and asset management decisions across major U.S. property markets." },
  { year: "2018", title: "LA SAFE Climate Migration Initiative", description: "Contributed resilience finance expertise to Louisiana’s LA SAFE program, advancing one of the nation’s earliest state initiatives addressing climate-driven relocation." },
  { year: "2019", title: "Paying for Resilience", description: "Authored Paying for Resilience: How to Finance Resilient Infrastructure, a widely cited guide helping cities and utilities identify funding strategies for climate resilience investments and laying the groundwork for How State Governments Can Help Communities Invest in Climate Resilience." },
  { year: "2019", title: "USDN Resilience Finance Partnership", description: "Advanced resilience finance strategies with the Urban Sustainability Directors Network, supporting climate action across a network representing 1,000+ cities and counties." },
  { year: "2019", title: "ULI Local Government Resilience", description: "Led resilience convenings through the Urban Land Institute, connecting city leaders and global real estate experts around climate-informed development strategies." },
  { year: "2020", title: "National Real Estate Lobby Resilience Plan", description: "Developed the first comprehensive sustainability and resilience plan for a major U.S. real estate industry association and lobby, influencing national policy and investment priorities." },
  { year: "2020", title: "Harvard Executive Education", description: "Began teaching climate resilience in Harvard executive education programs, training 400+ global real estate leaders on climate risk and resilient investment strategies." },
  { year: "2020", title: "Climate Bonds Initiative", description: "Led the 40-member global Adaptation and Resilience Expert Group, co-authoring the Climate Resilience Principles informing green bond standards and over $1B in resilience investments." },
  { year: "2021", title: "American Flood Coalition Advisory", description: "Began a multi-year advisory partnership with the American Flood Coalition, helping shape bipartisan flood resilience policy and investment strategies." },
  { year: "2021", title: "US Climate Alliance", description: "Authored the Governor’s Climate Resilience Playbook, supporting climate action and resilience policy development across half of U.S. states and launching multi-year USCA partnership." },
  { year: "2021", title: "Telesto Strategy Board Leadership", description: "Joined the global board of Telesto Strategy, strengthening partnerships between resilience strategy, infrastructure planning, and global consulting practice." },
  { year: "2022", title: "Equitable Resilience Builder", description: "Co-developed EPA’s Equitable Resilience Builder, helping thousands of small and mid-sized communities integrate equity into climate resilience planning." },
  { year: "2022", title: "NOAA Steps to Resilience", description: "Launched Ready to Fund Resilience with NOAA’s Steps to Resilience program, helping communities translate climate risk assessments into fundable projects." },
  { year: "2022", title: "Environmental Defense Fund", description: "Identified six major capital pathways for scaling climate resilience investment in the Mississippi Delta through public finance, insurance, and private capital markets." },
  { year: "2023", title: "Extreme Heat Behavioral Health Research", description: "Published pioneering research linking extreme heat and behavioral health, informing planning across 12 U.S. departments and national health organizations." },
  { year: "2023", title: "Louisiana Statewide Resilience Partnership", description: "Partnered with Louisiana leaders and CPEX to expand statewide resilience planning and implementation strategies across climate-exposed communities." },
  { year: "2023", title: "Household Resilience Finance Guidance", description: "Developed household resilience finance guidance for US's largest mortgage holder, used to improve training for tens of thousands of homeowners and buyers." },
  { year: "2024", title: "EPA Community Change Technical Assistance", description: "Led technical assistance for the EPA Community Change Equitable Resilience initiative, supporting 26 U.S. communities implementing climate resilience strategies." },
  { year: "2024", title: "Transportation Research Board Climate Migration Project", description: "Produced implementation guidance on climate migration and receiving communities for WSP, the Transportation Research Board and state DOTs." },
  { year: "2024", title: "Coastal States Organization - Great Lakes", description: "Advised the Coastal States Organization on Great Lakes resilience strategies spanning four U.S. states." },
  { year: "2025", title: "Public Health & Extreme Weather Resources", description: "Produced seven national resilience playbooks helping public health and hospital leaders prepare for extreme weather impacts." },
  { year: "2025", title: "Enterprise Affordable Housing Resilience Academies", description: "Served as subject matter expert for 12 national resilience academies, helping affordable housing providers integrate climate adaptation into development and operations." },
  { year: "2025", title: "Buy-In Community Partners Resilience Planning", description: "Advanced community-driven resilience planning approaches emphasizing local knowledge, trust building, and durable public support for adaptation investments." },
  { year: "2026", title: "Tribal-State Climate Resilience Framework", description: "Initiating the nation’s first Tribal-State Climate Resilience Framework, building coordinated resilience strategies between Tribal Nations and state governments.", isFoundingYear: true },
  { year: "2026", title: "County Climate Receiving Community Strategy", description: "Leading development of one of the nation’s first county-level climate migration receiving community strategies.", isFoundingYear: true },
  { year: "2026", title: "Climate Resilience for Climate Mitigation in Philanthropy", description: "Designing a climate-proofing rubric to help global philanthropies integrate climate risk into grantmaking and investment strategies.", isFoundingYear: true },
  { year: "2026", title: "Resilience Intelligence Advantage (RIA)", description: <>Launching RIA, a resilience intelligence platform that converts 30 years of consulting expertise into scalable tools helping cities identify climate risks, prioritize adaptation investments and take action. Learn more at <a href="https://riaresilience.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">riaresilience.com</a></>, isFoundingYear: true },
];

const INITIAL_VISIBLE = 6;

const TimelineItem = ({
  event,
  index,
  isInView
}: {
  event: TimelineEvent;
  index: number;
  isInView: boolean;
}) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * Math.min(index, 5) }}
      className={`relative flex items-center ${isEven ? "justify-end md:pr-[52%]" : "md:pl-[52%]"} mb-6`}
    >
      <div className={`relative bg-card rounded-2xl p-6 shadow-crc-sm hover:shadow-crc-md transition-shadow border ${event.isFoundingYear ? "border-crc-gold" : "border-border/50"} max-w-lg w-full`}>
        <div className={`absolute -top-4 ${isEven ? "right-6" : "left-6"} px-4 py-1 rounded-full text-sm font-bold ${event.isFoundingYear ? "bg-crc-gold text-crc-blue-dark" : "bg-crc-blue text-primary-foreground"}`}>
          {event.year}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-foreground mt-2 mb-3">{event.title}</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{event.description}</p>

        <div className={`hidden md:block absolute top-1/2 ${isEven ? "right-0 translate-x-full" : "left-0 -translate-x-full"} w-[calc(4%-0.75rem)] h-0.5 ${event.isFoundingYear ? "bg-crc-gold" : "bg-crc-blue/30"}`} />
      </div>

      <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 ${event.isFoundingYear ? "bg-crc-gold border-crc-gold-light" : "bg-crc-blue border-crc-blue-light"}`} />
    </motion.div>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? timelineEvents : timelineEvents.slice(0, INITIAL_VISIBLE);

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-background relative overflow-hidden">

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
              Milestone Timeline
            </span>
            <div className="h-px w-12 bg-crc-gold" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Journey of <span className="text-crc-blue">Impact</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-crc-gold via-crc-blue to-crc-gold -translate-x-1/2" />

          <div className="relative">
            {visibleEvents.map((event, index) => (
              <TimelineItem key={`${event.year}-${event.title}`} event={event} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Show All / Show Less Button */}
        <div className="flex justify-center mt-12">
          {!showAll ? (
            <Button onClick={() => setShowAll(true)} variant="outline" size="lg" className="border-crc-blue text-crc-blue hover:bg-crc-blue hover:text-primary-foreground">
              Show All Milestones
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={() => setShowAll(false)} variant="outline" size="lg" className="border-crc-blue text-crc-blue hover:bg-crc-blue hover:text-primary-foreground">
              <ChevronLeft className="mr-2 w-4 h-4" />
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
