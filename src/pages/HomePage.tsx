import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Cog, Shield, Award, Clock, Car, Heart, Cpu, Zap, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import heroPartsCollection from "@/assets/hero-parts-collection.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import capabilityCnc from "@/assets/capability-cnc.jpeg";
import capabilityVmc from "@/assets/capability-vmc.jpeg";
import capabilityStamping from "@/assets/capability-stamping.jpeg";
import capabilityPrototypes from "@/assets/capability-prototypes-new.jpg";
import iconMachinery from "@/assets/icon-machinery.png";

const heroImages = [
  { src: heroPartsCollection, alt: "Precision Metal Parts Collection" },
  { src: product1, alt: "Metal Mounting Plates" },
  { src: product2, alt: "CNC Machined Bracket" },
  { src: product3, alt: "Precision Formed Components" },
  { src: product4, alt: "Anodized Aluminum Part" },
  { src: product5, alt: "Precision Connector" },
  { src: product6, alt: "Brass Fittings" },
  { src: product7, alt: "Black Coated Bracket" },
  { src: product8, alt: "Assembly Component" },
];

const industries = [
  { name: "Automotive", subtitle: "High-performance components", icon: Car, customIcon: null },
  { name: "Medical", subtitle: "Surgical instruments", icon: Heart, customIcon: null },
  { name: "Electronics", subtitle: "Precision connectors", icon: Cpu, customIcon: null },
  { name: "Machinery", subtitle: "Heavy equipment parts", icon: null, customIcon: iconMachinery },
  { name: "Defense", subtitle: "Military-grade parts", icon: Shield, customIcon: null },
  { name: "Energy", subtitle: "Power generation components", icon: Zap, customIcon: null },
  { name: "Industrial", subtitle: "Manufacturing equipment", icon: Settings, customIcon: null },
];

