import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingContact = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact us"
    >
      <Phone className="h-6 w-6" />
    </Link>
  );
};

export default FloatingContact;
