import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useSEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

export default function About() {
  useSEO({
    title: 'Our Immigration Solicitors Team | Nandy & Co. Forest Gate E7',
    description: 'Meet our experienced immigration solicitors in Forest Gate. Lexcel accredited, multilingual team serving East London since 2005. Expert advice on UK immigration law.',
    keywords: 'immigration solicitors team, Forest Gate lawyers, Lexcel accredited solicitors, multilingual legal team, East London immigration lawyers',
    canonical: '/about',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          name: 'Our Immigration Solicitors Team',
          description: 'Meet our experienced immigration solicitors in Forest Gate. Lexcel accredited, multilingual team serving East London since 2005.',
          url: `${import.meta.env.VITE_SITE_URL || ''}/about`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Nandy & Co. Solicitors',
            url: import.meta.env.VITE_SITE_URL || ''
          }
        },
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Our Team', url: '/about' }
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

  const languages = [
    'English', 'Pashto', 'Dari', 'Sinhala', 'Hindi',
    'Urdu', 'Gujarati', 'Marathi', 'Bengali', 'Persian'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Experienced immigration solicitors serving Forest Gate and East London communities
          </p>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Nandy &amp; Co</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Nandy &amp; Co. Solicitors</strong> has been serving the <strong>Forest Gate community</strong> since 2005. We are a local law firm with a strong focus on <strong>immigration law</strong>, helping individuals and families navigate the UK visa system, asylum applications and settlement matters.
                </p>
                <p>
                  We know that dealing with immigration issues is stressful. Many of our clients are worried about their future, separated from loved ones, or facing urgent deadlines. That's why we take the time to listen, explain your options clearly and work hard to get the right result for you.
                </p>
                <p>
                  Our immigration solicitors have helped hundreds of clients with spouse visas, work permits, asylum claims, deportation cases and citizenship applications. We understand the Home Office system and know how to present strong applications that give you the best chance of success.
                </p>
                <p>
                  Beyond immigration, we also help with family law matters, property transactions, employment disputes and civil litigation. Whatever your legal need, we're here to provide clear advice and professional representation.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20diverse%20legal%20team%20in%20modern%20law%20office%2C%20solicitors%20working%20together%20reviewing%20documents%2C%20warm%20welcoming%20atmosphere%20with%20natural%20lighting%2C%20multicultural%20team%20representing%20community%20diversity%2C%20professional%20business%20attire%2C%20collaborative%20environment%20showing%20trust%20and%20expertise&width=800&height=1000&seq=about-team-001&orientation=portrait"
                alt="Nandy & Co. Solicitors - Immigration Lawyers Team in Forest Gate"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Immigration Law Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualified solicitors with years of experience in UK immigration law
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our team of <strong>qualified immigration solicitors</strong> brings decades of combined experience helping clients with visas, asylum, deportation defence and settlement applications. We stay current with the latest immigration rules and Home Office guidance so we can give you accurate, up-to-date advice.
                </p>
                <p>
                  What makes us different is our <strong>understanding of the communities we serve</strong>. Many of our clients are navigating an unfamiliar legal system while dealing with language barriers and cultural differences. We've built a multilingual team that can communicate with you in your own language and understand your cultural background.
                </p>
                <p>
                  Whether you need help with a spouse visa, are seeking asylum, facing deportation or applying for British citizenship, our immigration solicitors have the knowledge and experience to guide you through every step of the process.
                </p>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-full mx-auto mb-6">
                <i className="ri-global-line text-4xl text-teal-600"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">We Speak Your Language</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team can assist you in the following languages
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {languages.map((language, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-xl p-6 text-center border border-gray-100">
                  <i className="ri-translate-2 text-3xl text-teal-600 mb-3"></i>
                  <p className="font-semibold text-gray-900">{language}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-lg">
              <i className="ri-information-line text-teal-600"></i> Interpreters can be arranged for other languages
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations & Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Accreditations &amp; Quality Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognised for excellence in legal services and client care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full mx-auto mb-6 shadow-lg">
                <i className="ri-award-line text-5xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lexcel Accredited</h3>
              <p className="text-gray-700 leading-relaxed">
                Awarded by the Law Society for excellence in legal practice management, client care and compliance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full mx-auto mb-6 shadow-lg">
                <i className="ri-shield-check-line text-5xl text-teal-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SRA Regulated</h3>
              <p className="text-gray-700 leading-relaxed">
                Regulated by the Solicitors Regulation Authority, meeting strict professional and ethical standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full mx-auto mb-6 shadow-lg">
                <i className="ri-star-line text-5xl text-yellow-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">5-Star Reviews</h3>
              <p className="text-gray-700 leading-relaxed">
                Highly rated by clients on Google for our immigration law services and professional approach.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Lexcel Accreditation Means</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Lexcel</strong> is the Law Society's quality mark for excellence in legal practice management and client care. It shows we are committed to providing high-quality legal services and maintaining strong compliance systems.
                </p>
                <p>
                  To maintain our Lexcel accreditation, we undergo regular independent assessments covering client care, case management, financial management, risk management and information security. This means you can trust that your case is being handled professionally and securely.
                </p>
                <p>
                  When you choose Nandy &amp; Co., you're choosing a firm that meets the highest professional standards in the legal industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Reputation */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Diverse%20community%20in%20East%20London%20Forest%20Gate%20area%2C%20multicultural%20neighborhood%20with%20local%20shops%20and%20people%2C%20welcoming%20community%20atmosphere%2C%20urban%20London%20street%20scene%20with%20cultural%20diversity%2C%20friendly%20neighborhood%20environment%20showing%20community%20connection&width=800&height=1000&seq=community-001&orientation=portrait"
                alt="Forest Gate East London Community - Immigration Solicitors Serving Local Areas"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Serving Forest Gate &amp; East London</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We are based in <strong>Forest Gate (E7)</strong> and proud to serve the diverse communities of <strong>East London</strong>. Our clients come from Ilford, Barking, East Ham, Stratford, Leyton, Plaistow, Upton Park, Leytonstone, Walthamstow, Canning Town, Wanstead and Manor Park.
                </p>
                <p>
                  Our <strong>local knowledge</strong> means we understand the specific challenges faced by residents in these areas. We've helped countless families reunite through spouse visas, supported asylum seekers through difficult times and guided many clients on their journey to British citizenship.
                </p>
                <p>
                  While we're based locally, we also serve clients <strong>across the UK</strong> through phone and Zoom consultations. Whether you're in London or elsewhere in the country, our immigration solicitors can provide expert advice and representation.
                </p>
                <p>
                  Our reputation is built on <strong>results and trust</strong>. Many of our clients come to us through recommendations from family and friends who we've helped in the past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Nandy &amp; Co</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-focus-line',
                title: 'Immigration Law Focus',
                description: 'We specialise in UK immigration law with years of experience in visas, asylum and settlement'
              },
              {
                icon: 'ri-map-pin-user-line',
                title: 'Local to You',
                description: 'Based in Forest Gate, we understand the East London community and are easy to reach'
              },
              {
                icon: 'ri-chat-check-line',
                title: 'Clear Communication',
                description: 'We explain everything in plain English and keep you informed throughout your case'
              },
              {
                icon: 'ri-hand-heart-line',
                title: 'Compassionate Approach',
                description: 'We understand immigration matters are stressful and treat every client with care and respect'
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Contact our immigration solicitors in Forest Gate for expert legal advice
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
              Get in Touch
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
