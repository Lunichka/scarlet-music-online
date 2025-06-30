
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ConcertCard from "@/components/ConcertCard";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SubscriptionPopup from "@/components/SubscriptionPopup";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const Index = () => {
  const featuredConcerts = [
    {
      date: "March 6",
      time: "19:00",
      title: "Scarlet Sails",
      venue: "Capella",
      description: "A magical evening of Russian classical music and contemporary arrangements"
    },
    {
      date: "March 20",
      time: "20:00",
      title: "Movie Soundtracks Night",
      venue: "Mariinsky Theatre",
      description: "From Harry Potter to Star Wars - the most beloved film music"
    },
    {
      date: "April 3",
      time: "19:30",
      title: "Comedy & Classics",
      venue: "Philharmonic Hall",
      description: "Our signature blend of humor and timeless classical pieces"
    }
  ];

  return (
    <div className="min-h-screen bg-cream font-inter text-charcoal">
      <Navigation />
      <SubscriptionPopup />
      <ScrollToTop />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Concerts Preview */}
      <section id="concerts" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Upcoming Concerts
          </h2>
          <p className="text-center text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto animate-fade-in">
            Experience the magic of live performance where classical meets contemporary
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredConcerts.map((concert, index) => (
              <ConcertCard
                key={index}
                {...concert}
                delay={index * 200}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/concerts">
              <Button 
                size="lg"
                className="bg-orchestra-red hover:bg-orchestra-red/90 text-white px-8 py-3"
              >
                View All Concerts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-white/50 relative overflow-hidden">
        {/* Subtle Musical Motifs */}
        <div className="absolute inset-0 pointer-events-none">
          <Music 
            className="absolute top-16 right-20 w-4 h-4 text-charcoal/5 animate-[float_10s_ease-in-out_infinite]" 
            style={{ animationDelay: '0s' }}
          />
          <Music 
            className="absolute bottom-20 left-16 w-3 h-3 text-charcoal/8 animate-[float_8s_ease-in-out_infinite]" 
            style={{ animationDelay: '4s' }}
          />
          
          {/* Sound Wave Lines */}
          <div className="absolute top-32 left-1/4 w-10 h-0.5 bg-charcoal/4 animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-1/4 w-8 h-0.5 bg-charcoal/6 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-charcoal animate-fade-in">
            Who We Are
          </h2>
          
          <div className="prose prose-lg mx-auto animate-fade-in-up">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Since our founding in 2013, Orchestra 1703 has redefined what it means to experience classical music. 
              We believe that great art doesn't have to be serious all the time.
            </p>
            
            <p className="text-lg leading-relaxed text-charcoal/70 mb-8">
              Over the past decade, we've performed more than 100 concerts, bringing joy and wonder to audiences 
              across Russia with our unique blend of world-class musicianship and genuine warmth.
            </p>
            
            <Link to="/about">
              <Button 
                variant="outline"
                size="lg"
                className="border-orchestra-red text-orchestra-red hover:bg-orchestra-red hover:text-white"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
