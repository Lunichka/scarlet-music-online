
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
              Get in Touch
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 animate-fade-in-up">
              Ready to experience the magic? Contact us for tickets, collaborations, or just to say hello!
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
                    <h3 className="font-playfair text-xl font-semibold text-charcoal">Phone</h3>
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
                    <h3 className="font-playfair text-xl font-semibold text-charcoal">Email</h3>
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
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white/70 p-3 rounded-full hover:bg-orchestra-red hover:text-white transition-all duration-300"
                    >
                      <span className="text-sm font-medium">VK</span>
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
                    Join Our Community
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Be part of our musical family and stay updated with our latest performances, 
                    behind-the-scenes moments, and special collaborations.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="First Name" 
                        className="border-charcoal/20 focus:border-orchestra-red"
                      />
                      <Input 
                        placeholder="Last Name" 
                        className="border-charcoal/20 focus:border-orchestra-red"
                      />
                    </div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="border-charcoal/20 focus:border-orchestra-red"
                    />
                    <Input 
                      placeholder="Subject" 
                      className="border-charcoal/20 focus:border-orchestra-red"
                    />
                    <Textarea 
                      placeholder="Your Message" 
                      rows={6} 
                      className="border-charcoal/20 focus:border-orchestra-red resize-none"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-orchestra-red hover:bg-orchestra-red/90 text-white transition-all duration-300"
                    >
                      Send Message
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
