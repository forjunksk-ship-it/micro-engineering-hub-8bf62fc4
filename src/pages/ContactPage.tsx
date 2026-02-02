import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({ title: "Enquiry Sent!", description: "We'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        toast({ title: "Error", description: result.message || "Failed to send enquiry. Please try again.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Network error. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-industrial-dark py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Get in touch for quotes, inquiries, or to discuss your manufacturing requirements.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  <Input type="email" placeholder="Email *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground italic">(optional)</span>
                  </div>
                  <Input placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <Textarea placeholder="Your Message / Requirements" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  For CAD files or drawings, please send directly to{" "}
                  <a href="mailto:microggn@gmail.com" className="text-primary hover:underline font-medium">
                    microggn@gmail.com
                  </a>
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Phone", content: "+91 9354382712", href: "tel:+919354382712" },
                  { icon: Mail, title: "Email", content: "microggn@gmail.com", href: "mailto:microggn@gmail.com" },
                  { icon: MapPin, title: "Address", content: "207, Sector 7, IMT Manesar, Gurugram,\nHaryana, 122051\nINDIA" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary">{item.content}</a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
