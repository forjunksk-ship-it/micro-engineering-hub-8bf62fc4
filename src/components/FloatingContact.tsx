import { Phone } from "lucide-react";

const FloatingContact = () => {
  return (
    <a
      href="tel:+919354382712"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default FloatingContact;
