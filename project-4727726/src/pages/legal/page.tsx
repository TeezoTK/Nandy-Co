import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useSEO, generateWebPageSchema, generateBreadcrumbSchema } from '../../utils/seo';

export default function Legal() {
  useSEO({
    title: 'Legal Information & Policies | Nandy & Co. Solicitors Forest Gate',
    description: 'Complaints procedure, privacy policy and legal information for Nandy & Co. Solicitors. SRA regulated, Lexcel accredited immigration solicitors in Forest Gate, London E7.',
    keywords: 'legal policies, complaints procedure, privacy policy, SRA regulated solicitors, Lexcel accredited',
    canonical: '/legal',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebPageSchema(
          'Legal Information & Policies',
          'Complaints procedure, privacy policy and legal information for Nandy & Co. Solicitors',
          '/legal'
        ),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Legal Information', url: '/legal' }
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Legal Information</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Important information about our services, policies and procedures
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Complaints Procedure', href: '#complaints' },
              { label: 'Privacy Policy', href: '#privacy' },
              { label: 'Cookie Policy', href: '#cookies' },
              { label: 'Terms of Service', href: '#terms' }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="whitespace-nowrap bg-teal-100 hover:bg-teal-200 text-teal-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Complaints Procedure */}
      <section id="complaints" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-xl mb-6">
              <i className="ri-feedback-line text-4xl text-teal-600"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complaints Procedure</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              At <strong>Nandy &amp; Co. Solicitors</strong>, we are committed to providing high-quality legal services to all our clients. However, if you are unhappy with any aspect of our service, we want to hear from you.
            </p>

            <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Make a Complaint</h3>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-gray-700">
                  <strong>Contact us directly:</strong> Please raise your concerns with the solicitor handling your case or contact our office manager at <a href="mailto:info@nandyandco.co.uk" className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer">info@nandyandco.co.uk</a> or call <a href="tel:02085347000" className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer">020 8534 7000</a>
                </li>
                <li className="text-gray-700">
                  <strong>Written complaints:</strong> You can submit a written complaint by email or post to our Forest Gate office. Please include your name, contact details, case reference (if applicable), and a clear description of your complaint.
                </li>
                <li className="text-gray-700">
                  <strong>Our response:</strong> We will acknowledge your complaint within 3 working days and provide a full response within 21 days. If we need more time to investigate, we will keep you informed.
                </li>
                <li className="text-gray-700">
                  <strong>Resolution:</strong> We will work with you to resolve the issue fairly and promptly. If appropriate, we may offer remedies such as an apology, explanation, or fee adjustment.
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">If You Remain Dissatisfied</h3>
              <p className="mb-4">
                If you are not satisfied with our response, you have the right to refer your complaint to:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Legal Ombudsman</h4>
                  <p className="text-gray-700 mb-2">
                    The Legal Ombudsman investigates complaints about legal service providers in England and Wales.
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Address:</strong> PO Box 6806, Wolverhampton, WV1 9WJ</li>
                    <li><strong>Phone:</strong> 0300 555 0333</li>
                    <li><strong>Email:</strong> enquiries@legalombudsman.org.uk</li>
                    <li><strong>Website:</strong> <a href="https://www.legalombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 cursor-pointer">www.legalombudsman.org.uk</a></li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Note: You must usually refer your complaint to the Legal Ombudsman within 6 months of our final response and within 6 years of the issue arising (or within 3 years of when you should reasonably have known about it).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Solicitors Regulation Authority (SRA)</h4>
                  <p className="text-gray-700 mb-2">
                    You can also report concerns about our conduct to the SRA, which regulates solicitors in England and Wales.
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li><strong>Website:</strong> <a href="https://www.sra.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 cursor-pointer">www.sra.org.uk</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-xl mb-6">
              <i className="ri-shield-user-line text-4xl text-teal-600"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Nandy &amp; Co. Solicitors</strong> is committed to protecting your privacy and personal data. This policy explains how we collect, use, and safeguard your information in accordance with UK data protection laws including the UK GDPR and Data Protection Act 2018.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h3>
              <p className="mb-4">When you instruct us or enquire about our services, we may collect:</p>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Personal details (name, address, date of birth, contact information)</li>
                <li>Immigration status and documentation</li>
                <li>Financial information (where relevant to your case)</li>
                <li>Family and relationship information</li>
                <li>Employment and education history</li>
                <li>Any other information relevant to your legal matter</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
              <p className="mb-4">We use your personal data to:</p>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Provide legal advice and representation</li>
                <li>Prepare and submit applications to the Home Office and other authorities</li>
                <li>Communicate with you about your case</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Maintain accurate records and accounts</li>
                <li>Improve our services</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h3>
              <p className="text-gray-700">
                We process your personal data based on: (1) <strong>Contract</strong> – to provide legal services you have instructed us to perform; (2) <strong>Legal obligation</strong> – to comply with professional and regulatory requirements; (3) <strong>Legitimate interests</strong> – to run our business effectively and provide quality legal services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security &amp; Retention</h3>
              <p className="mb-4 text-gray-700">
                We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Your information is stored securely and accessed only by authorized personnel.
              </p>
              <p className="text-gray-700">
                We retain your data for as long as necessary to provide our services and comply with legal obligations. Client files are typically retained for 7 years after the conclusion of a matter, in line with professional requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h3>
              <p className="mb-4">Under UK data protection law, you have the right to:</p>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data (in certain circumstances)</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4 text-gray-700">
                To exercise these rights, please contact us at <a href="mailto:info@nandyandco.co.uk" className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer">info@nandyandco.co.uk</a>
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <p className="text-gray-700">
                <strong>Questions or concerns?</strong> If you have any questions about how we handle your data, please contact us. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 cursor-pointer">www.ico.org.uk</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookies" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-xl mb-6">
              <i className="ri-file-shield-line text-4xl text-teal-600"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              This website uses cookies to improve your browsing experience and help us understand how visitors use our site.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h3>
              <p className="text-gray-700">
                Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and provide a better user experience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-gray-700">
                    We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and services. These cookies collect anonymous information.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h3>
              <p className="text-gray-700">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing cookies. Please note that disabling cookies may affect the functionality of this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-xl mb-6">
              <i className="ri-file-text-line text-4xl text-teal-600"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              These terms govern your use of our website and the provision of legal services by <strong>Nandy &amp; Co. Solicitors</strong>.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Regulation</h3>
              <p className="text-gray-700">
                Nandy &amp; Co. Solicitors is authorized and regulated by the Solicitors Regulation Authority (SRA). We comply with the SRA Standards and Regulations, including the SRA Code of Conduct for Solicitors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Care &amp; Engagement</h3>
              <p className="mb-4 text-gray-700">
                When you instruct us, we will provide you with:
              </p>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>A client care letter setting out the terms of our engagement</li>
                <li>Clear information about our fees and costs</li>
                <li>Details of the solicitor handling your matter</li>
                <li>Information about our complaints procedure</li>
                <li>Details of our professional indemnity insurance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fees &amp; Payment</h3>
              <p className="text-gray-700">
                Our fees will be explained clearly before we begin work on your matter. We may require payment on account before commencing work. Invoices are payable within 14 days unless otherwise agreed. We reserve the right to charge interest on overdue accounts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h3>
              <p className="text-gray-700">
                Our liability to you is limited in accordance with our professional indemnity insurance and applicable law. We maintain professional indemnity insurance in accordance with SRA requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Disclaimer</h3>
              <p className="text-gray-700">
                The information on this website is for general guidance only and does not constitute legal advice. We recommend that you obtain specific legal advice for your particular circumstances. We do not accept liability for any loss arising from reliance on information contained on this website.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h3>
              <p className="text-gray-700">
                All content on this website, including text, images, and logos, is the property of Nandy &amp; Co. Solicitors and is protected by copyright law. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            If you have any questions about these policies or our legal services, please get in touch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02085347000"
              className="whitespace-nowrap bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <i className="ri-phone-line text-xl"></i>
              020 8534 7000
            </a>
            <a
              href="mailto:info@nandyandco.co.uk"
              className="whitespace-nowrap bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <i className="ri-mail-line text-xl"></i>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
