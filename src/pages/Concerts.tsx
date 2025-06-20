
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Concerts = () => {
  const upcomingConcerts = [
    {
      date: "March 6, 2024",
      time: "19:00",
      title: "Scarlet Sails",
      venue: "Capella",
      description: "A magical evening of Russian classical music and contemporary arrangements",
      price: "From 1,500 ₽"
    },
    {
      date: "March 20, 2024",
      time: "20:00",
      title: "Movie Soundtracks Night",
      venue: "Mariinsky Theatre",
      description: "From Harry Potter to Star Wars - the most beloved film music",
      price: "From 2,000 ₽"
    },
    {
      date: "April 3, 2024",
      time: "19:30",
      title: "Comedy & Classics",
      venue: "Philharmonic Hall",
      description: "Our signature blend of humor and timeless classical pieces",
      price: "From 1,800 ₽"
    },
    {
      date: "April 18, 2024",
      time: "19:00",
      title: "Russian Soul",
      venue: "Capella",
      description: "Deep dive into the heart of Russian musical tradition",
      price: "From 1,500 ₽"
    },
    {
      date: "May 2, 2024",
      time: "20:30",
      title: "Modern Classics",
      venue: "Aurora Concert Hall",
      description: "Contemporary compositions that will become tomorrow's classics",
      price: "From 1,700 ₽"
    },
    {
      date: "May 15, 2024",
      time: "19:00",
      title: "Family Concert",
      venue: "Youth Palace",
      description: "Interactive musical experience for the whole family",
      price: "From 800 ₽"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <ScrollToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 animate-fade-in">
              Upcoming Concerts
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 animate-fade-in-up">
              Experience the magic of live performance where classical meets contemporary
            </p>
          </div>
        </section>

        {/* Concerts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingConcerts.map((concert, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4 text-orchestra-red">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{concert.date}, {concert.time}</span>
                    </div>
                    
                    <h3 className="font-playfair text-2xl font-bold mb-2 text-charcoal">
                      {concert.title}
                    </h3>
                    
                    <p className="text-charcoal/70 mb-2 font-medium">
                      {concert.venue}
                    </p>
                    
                    <p className="text-charcoal/60 mb-4 text-sm leading-relaxed">
                      {concert.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-orchestra-red">{concert.price}</span>
                    </div>
                    
                    <Button className="w-full bg-orchestra-red hover:bg-orchestra-red/90 text-white transition-all duration-300">
                      Buy Tickets
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Concerts;
