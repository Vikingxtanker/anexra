import {
  Activity,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Clinical Excellence",
    description:
      "Advanced pharmacist-led healthcare solutions focused on improving patient outcomes, medication safety, and coordinated clinical care.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Care Support",
    description:
      "Reliable healthcare assistance and patient engagement services designed to support chronic care and long-term wellness management.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Healthcare Innovation",
    description:
      "Technology-driven healthcare systems integrating digital monitoring, intelligent workflows, and modern clinical solutions.",
  },
];

export default function SolutionsService() {
  return (
    <section className="bg-[#f4efee] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-14 lg:gap-20">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  text-center
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-20 h-20 mx-auto
                    rounded-full
                    border border-[#c79da1]/40
                    flex items-center justify-center
                    bg-white/70
                    shadow-sm
                    group-hover:scale-110
                    transition-all duration-500
                  "
                >
                  <Icon className="w-10 h-10 text-[#87565b]" />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    text-3xl
                    font-medium
                    text-[#4c1711]
                    tracking-tight
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-6
                    text-[#564740]/85
                    text-base md:text-lg
                    leading-relaxed
                    max-w-sm mx-auto
                  "
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}