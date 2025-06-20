
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
              About Orchestra 1703
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 animate-fade-in-up">
              Where classical tradition meets modern expression
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Orchestra Photo */}
            <div className="mb-12 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Orchestra 1703 performing"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Story */}
            <div className="prose prose-lg mx-auto animate-fade-in-up">
              <div className="bg-white/50 p-8 rounded-lg shadow-sm mb-8">
                <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6">Our Story</h2>
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
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-orchestra-red/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Collaborations</h3>
                  <ul className="space-y-2 text-charcoal/70">
                    <li>• Worked with Polina Gagarina</li>
                    <li>• Recorded music for films</li>
                    <li>• Featured in television productions</li>
                    <li>• International guest artists</li>
                  </ul>
                </div>

                <div className="bg-orchestra-red/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">Education</h3>
                  <ul className="space-y-2 text-charcoal/70">
                    <li>• Orchestra Academy program</li>
                    <li>• Ballet Incubator project</li>
                    <li>• Masterclasses for young musicians</li>
                    <li>• Community outreach programs</li>
                  </ul>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white/70 p-8 rounded-lg shadow-sm">
                <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6 text-center">Our Mission</h2>
                <blockquote className="text-xl font-medium text-charcoal italic text-center border-l-4 border-orchestra-red pl-6">
                  "Music is the universal language of mankind, but we prefer to speak it with a smile. 
                  Our goal is to break down the barriers between performer and audience, creating moments 
                  of pure joy and connection through the power of music."
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
