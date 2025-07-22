
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <ScrollToTop />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 animate-fade-in">
              Оставайтесь на связи
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 animate-fade-in-up">
              Хочешь прикоснуться к волшебству? Свяжись с нами, чтобы купить билеты, предложить сотрудничество или просто поздороваться!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="flex items-center space-x-4">
                  <div className="bg-orchestra-red/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-orchestra-red" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal">Телефон</h3>
                    <a
                      href="tel:+78128882233"
                      className="text-charcoal/70 hover:text-orchestra-red transition-colors duration-300"
                    >
                      +7 (812) 888-22-33
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orchestra-red/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-orchestra-red" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal">Почта</h3>
                    <a
                      href="mailto:orchestra1703@gmail.com"
                      className="text-charcoal/70 hover:text-orchestra-red transition-colors duration-300"
                    >
                      orchestra1703@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-orchestra-red/5 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4">
                    Следите за нами
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white/70 p-3 rounded-full hover:bg-orchestra-red hover:text-white transition-all duration-300"
                    >
                      <span className="text-sm font-medium">ВК</span>
                    </a>
                    <a
                      href="#"
                      className="bg-white/70 p-3 rounded-full hover:bg-orchestra-red hover:text-white transition-all duration-300"
                    >
                      <span className="text-sm font-medium">YouTube</span>
                    </a>
                  </div>
                </div>

                <div className="bg-orchestra-red/5 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                    Присоединиться к нам
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Стань частью нашей музыкальной семьи и будь в курсе новых концертов, закулисья и особых творческих коллабораций.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">Отправь нам сообщение</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Иван"
                        className="border-charcoal/20 focus:border-orchestra-red"
                      />
                      <Input
                        placeholder="Иванов"
                        className="border-charcoal/20 focus:border-orchestra-red"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="ivan.ivanov@yandex.ru"
                      className="border-charcoal/20 focus:border-orchestra-red"
                    />
                    <Input
                      placeholder="Тема письма"
                      className="border-charcoal/20 focus:border-orchestra-red"
                    />
                    <Textarea
                      placeholder="Здравствуйте, уважаемый оркестр!"
                      rows={6}
                      className="border-charcoal/20 focus:border-orchestra-red resize-none"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-orchestra-red hover:bg-orchestra-red/90 text-white transition-all duration-300"
                    >
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
