import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-teal-700 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-lg">
                <i className="ri-scales-3-line text-2xl text-teal-700"></i>
              </div>
              <div>
                <div className="text-xl font-bold">Nandy & Co.</div>
                <div className="text-xs text-teal-100">Solicitors</div>
              </div>
            </div>
            <p className="text-teal-50 text-sm leading-relaxed mb-4">
              Immigration solicitors based in Forest Gate, London. Serving East London communities since 2005.
            </p>
            <div className="flex items-center gap-2 text-sm text-white font-semibold">
              <i className="ri-shield-check-line"></i>
              <span>Lexcel Accredited</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Our Team', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-teal-50 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Immigration Law',
                'Asylum & Human Rights',
                'Family Law',
                'Residential Property',
                'Employment Law',
                'Civil Litigation'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-teal-50 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-white text-lg mt-1"></i>
                <div className="text-sm text-teal-50">
                  Forest Gate<br />
                  London E7<br />
                  United Kingdom
                </div>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-white text-lg"></i>
                <a
                  href="tel:02085347000"
                  className="text-sm text-teal-50 hover:text-white transition-colors cursor-pointer"
                >
                  020 8534 7000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-white text-lg"></i>
                <a
                  href="mailto:info@nandyandco.co.uk"
                  className="text-sm text-teal-50 hover:text-white transition-colors cursor-pointer break-all"
                >
                  info@nandyandco.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-teal-100">
              © {currentYear} Nandy & Co. Solicitors. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/legal"
                className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer"
              >
                Legal Information
              </Link>
              <a
                href="https://readdy.ai/?origin=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
