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

const Footer = () => {
  const quickLinks = [
    'Home',
    'About Us',
    'Desert Safari in Pushkar',
    'Pushkar Tour Package',
    'Experiences',
    'Pushkar Attractions',
    'Gallery',
    // 'Blog',
    // 'Contact Us'
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
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
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
                    <a href="#" className="footer-link">{link}</a>
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
                    <p>+91-7737329071</p>
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
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 40px 0 30px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-section {
            text-align: center;
          }

          .footer-section:first-child {
            text-align: left;
          }

          .social-links {
            justify-content: center;
          }

          .footer-section:first-child .social-links {
            justify-content: flex-start;
          }

          .contact-info {
            align-items: center;
          }

          .contact-item {
            text-align: left;
            max-width: 300px;
          }

          .whatsapp-float {
            margin: 0 auto;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-bottom-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 30px 0 20px;
          }

          .footer-logo h3 {
            font-size: 1.5rem;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 10px;
          }

          .social-links {
            gap: 10px;
          }

          .social-link {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
