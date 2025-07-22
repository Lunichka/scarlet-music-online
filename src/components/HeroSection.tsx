
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-charcoal/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('public/images/rqEnN_ycB9A.jpg')"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-5xl mb-6 animate-fade-in-up font-semibold">
          Самый нестандартный оркестр России
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Микс юмора, искусства и незабываемой музыки
        </p>
        <Button
          size="lg"
          className="bg-orchestra-red hover:bg-orchestra-red/90 text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Купить билеты
        </Button>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
        <p className="text-xs font-light text-center animate-pulse">Листай</p>
      </div> */}
    </section>
  );
};

export default HeroSection;
