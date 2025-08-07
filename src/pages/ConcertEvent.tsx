
import { Calendar, Clock, User, Music, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";

const ConcertEvent = () => {
  const upcomingConcerts = [
    {
      date: "January 15",
      title: "Movie Soundtracks Night",
      venue: "Mariinsky Theatre"
    },
    {
      date: "February 3",
      title: "Russian Soul",
      venue: "Capella"
    },
    {
      date: "February 20",
      title: "Comedy & Classics",
      venue: "Philharmonic Hall"
    }
  ];

  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      <Navigation />
      <ScrollToTop />

      {/* Floating Snowflakes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Snowflake
          className="absolute top-10 left-10 w-4 h-4 text-charcoal/10 animate-[float_6s_ease-in-out_infinite]"
          style={{ animationDelay: '0s' }}
        />
        <Snowflake
          className="absolute top-32 right-20 w-3 h-3 text-charcoal/15 animate-[float_8s_ease-in-out_infinite]"
          style={{ animationDelay: '2s' }}
        />
        <Snowflake
          className="absolute top-96 left-1/4 w-5 h-5 text-charcoal/8 animate-[float_7s_ease-in-out_infinite]"
          style={{ animationDelay: '4s' }}
        />
        <Snowflake
          className="absolute top-64 right-1/3 w-3 h-3 text-charcoal/12 animate-[float_9s_ease-in-out_infinite]"
          style={{ animationDelay: '1s' }}
        />
        <Snowflake
          className="absolute bottom-96 left-16 w-4 h-4 text-charcoal/10 animate-[float_6s_ease-in-out_infinite]"
          style={{ animationDelay: '3s' }}
        />
        <Snowflake
          className="absolute bottom-32 right-10 w-6 h-6 text-charcoal/6 animate-[float_8s_ease-in-out_infinite]"
          style={{ animationDelay: '5s' }}
        />
        <Snowflake
          className="absolute top-1/2 left-3/4 w-3 h-3 text-charcoal/14 animate-[float_7s_ease-in-out_infinite]"
          style={{ animationDelay: '2.5s' }}
        />
        <Snowflake
          className="absolute top-20 left-1/2 w-4 h-4 text-charcoal/9 animate-[float_9s_ease-in-out_infinite]"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Subtle winter background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/снежная королева.jpg')"
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-charcoal mb-8 animate-fade-in">
              Снежная Королева
            </h1>
            <p className="text-xl text-charcoal/70 mb-6 animate-fade-in-up">
              Одноактный театральный концерт
            </p>
            <p className="text-lg text-charcoal/60 italic animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              На основе сказки Ганса Христиана Андерсена
            </p>
          </div>
        </section>

        {/* Concert Description */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-center animate-fade-in">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
                Everyone knows the famous story: one frosty winter night, the Snow Queen steals away young Kai,
                turning his heart to ice. Only Gerda's love and courage can rescue him from the cold palace of
                indifference and bring warmth back to his soul.
              </p>

              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                In this enchanting theatrical concert, Orchestra 1703 brings Andersen's timeless tale to life
                through a magical blend of music, narration, and visual storytelling. Experience the journey
                from the cozy warmth of home through the icy wilderness to the Snow Queen's crystalline palace.
              </p>

              <p className="text-lg leading-relaxed text-charcoal/70">
                This unique performance combines classical orchestration with contemporary arrangements,
                creating an atmospheric soundscape that will transport audiences of all ages into the
                heart of this beloved fairy tale.
              </p>
            </div>
          </div>
        </section>

        {/* Creative Team */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal animate-fade-in">
              Участники
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-orchestra-red mr-3" />
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal">Музыка</h3>
                </div>
                <p className="text-xl text-charcoal/80 font-medium">Георгий Федоров</p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-orchestra-red mr-3" />
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal">Рассказчик</h3>
                </div>
                <p className="text-xl text-charcoal/80 font-medium">Анастасия Лазарева</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <CardContent className="p-8 text-center">
                <h2 className="font-playfair text-3xl font-bold text-charcoal mb-8">Подробнее</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orchestra-red mr-4" />
                    <div>
                      <p className="text-2xl font-bold text-charcoal">Декабрь 22</p>
                      <p className="text-lg text-charcoal/70">Четверг</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orchestra-red mr-4" />
                    <p className="text-2xl font-bold text-charcoal">20:00</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-orchestra-red hover:bg-orchestra-red/90 text-white px-12 py-6 text-xl font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Купить билеты
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Concerts */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal animate-fade-in">
              Ближайшие концерты
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {upcomingConcerts.map((concert, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4 text-orchestra-red">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{concert.date}</span>
                    </div>

                    <h3 className="font-playfair text-xl font-bold mb-2 text-charcoal">
                      {concert.title}
                    </h3>

                    <p className="text-charcoal/70 mb-4 font-medium">
                      {concert.venue}
                    </p>

                    <Button
                      size="sm"
                      className="bg-orchestra-red hover:bg-orchestra-red/90 text-white transition-all duration-300"
                    >
                      Купить билеты
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/concerts">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orchestra-red text-orchestra-red hover:bg-orchestra-red hover:text-white"
                >
                  Все концерты
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Note */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-charcoal/70 mb-4 animate-fade-in">
              Больше фото — в нашей
              <Link
                to="/gallery"
                className="text-orchestra-red hover:text-orchestra-red/80 font-medium ml-1 underline"
              >
                Галерее
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConcertEvent;
