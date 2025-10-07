import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';

const Footer = ({ onHomeClick, onAboutClick, onGalleryClick, onContactClick }) => {
  const handleNavigation = (navFunction) => {
    if (navFunction) {
      navFunction();
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const quickLinks = [
    { name: 'Home', onClick: () => handleNavigation(onHomeClick) },
    { name: 'About Us', onClick: () => handleNavigation(onAboutClick) },
    // { name: 'Desert Safari in Pushkar', onClick: null },
    // { name: 'Pushkar Tour Package', onClick: null },
    // { name: 'Experiences', onClick: null },
    // { name: 'Pushkar Attractions', onClick: null },
    { name: 'Gallery', onClick: () => handleNavigation(onGalleryClick) },
    // { name: 'Blog', onClick: null },
    { name: 'Contact Us', onClick: () => handleNavigation(onContactClick) }
  ];

  const tourPackages = [
    'Camel Cart Safari',
    'Arabian Night with Cultural Show',
    'Dinner On The Dunes',
    'Festival / Fair Special Package',
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <h3>Rehan Camel Safari</h3>
              </div>
              <p className="footer-description">
                Rehan Camel Safari is the best tour provider in Pushkar. We offer unique experiences 
                in the Thar Desert, crafted to meet your budget and preferences. Our philosophy is 
                simple - every client deserves the best, and we strive to exceed your expectations. 
                Join us for an unforgettable adventure.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/rehan.camelsafari" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/rehan_camel_safari_/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.onClick ? (
                      <button onClick={link.onClick} className="footer-link footer-button">
                        {link.name}
                      </button>
                    ) : (
                      <a href="#" className="footer-link">{link.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tour Packages */}
            <div className="footer-section">
              <h4 className="footer-title">Tour Packages</h4>
              <ul className="footer-links">
                {tourPackages.map((pkg, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{pkg}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} />
                  <div>
                    <strong>Address</strong>
                    <p>Near Brahma chowk, Badi Basti, Pushkar, Rajasthan 305022</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <div>
                    <strong>Phone</strong>
                    <p>+91-7737329071 <br /> +91-8905011430</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <div>
                    <strong>Email</strong>
                    <p>rehandesert@gmail.com<br />info@rehandesert.com</p>
                  </div>
                </div>
              </div>
              {/* <a href="https://wa.me/919414166565" className="whatsapp-float">
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; Copyright 2025 Rehan Camel Safari Pushkar. All Rights Reserved</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Terms and Conditions</a>
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Refund & Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #2c3e50;
          color: white;
          margin-top: auto;
        }

        .footer-main {
          padding: 60px 0 40px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-logo h3 {
          color: #f39c12;
          font-size: 1.8rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .footer-description {
          color: #bdc3c7;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(243, 156, 18, 0.1);
          border: 1px solid #f39c12;
          border-radius: 50%;
          color: #f39c12;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #f39c12;
          color: white;
          transform: translateY(-2px);
        }

        .footer-title {
          color: #f39c12;
          font-size: 1.2rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-link {
          color: #bdc3c7;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
          display: block;
          padding: 2px 0;
        }

        .footer-link:hover {
          color: #f39c12;
          padding-left: 5px;
        }

        .footer-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: inherit;
          font-family: inherit;
          color: inherit;
          text-align: left;
          padding: 0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 25px;
        }

        .contact-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .contact-item svg {
          color: #f39c12;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .contact-item strong {
          color: white;
          font-size: 14px;
          display: block;
          margin-bottom: 5px;
        }

        .contact-item p {
          color: #bdc3c7;
          font-size: 13px;
          line-height: 1.4;
          margin: 0;
        }

        .whatsapp-float {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: white;
          padding: 12px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .whatsapp-float:hover {
          background: #128C7E;
          transform: translateY(-2px);
        }

        .footer-bottom {
          background: #1a252f;
          padding: 20px 0;
          border-top: 1px solid #34495e;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          color: #bdc3c7;
          font-size: 13px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-bottom-link {
          color: #bdc3c7;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #f39c12;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 50px 0 30px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-section {
            text-align: center;
          }

          .footer-section:first-child {
            text-align: center;
          }

          .footer-logo h3 {
            font-size: 1.6rem;
            margin-bottom: 15px;
          }

          .footer-description {
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 30px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }

          .social-links {
            justify-content: center;
            gap: 20px;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }

          .footer-title {
            font-size: 1.3rem;
            margin-bottom: 25px;
          }

          .footer-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            max-width: 400px;
            margin: 0 auto;
          }

          .footer-link, .footer-button {
            font-size: 15px;
            padding: 8px 0;
            text-align: center;
          }

          .contact-info {
            align-items: center;
            max-width: 350px;
            margin: 0 auto;
          }

          .contact-item {
            text-align: center;
            flex-direction: column;
            gap: 8px;
            padding: 15px;
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
            margin-bottom: 15px;
          }

          .contact-item svg {
            align-self: center;
          }

          .contact-item strong {
            font-size: 15px;
          }

          .contact-item p {
            font-size: 14px;
            line-height: 1.5;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .footer-bottom-links {
            justify-content: center;
            gap: 25px;
          }

          .footer-bottom-link {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 40px 0 25px;
          }

          .footer-content {
            gap: 35px;
          }

          .footer-logo h3 {
            font-size: 1.4rem;
          }

          .footer-description {
            font-size: 14px;
            padding: 0 10px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 0 20px;
          }

          .footer-link, .footer-button {
            font-size: 14px;
            padding: 10px 15px;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            margin: 0 5px;
          }

          .social-links {
            gap: 15px;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .contact-item {
            padding: 12px;
            margin-bottom: 12px;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 15px;
          }

          .footer-bottom-link {
            font-size: 13px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
