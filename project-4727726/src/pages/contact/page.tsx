import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

export default function Contact() {
  const location = useLocation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  useSEO({
    title: 'Contact Immigration Solicitors Forest Gate | Nandy & Co. E7',
    description: 'Contact our immigration solicitors in Forest Gate, London E7. Phone, email or visit our office. Remote consultations available UK-wide. Call 020 8534 7000 today.',
    keywords: 'contact immigration solicitors, Forest Gate solicitors contact, immigration lawyers E7, legal consultation Forest Gate',
    canonical: '/contact',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          name: 'Contact Immigration Solicitors Forest Gate',
          description: 'Contact our immigration solicitors in Forest Gate, London E7. Phone, email or visit our office.',
          url: `${import.meta.env.VITE_SITE_URL || ''}/contact`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Nandy & Co. Solicitors',
            url: import.meta.env.VITE_SITE_URL || ''
          }
        },
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ])
      ]
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg-white', 'shadow-md');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.remove('bg-white', 'shadow-md');
          navbar.classList.add('bg-transparent');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === 'contact-form') {
      setTimeout(() => {
        const element = document.getElementById('contact-form-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = formData.get('message') as string;

    if (message && message.length > 500) {
      setFormStatus('error');
      setFormMessage('Your message must be 500 characters or less.');
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form/d4s72hp5bv6k73lc3f80', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thank you for your enquiry. We aim to respond within 24 working hours.');
        form.reset();
      } else {
        setFormStatus('error');
        setFormMessage('Something went wrong. Please try again or call us on 020 8534 7000.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Something went wrong. Please try again or call us on 020 8534 7000.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Get in touch with our immigration solicitors in Forest Gate
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mx-auto mb-6 shadow-lg">
                <i className="ri-phone-line text-4xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak to our team</p>
              <a
                href="tel:02085347000"
                className="text-2xl font-bold text-teal-600 hover:text-teal-700 cursor-pointer"
              >
                020 8534 7000
              </a>
              <p className="text-sm text-gray-500 mt-4">For urgent matters</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mx-auto mb-6 shadow-lg">
                <i className="ri-mail-line text-4xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send your enquiry</p>
              <a
                href="mailto:info@nandyandco.co.uk"
                className="text-xl font-bold text-teal-600 hover:text-teal-700 cursor-pointer break-all"
              >
                info@nandyandco.co.uk
              </a>
              <p className="text-sm text-gray-500 mt-4">24 hour response time</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mx-auto mb-6 shadow-lg">
                <i className="ri-map-pin-line text-4xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our office</p>
              <p className="text-lg font-semibold text-gray-900">
                Forest Gate<br />
                London E7<br />
                United Kingdom
              </p>
              <p className="text-sm text-gray-500 mt-4">By appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form & Map */}
      <section id="contact-form-section" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send an Enquiry</h2>
              <p className="text-lg text-gray-700 mb-8">
                Complete the form below and we will get back to you as soon as possible.
              </p>

              <form
                data-readdy-form
                id="contact-enquiry-form"
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="area_of_law" className="block text-sm font-semibold text-gray-900 mb-2">
                    Area of Law *
                  </label>
                  <select
                    id="area_of_law"
                    name="area_of_law"
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm cursor-pointer"
                  >
                    <option value="">Please select...</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Asylum">Asylum</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Property">Property</option>
                    <option value="Employment">Employment</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Enquiry *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={500}
                    disabled={formStatus === 'submitting'}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm resize-none"
                    placeholder="Please describe your legal matter (max 500 characters)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-2">Maximum 500 characters</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-900">
                    <i className="ri-information-line text-amber-600"></i> <strong>Important:</strong> Please do not send confidential information through this form. We will contact you to discuss your case securely.
                  </p>
                </div>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
                    <p className="text-green-800">{formMessage}</p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <i className="ri-error-warning-line text-2xl text-red-600"></i>
                    <p className="text-red-800">{formMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="whitespace-nowrap w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our office is in Forest Gate, easily accessible from across East London.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.234567890123!2d0.0234567!3d51.5512345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMzJzA0LjQiTiAwwrAwMScyNC40IkU!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nandy & Co. Solicitors - Immigration Lawyers Forest Gate London E7"
                ></iframe>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
                    { day: 'Sunday', hours: 'Closed' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="font-semibold text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-6 text-center">
                  <i className="ri-calendar-line text-teal-600"></i> Appointments recommended - call ahead to book
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <i className="ri-video-line text-teal-600"></i> Remote Consultations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Can't visit our Forest Gate office? We offer <strong>phone and Zoom consultations</strong> for clients across the UK. Our immigration solicitors can provide expert advice wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
