
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
              <span className="font-playfair text-lg font-semibold">Оркестр 1703</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Самый необычный оркестр России, в котором с 2013 года сочетаются юмор, искусство и незабываемая музыка.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/concerts" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Афиша
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/70 hover:text-orchestra-red transition-colors text-sm">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm">
              <p className="text-cream/70">
                <span className="text-cream">Телефон:</span><br />
                <a href="tel:+78128882233" className="hover:text-orchestra-red transition-colors">
                  +7 (812) 888-22-33
                </a>
              </p>
              <p className="text-cream/70">
                <span className="text-cream">Почта:</span><br />
                <a href="mailto:orchestra1703@gmail.com" className="hover:text-orchestra-red transition-colors">
                  orchestra1703@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Оркестр 1703. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
