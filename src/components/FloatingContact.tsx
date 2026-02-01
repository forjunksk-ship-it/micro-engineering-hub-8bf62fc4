import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingContact = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us"
    >
      {/* Ripple animation */}
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-[ripple_1.5s_ease-out_infinite]" />
      <span className="absolute inset-0 rounded-full bg-primary/30 animate-[ripple_1.5s_ease-out_0.5s_infinite]" />
      
      {/* Main button */}
      <span className="relative flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <Phone className="h-6 w-6 animate-[wiggle_1s_ease-in-out_infinite]" />
      </span>
    </Link>
  );
};

export default FloatingContact;
