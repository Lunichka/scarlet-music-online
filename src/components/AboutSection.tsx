
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-charcoal animate-fade-in">
          Об оркестре 1703
        </h2>

        <div className="prose prose-lg mx-auto animate-fade-in-up">
          <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
            С момента нашего основания в 2013 году оркестр 1703 переосмысливает, что значит слушать классическую музыку.
            Мы искренне верим: большое искусство не обязательно должно быть серьёзным.
          </p>

          <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
            За последние десять лет мы провели более 100 концертов, даря радость, вдохновение и волшебство зрителям по всей России.
            Наш подход — это сочетание высокого уровня исполнения, душевности и живого юмора, благодаря которому на наших концертах одинаково естественно звучат и Чайковский, и музыка из кинофильмов.
          </p>

          <p className="text-lg leading-relaxed text-charcoal/70 mb-8">
            Нам посчастливилось выступать с такими артистами, как Полина Гагарина, и создавать музыку для кино.
            Но больше всего мы гордимся той связью, которую устанавливаем с каждым зрителем —
            когда концерт превращается в диалог, а выступление — в общее переживание.
          </p>

          <div className="bg-orchestra-red/10 p-6 rounded-lg">
            <p className="text-lg font-medium text-charcoal italic">
              Мы гордимся, что выступали вместе с такими артистами, как Полина Гагарина, и участвовали в записи саундтреков к фильмам.
              Но больше всего нас вдохновляет связь со зрителем — мы превращаем концерты в живой диалог, а выступления — в общее переживание.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
