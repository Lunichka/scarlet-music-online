
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-charcoal animate-fade-in">
          Get in Touch
        </h2>
        <p className="text-center text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto animate-fade-in">
          Ready to experience the magic? Contact us for tickets, collaborations, or just to say hello!
        </p>
        
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
            
            <div className="bg-orchestra-red/5 p-6 rounded-lg">
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                Follow Our Journey
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Join our community of music lovers and be the first to know about upcoming performances, 
                behind-the-scenes moments, and special collaborations.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="border-charcoal/20 focus:border-orchestra-red"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="border-charcoal/20 focus:border-orchestra-red"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="border-charcoal/20 focus:border-orchestra-red"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5} 
                    className="border-charcoal/20 focus:border-orchestra-red resize-none"
                  />
                </div>
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
  );
};

export default ContactSection;
