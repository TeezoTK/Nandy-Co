import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

export default function Home() {
  useSEO({
    title: 'Immigration Solicitors Forest Gate | Nandy & Co. Solicitors E7',
    description: 'Expert immigration solicitors in Forest Gate, London E7. Specialist advice on visas, asylum, settlement & citizenship. Serving Ilford, Barking, East Ham & East London. Call 020 8534 7000.',
    keywords: 'immigration solicitors Forest Gate, immigration lawyers East London, asylum solicitors E7, visa solicitors Forest Gate, immigration law Ilford, Forest Gate solicitors',
    canonical: '/',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LegalService',
          name: 'Nandy & Co. Solicitors',
          description: 'Immigration solicitors specialising in UK visas, asylum, settlement and citizenship applications. Based in Forest Gate, serving East London and the wider UK.',
          url: `${import.meta.env.VITE_SITE_URL || ''}/`,
          telephone: '+442085347000',
          email: 'info@nandyandco.co.uk',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Forest Gate',
            addressLocality: 'London',
            postalCode: 'E7',
            addressRegion: 'Greater London',
            addressCountry: 'GB'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '51.5512345',
            longitude: '0.0234567'
          },
          areaServed: [
            { '@type': 'City', name: 'Forest Gate' },
            { '@type': 'City', name: 'Ilford' },
            { '@type': 'City', name: 'Barking' },
            { '@type': 'City', name: 'East Ham' },
            { '@type': 'City', name: 'Stratford' },
            { '@type': 'City', name: 'Leyton' }
          ],
          priceRange: '££',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '10:00',
              closes: '14:00'
            }
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '47'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Legal Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Immigration Law',
                  description: 'Visas, asylum, settlement and citizenship applications'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Asylum & Human Rights',
                  description: 'Asylum applications and human rights claims'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Family Law',
                  description: 'Divorce, child custody and financial settlements'
                }
              }
            ]
          }
        },
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' }
        ])
      ]
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('bg-white', 'shadow-md');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.remove('bg-white', 'shadow-md');
          navbar.classList.add('bg-transparent');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    const serviceSlug = serviceTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    window.REACT_APP_NAVIGATE('/services', { state: { scrollTo: serviceSlug } });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20modern%20law%20office%20interior%20with%20natural%20light%20streaming%20through%20large%20windows%2C%20clean%20minimalist%20design%20with%20wooden%20accents%20and%20comfortable%20seating%20area%2C%20warm%20welcoming%20atmosphere%20perfect%20for%20legal%20consultations%2C%20soft%20neutral%20tones%20creating%20sense%20of%20trust%20and%20professionalism&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
            alt="Nandy & Co. Solicitors - Immigration Lawyers in Forest Gate"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Immigration Solicitors<br />in Forest Gate, East London
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Expert legal support for immigration, visas, asylum and family matters. Serving Forest Gate and surrounding East London communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:02085347000"
              className="whitespace-nowrap bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-2"
            >
              <i className="ri-phone-line text-xl"></i>
              Call Our Office
            </a>
            <button
              onClick={scrollToContact}
              className="whitespace-nowrap bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Request a Consultation
            </button>
          </div>
          <p className="text-sm flex items-center justify-center gap-2">
            <i className="ri-shield-check-line text-teal-400"></i>
            Lexcel Accredited • Serving Forest Gate since 2005
          </p>
        </div>
      </section>

      {/* Immigration Law Services - Primary Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Immigration Law Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialise in helping individuals and families navigate UK immigration law
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-passport-line',
                title: 'Visas & Leave to Remain',
                description: 'Help with spouse visas, work permits, student visas and visa extensions. We guide you through applications to maximise your chances of success.'
              },
              {
                icon: 'ri-shield-user-line',
                title: 'Asylum & Human Rights',
                description: 'Compassionate support for asylum seekers and human rights cases. We understand the urgency and work to present the strongest case.'
              },
              {
                icon: 'ri-alert-line',
                title: 'Deportation & Detention',
                description: 'Urgent legal representation to challenge deportation orders and apply for bail from detention centres.'
              },
              {
                icon: 'ri-file-list-line',
                title: 'Appeals & Reviews',
                description: 'If your visa was refused, we can help. We analyse decisions, identify grounds for appeal and represent you at tribunal.'
              },
              {
                icon: 'ri-building-line',
                title: 'Sponsorship Licences',
                description: 'Helping UK employers obtain and maintain sponsor licences to hire overseas workers.'
              },
              {
                icon: 'ri-user-heart-line',
                title: 'Settlement & Citizenship',
                description: 'Applications for indefinite leave to remain (ILR) and British citizenship, including Life in the UK test guidance.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-lg mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <i className={`${service.icon} text-3xl text-teal-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2 cursor-pointer"
                >
                  Learn more
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Legal Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Other Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also provide expert advice in family law, property and employment matters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-parent-line',
                title: 'Family Law',
                description: 'Divorce, child custody and financial settlements handled with sensitivity.'
              },
              {
                icon: 'ri-home-heart-line',
                title: 'Residential Property',
                description: 'Conveyancing for buying, selling and remortgaging properties.'
              },
              {
                icon: 'ri-briefcase-line',
                title: 'Employment Law',
                description: 'Advice on unfair dismissal and workplace discrimination.'
              },
              {
                icon: 'ri-scales-3-line',
                title: 'Civil Litigation',
                description: 'Representation in contract disputes and debt recovery.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-lg mb-6">
                  <i className={`${service.icon} text-3xl text-teal-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2 cursor-pointer"
                >
                  Learn more
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Nandy & Co</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted immigration solicitors in Forest Gate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-user-star-line',
                title: 'Immigration Specialists',
                description: 'We focus on UK immigration law, with years of experience helping clients with visas, asylum and settlement'
              },
              {
                icon: 'ri-map-pin-line',
                title: 'Local to Forest Gate',
                description: 'Based in E7, serving Ilford, Barking, Stratford, East Ham and surrounding East London areas'
              },
              {
                icon: 'ri-global-line',
                title: 'Multilingual Team',
                description: 'We speak English, Pashto, Dari, Sinhala, Hindi, Urdu, Gujarati, Marathi, Bengali and Persian'
              },
              {
                icon: 'ri-award-line',
                title: 'Lexcel Accredited',
                description: 'Recognised for excellence in legal practice management and client care standards'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-full mb-6 mx-auto shadow-lg">
                  <i className={`${feature.icon} text-4xl text-teal-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-br from-teal-50 to-gray-50 px-8 py-4 rounded-xl border border-gray-100">
              <i className="ri-shield-check-line text-3xl text-teal-600"></i>
              <div className="text-left">
                <p className="font-bold text-gray-900">Lexcel Accredited Firm</p>
                <p className="text-sm text-gray-600">Recognised for high standards in legal practice and client care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-3xl text-yellow-400"></i>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              5-star reviews from clients across Forest Gate and East London
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amira Hassan',
                location: 'Forest Gate',
                text: 'The team helped me with my spouse visa application. They were professional, patient and explained everything clearly in a way I could understand. I highly recommend their immigration services.',
                rating: 5
              },
              {
                name: 'Rajesh Patel',
                location: 'Ilford',
                text: 'Excellent service for my property purchase. The solicitors were thorough, kept me informed throughout and made the whole process stress-free. Very happy with the outcome.',
                rating: 5
              },
              {
                name: 'Sarah Ahmed',
                location: 'East Ham',
                text: 'I was very stressed about my asylum case but the team were compassionate and supportive throughout. They fought hard for me and I got a positive result. Thank you.',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-xl text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full">
                    <i className="ri-user-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=nandy+and+co+solicitors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 cursor-pointer text-lg"
            >
              Read more reviews on Google
              <i className="ri-external-link-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Based in <strong>Forest Gate (E7)</strong>, we are your local immigration solicitors serving clients across East London and the wider UK.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">East London Areas:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Forest Gate',
                    'Ilford',
                    'Barking',
                    'East Ham',
                    'Stratford',
                    'Leyton',
                    'Plaistow',
                    'Upton Park',
                    'Leytonstone',
                    'Walthamstow',
                    'Canning Town',
                    'Manor Park'
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <i className="ri-map-pin-fill text-teal-600"></i>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <i className="ri-video-line text-teal-600"></i> Remote Consultations Available
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer <strong>phone and Zoom consultations</strong> for clients across the UK who need immigration law advice.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.234567890123!2d0.0234567!3d51.5512345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMzJzA0LjQiTiAwwrAwMScyNC40IkU!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nandy & Co. Solicitors - Immigration Lawyers in Forest Gate, London E7"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Need help with immigration or another legal matter? Contact us today
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-xl">
            <form data-readdy-form id="enquiry-form" action="https://readdy.ai/api/form/d4s71rp5bv6k73lc3f7g" method="POST" className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                    placeholder="Your name"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="enquiry" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Enquiry *
                </label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm resize-none"
                  placeholder="Please describe your legal matter (max 500 characters)"
                ></textarea>
                <p className="text-xs text-gray-500 mt-2">Maximum 500 characters</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <i className="ri-information-line text-amber-600"></i> <strong>Note:</strong> Please do not send confidential information through this form. We will contact you to discuss your case securely.
                </p>
              </div>

              <button
                type="submit"
                className="whitespace-nowrap w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Send Enquiry
              </button>

              <p className="text-center text-sm text-gray-600">
                We aim to respond to all enquiries within 24 working hours
              </p>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-lg">
                <i className="ri-phone-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:02085347000" className="text-teal-600 hover:text-teal-700 cursor-pointer text-lg font-semibold">
                020 8534 7000
              </a>
            </div>
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-lg">
                <i className="ri-mail-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@nandyandco.co.uk" className="text-teal-600 hover:text-teal-700 cursor-pointer">
                info@nandyandco.co.uk
              </a>
            </div>
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow-lg">
                <i className="ri-map-pin-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                Forest Gate<br />London E7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Immigration or Another Legal Matter?
          </h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Our experienced solicitors are here to help. Contact us today for clear advice and transparent fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02085347000"
              className="whitespace-nowrap bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <i className="ri-phone-line text-xl"></i>
              Call Us Now
            </a>
            <button
              onClick={scrollToContact}
              className="whitespace-nowrap bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
