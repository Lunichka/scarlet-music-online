
import { Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import ConcertCard from "@/components/ConcertCard";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const upcomingConcerts = [
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
      {/* Hero Section */}
      <HeroSection />

      {/* Upcoming Concerts Section */}
      <section id="concerts" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Upcoming Concerts
          </h2>
          <p className="text-center text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto animate-fade-in">
            Experience the magic of live performance where classical meets contemporary
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingConcerts.map((concert, index) => (
              <ConcertCard
                key={index}
                {...concert}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
