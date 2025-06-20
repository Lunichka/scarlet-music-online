
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubscriptionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("orchestra-subscription-popup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("orchestra-subscription-popup", "seen");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setIsVisible(false);
    localStorage.setItem("orchestra-subscription-popup", "seen");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-cream rounded-lg shadow-xl max-w-md w-full p-6 relative animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="bg-orchestra-red/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <span className="font-playfair text-xl font-bold text-orchestra-red">🎼</span>
          </div>
          <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">
            Stay in Tune!
          </h3>
          <p className="text-charcoal/70">
            Be the first to know about our upcoming concerts and special events.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-charcoal/20 focus:border-orchestra-red"
          />
          <Button
            type="submit"
            className="w-full bg-orchestra-red hover:bg-orchestra-red/90 text-white"
          >
            Subscribe to Updates
          </Button>
        </form>

        <p className="text-xs text-charcoal/50 text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
