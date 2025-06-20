
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-charcoal animate-fade-in">
          About Orchestra 1703
        </h2>
        
        <div className="prose prose-lg mx-auto animate-fade-in-up">
          <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
            Since our founding in 2013, Orchestra 1703 has redefined what it means to experience classical music. 
            We believe that great art doesn't have to be serious all the time.
          </p>
          
          <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
            Over the past decade, we've performed more than 100 concerts, bringing joy and wonder to audiences 
            across Russia. Our unique approach combines world-class musicianship with genuine warmth and humor, 
            creating an atmosphere where both Tchaikovsky and movie soundtracks feel equally at home.
          </p>
          
          <p className="text-lg leading-relaxed text-charcoal/70 mb-8">
            We've had the privilege of collaborating with renowned artists like Polina Gagarina and contributing 
            our music to film productions. But what we're most proud of is the connection we forge with every 
            audience member—turning concerts into conversations and performances into shared experiences.
          </p>
          
          <div className="bg-orchestra-red/10 p-6 rounded-lg">
            <p className="text-lg font-medium text-charcoal italic">
              "Music is the universal language of mankind, but we prefer to speak it with a smile."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