const capabilities = [
  {
    title: "CNC Machining",
    description: "High-precision CNC turning and milling for complex geometries",
    image: capabilityCnc,
  },
  {
    title: "VMC Machining",
    description: "Vertical machining centers for accurate multi-axis operations",
    image: capabilityVmc,
  },
  {
    title: "Stamping, Tube Bending & Metal Fabrication",
    description: "Sheet metal stamping, tube bending and custom fabrication solutions",
    image: capabilityStamping,
  },
  {
    title: "Prototype Parts",
    description: "Rapid prototyping with no minimum order quantity",
    image: capabilityPrototypes,
  },
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Function to schedule the next auto-slide with variable timing
  const scheduleNextSlide = useCallback((fromIndex: number) => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
    // First image (index 0) shows for 6 seconds, others for 4 seconds
    const delay = fromIndex === 0 ? 6000 : 4000;
    intervalRef.current = setTimeout(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % heroImages.length;
        scheduleNextSlide(nextIndex);
        return nextIndex;
      });
    }, delay);
  }, []);

  // Function to start/restart the auto-slide timer
  const startAutoSlide = useCallback(() => {
    scheduleNextSlide(currentImageIndex);
  }, [scheduleNextSlide, currentImageIndex]);

  // Start auto-slide on mount
  useEffect(() => {
    scheduleNextSlide(0);
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [scheduleNextSlide]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIndex = (prev + 1) % heroImages.length;
      scheduleNextSlide(nextIndex);
      return nextIndex;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIndex = (prev - 1 + heroImages.length) % heroImages.length;
      scheduleNextSlide(nextIndex);
      return nextIndex;
    });
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    scheduleNextSlide(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const minSwipeDistance = 50; // minimum swipe distance in pixels
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextImage(); // Swipe left = next image
      } else {
        prevImage(); // Swipe right = previous image
      }
    }
    
    touchStartX.current = null;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_40%_6%)] via-[hsl(215_35%_18%)] to-[hsl(215_30%_32%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215_40%_8%/0.85)] via-transparent to-[hsl(215_25%_35%/0.50)]" />
        {/* Decorative Gear & Blueprint Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Blueprint Grid */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
              </pattern>
              <pattern id="largeGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)"/>
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#largeGrid)" />
          </svg>
          
          {/* Blueprint dimension lines - top */}
          <svg className="absolute top-12 left-1/4 w-48 h-8 text-white/[0.06]" viewBox="0 0 200 30">
            <line x1="0" y1="15" x2="200" y2="15" stroke="currentColor" strokeWidth="1"/>
            <line x1="0" y1="8" x2="0" y2="22" stroke="currentColor" strokeWidth="1"/>
            <line x1="200" y1="8" x2="200" y2="22" stroke="currentColor" strokeWidth="1"/>
            <line x1="100" y1="10" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5"/>
            <text x="100" y="8" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace">150.00</text>
          </svg>
          
          {/* Blueprint dimension lines - right side */}
          <svg className="absolute top-1/4 right-8 w-8 h-32 text-white/[0.05]" viewBox="0 0 30 120">
            <line x1="15" y1="0" x2="15" y2="120" stroke="currentColor" strokeWidth="1"/>
            <line x1="8" y1="0" x2="22" y2="0" stroke="currentColor" strokeWidth="1"/>
            <line x1="8" y1="120" x2="22" y2="120" stroke="currentColor" strokeWidth="1"/>
            <text x="15" y="65" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="monospace" transform="rotate(-90, 15, 60)">85.50</text>
          </svg>
          
          {/* Blueprint corner markers */}
          <svg className="absolute bottom-16 right-1/4 w-24 h-24 text-white/[0.05]" viewBox="0 0 100 100">
            <path d="M0 30 L0 0 L30 0" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="0" cy="0" r="3" fill="currentColor"/>
            <text x="35" y="8" fill="currentColor" fontSize="5" fontFamily="monospace">A1</text>
          </svg>
          
          {/* Technical circle with crosshairs */}
          <svg className="absolute bottom-1/3 left-1/4 w-20 h-20 text-white/[0.04]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2"/>
            <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5"/>
            <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
          
          {/* Large gear - top right */}
          <svg className="absolute -top-20 -right-20 w-80 h-80 text-white/[0.06]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 20 L53 20 L54 15 L58 16 L59 11 L63 13 L65 8 L69 11 L72 7 L75 11 L79 8 L81 13 L85 11 L86 16 L90 15 L90 20 L95 21 L93 25 L97 28 L94 31 L97 35 L93 37 L95 42 L90 42 L90 47 L86 46 L85 51 L81 49 L79 54 L75 51 L72 55 L69 51 L65 54 L63 49 L59 51 L58 46 L54 47 L53 42 L48 42 L50 37 L46 35 L49 31 L46 28 L50 25 L48 21 L53 20 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35 Z"/>
          </svg>
          {/* Medium gear - bottom left */}
          <svg className="absolute -bottom-16 -left-16 w-56 h-56 text-white/[0.05]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 15 L54 15 L55 8 L60 10 L63 4 L68 8 L72 3 L76 9 L81 5 L84 12 L89 10 L90 17 L96 17 L94 24 L100 28 L96 33 L100 39 L94 42 L96 49 L90 49 L89 56 L84 54 L81 61 L76 57 L72 63 L68 58 L63 62 L60 56 L55 58 L54 51 L48 51 L50 44 L44 40 L48 35 L44 29 L50 26 L48 19 L54 19 Z M50 32 A18 18 0 1 0 50 68 A18 18 0 1 0 50 32 Z"/>
          </svg>
          {/* Small gear - center left */}
          <svg className="absolute top-1/3 left-10 w-32 h-32 text-white/[0.04]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 22 L54 22 L56 14 L62 17 L66 10 L71 15 L77 10 L80 18 L87 15 L88 23 L96 23 L93 31 L100 37 L93 43 L96 51 L88 51 L87 59 L80 56 L77 64 L71 59 L66 64 L62 57 L56 60 L54 52 L46 52 L48 44 L40 38 L48 32 L46 24 L54 24 Z M50 36 A14 14 0 1 0 50 64 A14 14 0 1 0 50 36 Z"/>
          </svg>
          {/* Tiny gear - top center */}
          <svg className="absolute top-8 left-1/3 w-20 h-20 text-white/[0.05]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 20 L55 20 L57 12 L65 16 L70 8 L77 15 L84 10 L88 20 L97 20 L94 30 L102 38 L94 46 L97 56 L88 56 L84 66 L77 61 L70 68 L65 60 L57 64 L55 56 L45 56 L48 46 L40 38 L48 30 L45 20 Z M50 34 A16 16 0 1 0 50 66 A16 16 0 1 0 50 34 Z"/>
          </svg>
        </div>
        <div className="relative z-10 container-custom py-6 md:py-10 lg:py-14">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Image Carousel - Top on mobile, Left on desktop */}
            <div className="w-full md:w-[35%] lg:w-[39%] flex-shrink-0 animate-slide-up">
                <div 
                  className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 hover:border-primary/40 aspect-[4/3]"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                {/* All images stacked with fade transition */}
                {heroImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={image.alt} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Navigation Arrows - visible on hover */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? "bg-primary w-4" 
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 animate-slide-up">
                Custom Metal & Plastic Parts<br />Manufacturing
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Your trusted partner for high-quality CNC machining, VMC operations, stamping, and custom fabrication.
                We deliver prototype to production with <strong>no minimum order quantity</strong>.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button asChild size="lg" variant="cta" className="text-base">
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="backdrop-blur-sm bg-white/10 text-white border-white/20 hover:bg-white/20 text-base">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 md:gap-8 text-sm animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div>
                  <span className="font-bold text-xl md:text-2xl block text-white">25+</span>
                  <span className="text-white/80">Years Experience</span>
                </div>
                <div>
                  <span className="font-bold text-xl md:text-2xl block text-white">2500+</span>
                  <span className="text-white/80">Projects Completed</span>
                </div>
                <div>
                  <span className="font-bold text-xl md:text-2xl block text-white">No MOQ</span>
                  <span className="text-white/80">Minimum Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom px-2 sm:px-4 md:px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Process</h2>
            <p className="text-muted-foreground text-sm">
              Simple, transparent process from inquiry to delivery.
            </p>
          </div>
          <div className="flex justify-center items-start">
            {[
              { step: "01", title: "Inquiry", desc: "Share your requirements and drawings" },
              { step: "02", title: "Quotation", desc: "Receive detailed pricing and timeline" },
              { step: "03", title: "Production", desc: "Manufacturing with quality checks" },
              { step: "04", title: "Delivery", desc: "On-time delivery" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center px-2 sm:px-3 md:px-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base">{item.title}</h3>
                  <p className="text-muted-foreground text-[9px] sm:text-xs md:text-sm max-w-[70px] sm:max-w-[110px] md:max-w-[140px]">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="w-4 sm:w-8 md:w-12 lg:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 -mt-6 sm:-mt-8 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-8 md:py-10 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art manufacturing capabilities to meet your most demanding requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden card-hover group aspect-[3/4] md:aspect-[4/5]"
              >
                {/* Background Image */}
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 pb-8 md:pb-10">
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-1 md:mb-2">{capability.title}</h3>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering precision manufacturing solutions across diverse sectors with unwavering quality standards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 md:p-6 text-center card-hover border border-border w-[calc(33.333%-8px)] md:w-[calc(25%-18px)] lg:w-[calc(14.285%-21px)]"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  {industry.customIcon ? (
                    <img src={industry.customIcon} alt={industry.name} className="h-6 w-6 md:h-8 md:w-8 object-contain" />
                  ) : industry.icon ? (
                    <industry.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  ) : null}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Micro Engineering?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With decades of experience in precision manufacturing, we combine traditional craftsmanship
                with modern technology to deliver exceptional quality every time.
              </p>
              <ul className="space-y-4">
                {[
                  "No minimum order quantity - prototype to production",
                  "State-of-the-art CNC and VMC machinery",
                  "Quality-focused approach with strict tolerances",
                  "Quick turnaround times for urgent requirements",
                  "Experienced team with deep industry knowledge",
                  "Competitive pricing without compromising quality",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, title: "Quality Assured", desc: "Rigorous quality control at every step" },
                { icon: Clock, title: "On-Time Delivery", desc: "Meeting deadlines consistently" },
                { icon: Shield, title: "Reliable Partner", desc: "Trusted by leading companies" },
                { icon: Cog, title: "Advanced Tech", desc: "Latest manufacturing equipment" },
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get in touch with us today for a free quote. No minimum order quantity -
            we handle everything from prototypes to large-scale production.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="cta" className="text-base">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-base">
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
