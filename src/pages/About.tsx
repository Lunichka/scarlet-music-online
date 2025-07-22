
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <ScrollToTop />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 animate-fade-in">
              Об оркестре 1703
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 animate-fade-in-up">
              Где традиции классики обретают современное выражение

            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Orchestra Photo */}
            <div className="mb-12 animate-fade-in">
              <img
                src="public/images/qOz4gjMY6Ew.jpg"
                alt="Orchestra 1703 performing"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Story */}
            <div className="prose prose-lg mx-auto animate-fade-in-up">
              <div className="bg-white/50 p-8 rounded-lg shadow-sm mb-8">
                <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">Наша история</h2>
                <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
                  С момента нашего основания в 2013 году оркестр 1703 переосмысливает, что значит слушать классическую музыку.
                  Мы искренне верим: большое искусство не обязательно должно быть серьёзным.
                </p>

                <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                  За последние десять лет мы провели более 100 концертов, даря радость, вдохновение и волшебство зрителям по всей России.
                  Наш подход — это сочетание высокого уровня исполнения, душевности и живого юмора, благодаря которому на наших концертах одинаково естественно звучат и Чайковский, и музыка из кинофильмов.
                </p>

                <p className="text-lg leading-relaxed text-charcoal/70 mb-8">
                  Мы гордимся, что выступали вместе с такими артистами, как Полина Гагарина, и участвовали в записи саундтреков к фильмам.
                  Но больше всего нас вдохновляет связь со зрителем — мы превращаем концерты в живой диалог, а выступления — в общее переживание.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-orchestra-red/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Коллаборации</h3>
                  <ul className="space-y-2 text-charcoal/70">
                    <li>• Совместные выступления с Полиной Гагариной</li>
                    <li>• Запись музыки для кинофильмов</li>
                    <li>• Участие в телевизионных проектах</li>
                    <li>• Приглашённые артисты из разных стран</li>
                  </ul>
                </div>

                <div className="bg-orchestra-red/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Образование</h3>
                  <ul className="space-y-2 text-charcoal/70">
                    <li>• Программа «Оркестровая академия»</li>
                    <li>• Проект «Балетный инкубатор»</li>
                    <li>• Мастер-классы для юных музыкантов</li>
                    <li>• Открытые программы для местного сообщества</li>
                  </ul>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white/70 p-8 rounded-lg shadow-sm">
                <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6 text-center">Наша миссия</h2>
                <blockquote className="text-xl font-medium text-charcoal italic text-center border-l-4 border-orchestra-red pl-6">
                  «Музыка — это универсальный язык человечества,
                  но мы предпочитаем говорить на нём с улыбкой.

                  Наша цель — стереть границы между сценой и залом,
                  создавая моменты чистой радости и настоящей связи
                  через силу музыки.»
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
