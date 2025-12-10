import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleContactClick = () => {
    if (location.pathname === '/contact') {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.REACT_APP_NAVIGATE('/contact', { state: { scrollTo: 'contact-form' } });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <i className={`ri-scales-3-line text-2xl ${isScrolled ? 'text-teal-600' : 'text-white'}`}></i>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Nandy & Co.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Contact
            </Link>
            <a
              href="tel:02085347000"
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                isScrolled
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-white text-teal-600 hover:bg-teal-50'
              }`}
            >
              Call 020 8534 7000
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Contact
              </Link>
              <a
                href="tel:02085347000"
                className="bg-teal-600 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-700 transition-all text-center whitespace-nowrap"
              >
                Call 020 8534 7000
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
