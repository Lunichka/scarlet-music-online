
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(44, 44, 44, 0.4), rgba(44, 44, 44, 0.4)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          The most unusual orchestra in Russia
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          A mix of humor, art, and unforgettable music
        </p>
        <Button 
          size="lg" 
          className="bg-orchestra-red hover:bg-orchestra-red/90 text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Buy Tickets
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
