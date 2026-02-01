import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FloatingContact = () => {
  const location = useLocation();
  
  // Hide on contact page
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14"
      aria-label="Contact us"
    >
      {/* Ripple animation */}
      <span className="absolute inset-0 rounded-full bg-primary/60 animate-ripple" />
      <span className="absolute inset-0 rounded-full bg-primary/50 animate-ripple [animation-delay:0.5s]" />
      
      {/* Main button */}
      <span className="relative flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <Phone className="h-6 w-6 animate-wiggle" />
      </span>
    </Link>
  );
};

export default FloatingContact;
