
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";

const Concerts = () => {
  const upcomingConcerts = [
    {
      date: "Декабрь 22, 2024",
      time: "20:00",
      title: "Снежная Королева",
      venue: "Мариинский театр",
      description: "Волшебный одноактный театрализованный концерт по сказке Ханса Кристиана Андерсена",
      price: "От 2,500 ₽",
      slug: "snow-queen"
    },
    {
      date: "Март 6, 2024",
      time: "19:00",
      title: "Алые паруса",
      venue: "Капелла",
      description: "По мотивам повести-феерии Александра Грина",
      price: "От 1,500 ₽",
      slug: "scarlet-sails"
    },
    {
      date: "Март 20, 2024",
      time: "20:00",
      title: "Музыка из кино на органе",
      venue: "Анненкирхе",
      description: "От Гарри Поттера до Звёздных войн — самая любимая музыка из кино",
      price: "От 2,000 ₽",
      slug: "movie-soundtracks"
    },
    {
      date: "Апрель 3, 2024",
      time: "19:30",
      title: "Алиса в стране чудес",
      venue: "Капелла",
      description: "Our signature blend of humor and timeless classical pieces",
      price: "От 1,800 ₽",
      slug: "comedy-classics"
    },
    {
      date: "Апрель 18, 2024",
      time: "19:00",
      title: "Русская классика",
      venue: "Капелла",
      description: "Волшебный вечер — от русской классики до её современного звучания",
      price: "От 1,500 ₽",
      slug: "russian-soul"
    },
    {
      date: "Июнь 2, 2025",
      time: "20:30",
      title: "Петя, волк и белая уточка",
      venue: "Театр в Новой Голландии",
      description: "Продолжение сказки «Петя и волк» на музыку Сергея Прокофьева",
      price: "От 1,700 ₽",
      slug: "modern-classics"
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
              Афиша
            </h1>
            {/* <p className="text-xl text-charcoal/70 mb-8 animate-fade-in-up">
              Погрузись в магию живого исполнения — на стыке классических традиций и современного звучания
            </p> */}
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

                    <div>
                      <Button className="w-full bg-orchestra-red hover:bg-orchestra-red/90 text-white transition-all duration-300">
                        Купить билеты
                      </Button>

                      <Link to={`/concert/${concert.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full border-orchestra-red text-orchestra-red hover:bg-orchestra-red hover:text-white transition-all duration-300 mt-[5px]"
                        >
                          Подробнее
                        </Button>
                      </Link>
                    </div>


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
