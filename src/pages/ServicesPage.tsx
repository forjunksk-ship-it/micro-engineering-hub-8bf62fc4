import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Wrench, Sparkles, Lightbulb } from "lucide-react";
import prototypeImage from "@/assets/prototype-part.png";
import additionalServicesImage from "@/assets/additional-services.png";
import capabilityCnc from "@/assets/capability-cnc.jpeg";
import capabilityVmc from "@/assets/capability-vmc.jpeg";
import capabilityStamping from "@/assets/capability-stamping.jpeg";
import iconFabrication from "@/assets/icon-fabrication.png";
import iconBending from "@/assets/icon-bending.png";
import customImage from "@/assets/custom-solutions.png";
import cncImage from "@/assets/cnc-machining.png";
import customToolingImage from "@/assets/custom-tooling.jpg";

const services = [
  {
    customIcon: capabilityCnc,
    title: "CNC Machining",
    description: "Precision CNC turning and milling services for complex components with tight tolerances. Multi-axis capabilities for intricate geometries.",
    features: [
      "3, 4, and 5-axis machining",
      "Tolerance up to ±0.01mm",
      "Batch sizes from 1 to 10,000+",
      "Complex geometry capability",
    ],
  },
  {
    customIcon: capabilityVmc,
    title: "VMC Machining",
    description: "Vertical Machining Center operations for precision milling, drilling, and tapping. Ideal for prismatic parts and mold components.",
    features: [
      "High-speed machining",
      "Multi-operation capability",
      "Precision surface finish",
      "Large part capacity",
    ],
  },
  {
    customIcon: capabilityStamping,
    title: "Stamping",
    description: "Sheet metal stamping services for high-volume production. Progressive die stamping, deep drawing, and forming operations.",
    features: [
      "Progressive die stamping",
      "Deep drawing",
      "Forming and bending",
      "High-volume production",
    ],
  },
  {
    customIcon: iconFabrication,
    title: "Fabrication",
    description: "Custom metal fabrication including cutting, bending, welding, and assembly. Complete solutions from raw material to finished product.",
    features: [
      "Laser/plasma cutting",
      "Press brake bending",
      "TIG/MIG welding",
      "Surface finishing",
    ],
  },
  {
    customIcon: iconBending,
    title: "Tube Bending",
    description: "Precision tube bending and forming for automotive, furniture, and industrial applications. CNC tube bending for consistent results.",
    features: [
      "CNC tube bending",
      "Multi-radius bending",
      "End forming",
      "Mandrel bending",
    ],
  },
  {
    isAssembly: true,
    title: "Assembly Services",
    description: "Complete assembly services including mechanical assembly, sub-assembly, and testing. Kitting and packaging solutions available.",
    features: [
      "Mechanical assembly",
      "Quality testing",
      "Kitting services",
      "Packaging solutions",
    ],
  },
];

const solutions = [
  {
    icon: Lightbulb,
    title: "Design-to-Manufacturing",
    description: "Complete support from concept to finished product. Our engineering team works with you to optimize designs for manufacturability.",
    benefits: [
      "Design for Manufacturing (DFM) analysis",
      "Material selection guidance",
      "Cost optimization suggestions",
      "Prototype validation",
    ],
    image: customImage,
  },
  {
    icon: Wrench,
    title: "Custom Tooling Solutions",
    description: "In-house tooling development for specialized manufacturing requirements. Jigs, fixtures, and custom dies for your specific needs.",
    benefits: [
      "Custom jig and fixture design",
      "Progressive die development",
      "Gauges and inspection tools",
      "Tool maintenance support",
    ],
    image: customToolingImage,
  },
];


const processSteps = [
  { step: "01", title: "Inquiry", description: "Share your requirements and drawings" },
  { step: "02", title: "Quotation", description: "Receive detailed pricing and timeline" },
  { step: "03", title: "Production", description: "Manufacturing with quality checks" },
  { step: "04", title: "Delivery", description: "On-time delivery to your location" },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-industrial-dark py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Services & Solutions</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive manufacturing services and custom solutions from prototyping to production with no minimum order quantity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Manufacturing Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end manufacturing solutions with state-of-the-art equipment and experienced craftsmen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-6 card-hover border border-border text-center">
                <div className="h-28 w-28 mb-4 mx-auto flex items-center justify-center">
                  {service.isAssembly ? (
                    <div className="relative">
                      <Wrench className="h-20 w-20 text-[#0d1b2a]" />
                      <Sparkles className="h-6 w-6 text-[#0d1b2a] absolute -top-2 -right-2" />
                    </div>
                  ) : service.customIcon ? (
                    <img src={service.customIcon} alt={service.title} className="h-full w-full object-contain" />
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Prototype Development - Centered Box */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2">
                <div>
                  <img
                    src={prototypeImage}
                    alt="Prototype Development"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Prototype Development</h3>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">
                    Rapid prototyping services to validate designs quickly. No minimum order quantity - order even single pieces.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "No minimum order quantity",
                      "Quick turnaround",
                      "Design optimization support",
                      "Seamless transition to production",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tailored Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just manufacture parts - we provide complete solutions that address your unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                {/* Image */}
                <div className="h-48 sm:h-56 md:h-48 lg:h-56">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <solution.icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3" />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{solution.description}</p>
                  <ul className="space-y-2 mb-4 flex-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                    <Link to="/contact">
                      Discuss Your Requirements <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom px-2 sm:px-4 md:px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Process</h2>
            <p className="text-muted-foreground text-sm">
              Simple, transparent process from inquiry to delivery.
            </p>
          </div>
          <div className="flex justify-center items-start">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center px-2 sm:px-3 md:px-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base">{step.title}</h3>
                  <p className="text-muted-foreground text-[9px] sm:text-xs md:text-sm max-w-[70px] sm:max-w-[110px] md:max-w-[140px]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-16 sm:w-20 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent -mt-6 sm:-mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={additionalServicesImage}
                alt="Additional Services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Additional Services
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond core manufacturing, we offer a range of value-added services to deliver complete solutions for your requirements, through our trusted partners.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Heat Treatment",
                  "Surface Coating",
                  "Anodizing",
                  "Powder Coating",
                  "Electroplating",
                  "Passivation",
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Partnership Approach</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe in building long-term partnerships rather than transactional relationships.
              When you work with Micro Engineering, you get a dedicated team committed to your success.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Understanding", desc: "We take time to understand your business and requirements" },
                { title: "Collaboration", desc: "Work together to find the best manufacturing solutions" },
                { title: "Support", desc: "Continuous support from prototype to production and beyond" },
              ].map((item, index) => (
                <div key={index} className="bg-secondary border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Share your requirements with us and receive a detailed quote within 24 hours.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">
              Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
