import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useSEO, generateServiceSchema, generateBreadcrumbSchema } from '../../utils/seo';

export default function Services() {
  const location = useLocation();

  useSEO({
    title: 'Immigration Law Services Forest Gate | Visa & Asylum Solicitors E7',
    description: 'Specialist immigration law services in Forest Gate: visas, asylum, deportation defence, settlement & citizenship. Transparent fees. Serving East London. Call 020 8534 7000.',
    keywords: 'immigration law services, visa solicitors Forest Gate, asylum lawyers E7, deportation defence, settlement citizenship, immigration solicitors East London',
    canonical: '/services',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateServiceSchema(
          'Immigration Law Services',
          'Comprehensive immigration law services including visas, asylum, deportation defence, settlement and citizenship applications',
          ['Forest Gate', 'Ilford', 'Barking', 'East Ham', 'Stratford', 'Leyton', 'East London']
        ),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
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
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const immigrationServices = [
    {
      icon: 'ri-passport-line',
      title: 'Visas & Leave to Remain',
      slug: 'visas-and-leave-to-remain',
      description: 'Whether you need a spouse visa, work permit, student visa or an extension to your current leave, we can help. Our immigration solicitors guide you through the application process, check all your documents are correct and submit everything on time to give you the best chance of success.'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Asylum & Human Rights',
      slug: 'asylum-and-human-rights',
      description: 'If you are seeking protection in the UK, our asylum solicitors provide compassionate support with asylum applications, fresh claims and human rights appeals. We understand how urgent and stressful these cases are and work hard to present the strongest possible case on your behalf.'
    },
    {
      icon: 'ri-alert-line',
      title: 'Deportation & Detention',
      slug: 'deportation-and-detention',
      description: 'Facing deportation or being held in an immigration detention centre is extremely stressful. Our immigration lawyers provide urgent legal representation to challenge deportation orders, apply for bail and explore all options to keep you and your family together in the UK.'
    },
    {
      icon: 'ri-building-line',
      title: 'Sponsorship Licences',
      slug: 'sponsorship-licences',
      description: 'UK employers need a sponsor licence to hire workers from overseas. We help businesses in Forest Gate and across the UK with sponsor licence applications, compliance advice and renewals. Our clear guidance helps you meet Home Office requirements and avoid costly mistakes.'
    },
    {
      icon: 'ri-file-list-line',
      title: 'Appeals & Reviews',
      slug: 'appeals-and-reviews',
      description: 'If your visa application has been refused, you may have the right to appeal or request an administrative review. Our immigration solicitors analyse refusal decisions, identify grounds for challenge and represent you at tribunal hearings to fight for the outcome you deserve.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Settlement & Citizenship',
      slug: 'settlement-and-citizenship',
      description: 'We help clients apply for indefinite leave to remain (ILR) and British citizenship. Our immigration solicitors make sure you meet all residence requirements, prepare comprehensive applications and guide you through the Life in the UK test and citizenship ceremony process.'
    }
  ];

  const otherServices = [
    {
      icon: 'ri-parent-line',
      title: 'Family Law',
      slug: 'family-law',
      description: 'Our family law solicitors handle divorce, child custody arrangements, financial settlements and domestic violence injunctions with sensitivity and professionalism. We understand these are difficult times and provide clear advice to help you move forward.'
    },
    {
      icon: 'ri-home-heart-line',
      title: 'Residential Property',
      slug: 'residential-property',
      description: 'Complete conveyancing services for property purchases, sales, remortgaging and lease extensions across London and the UK. We keep you informed at every stage and work to make your property transaction as smooth as possible.'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Employment Law',
      slug: 'employment-law',
      description: 'We represent employees in unfair dismissal claims, discrimination cases, redundancy matters and employment tribunal proceedings. If you are having problems at work, we can advise you on your rights and options.'
    },
    {
      icon: 'ri-scales-3-line',
      title: 'Civil Litigation',
      slug: 'civil-litigation',
      description: 'Expert representation in contract disputes, debt recovery, property disputes and other civil matters. We work to protect your rights and achieve the best possible outcome for your case.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Legal Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Immigration law specialists in Forest Gate, also providing family law, property and employment advice
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>We specialise in immigration law</strong>, helping individuals and families navigate the complex UK visa system, asylum applications and settlement matters. Based in <strong>Forest Gate (E7)</strong>, we serve clients across East London and the wider UK.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We pride ourselves on providing <strong>clear advice, transparent fees and local knowledge</strong>. Our multilingual team speaks English, Pashto, Dari, Sinhala, Hindi, Urdu, Gujarati, Marathi, Bengali and Persian, so we can communicate effectively with clients from all backgrounds.
          </p>
        </div>
      </section>

      {/* Immigration Law - Main Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Immigration Law Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core expertise: helping clients with UK visas, asylum, settlement and citizenship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {immigrationServices.map((service, index) => (
              <div key={index} id={service.slug} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-mt-24">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-lg mb-6">
                  <i className={`${service.icon} text-3xl text-teal-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Need help with an immigration matter? Our immigration solicitors in Forest Gate are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02085347000"
                className="whitespace-nowrap bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <i className="ri-phone-line text-xl"></i>
                Call 020 8534 7000
              </a>
              <Link
                to="/contact"
                className="whitespace-nowrap bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Request Consultation
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Other Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In addition to immigration law, we provide expert legal services in these areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherServices.map((service, index) => (
              <div key={index} id={service.slug} className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 scroll-mt-24">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg mb-6 shadow-md">
                  <i className={`${service.icon} text-3xl text-teal-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees & Transparency */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-full mx-auto mb-6">
                <i className="ri-price-tag-3-line text-4xl text-teal-600"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Clear & Transparent Fees</h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Nandy &amp; Co., we believe in <strong>complete transparency when it comes to legal fees</strong>. We understand that cost is an important consideration when choosing a solicitor, especially for immigration matters.
              </p>
              
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Fee Promise:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-xl text-teal-600 mt-1"></i>
                    <span><strong>Clear explanation before work begins</strong> – We discuss all fees upfront so you know exactly what to expect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-xl text-teal-600 mt-1"></i>
                    <span><strong>Fixed fees where possible</strong> – Many of our immigration services are offered at fixed prices for your peace of mind</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-xl text-teal-600 mt-1"></i>
                    <span><strong>No hidden costs</strong> – We provide a detailed breakdown of all charges including disbursements and Home Office fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-xl text-teal-600 mt-1"></i>
                    <span><strong>Payment plans available</strong> – We can discuss flexible payment arrangements where appropriate</span>
                  </li>
                </ul>
              </div>

              <p>
                Every case is different, so we encourage you to <strong>contact our office for an accurate quote</strong> based on your specific circumstances. During your initial consultation, we will explain the likely costs and answer any questions you have about fees.
              </p>

              <p className="text-center font-semibold text-gray-900">
                Call us on <a href="tel:02085347000" className="text-teal-600 hover:text-teal-700 cursor-pointer">020 8534 7000</a> or use our enquiry form to discuss your case and get a clear fee estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Contact our immigration solicitors in Forest Gate for expert legal advice and transparent fees
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02085347000"
              className="whitespace-nowrap bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <i className="ri-phone-line text-xl"></i>
              020 8534 7000
            </a>
            <Link
              to="/contact"
              className="whitespace-nowrap bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
            >
              Send Enquiry
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
