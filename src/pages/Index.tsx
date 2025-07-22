
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ConcertCard from "@/components/ConcertCard";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SubscriptionPopup from "@/components/SubscriptionPopup";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredConcerts = [
    {
      date: "Март 6",
      time: "19:00",
      title: "Алые паруса",
      venue: "Капелла",
      description: "Сказочная ночь русской классики с современным орнаментом"
    },
    {
      date: "Март 20",
      time: "20:00",
      title: "Музыка из кино на органе",
      venue: "Анненкирхе",
      description: "От Гарри Поттера до Звездных войн –– ваша любимая музыка"
    },
    {
      date: "Апрель 3",
      time: "19:30",
      title: "Пер Гюнт",
      venue: "Анненкирхе",
      description: "Норвежские пейзажи и главные герои обретают жизнь на обгоревших стенах Анненкирхе"
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
            Ближайшие концерты
          </h2>
          <p className="text-center text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto animate-fade-in">
            Погрузись в магию живого исполнения — на стыке классических традиций и современного звучания
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
                Смотреть все события
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-charcoal animate-fade-in">
            Кто мы
          </h2>

          <div className="prose prose-lg mx-auto animate-fade-in-up">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              С момента своего основания в 2013 году оркестр 1703 переосмысливает само представление о том, что значит слушать классическую музыку.
              Мы верим, что великое искусство не обязательно должно быть всегда серьёзным.
            </p>

            <p className="text-lg leading-relaxed text-charcoal/70 mb-8">
              За последнее десятилетие мы дали более 100 концертов по всей России, объединяя виртуозное мастерство и искреннюю теплоту — чтобы дарить зрителям радость, удивление и живые эмоции.
            </p>

            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-orchestra-red text-orchestra-red hover:bg-orchestra-red hover:text-white"
              >
                Больше о нас
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
