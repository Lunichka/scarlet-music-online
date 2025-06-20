
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orchestra-red/20 p-2 rounded-full">
                <span className="font-playfair text-xl font-bold text-orchestra-red">1703</span>
              </div>
              <span className="font-playfair text-lg font-semibold">Orchestra 1703</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              The most unusual orchestra in Russia, blending humor, art, and unforgettable music since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/concerts" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Concerts
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-cream/70">
                <span className="text-cream">Phone:</span><br />
                <a href="tel:+78128882233" className="hover:text-orchestra-red transition-colors">
                  +7 (812) 888-22-33
                </a>
              </p>
              <p className="text-cream/70">
                <span className="text-cream">Email:</span><br />
                <a href="mailto:orchestra1703@gmail.com" className="hover:text-orchestra-red transition-colors">
                  orchestra1703@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Orchestra 1703. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
