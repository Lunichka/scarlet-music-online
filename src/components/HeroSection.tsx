
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-charcoal/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
      </div>

      {/* Floating Musical Motifs */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <Music 
          className="absolute top-20 left-16 w-4 h-4 text-white/10 animate-[float_8s_ease-in-out_infinite]" 
          style={{ animationDelay: '0s' }}
        />
        <Music 
          className="absolute top-1/3 right-24 w-3 h-3 text-white/15 animate-[float_10s_ease-in-out_infinite]" 
          style={{ animationDelay: '3s' }}
        />
        <Music 
          className="absolute bottom-1/3 left-1/4 w-5 h-5 text-white/8 animate-[float_9s_ease-in-out_infinite]" 
          style={{ animationDelay: '6s' }}
        />
        <Music 
          className="absolute top-1/2 left-3/4 w-3 h-3 text-white/12 animate-[float_7s_ease-in-out_infinite]" 
          style={{ animationDelay: '2s' }}
        />
        
        {/* Sound Wave Lines */}
        <div className="absolute top-32 right-1/3 w-12 h-0.5 bg-white/8 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-48 left-1/3 w-8 h-0.5 bg-white/10 animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-16 w-6 h-0.5 bg-white/6 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl mb-6 animate-fade-in-up font-semibold">
          The most unusual orchestra in Russia
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          A mix of humor, art, and unforgettable music
        </p>
        <Link to="/concert/snow-queen">
          <Button 
            size="lg" 
            className="bg-orchestra-red hover:bg-orchestra-red/90 text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
          >
            Buy Tickets
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
        <p className="text-xs mt-2 font-light">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
