import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

const Header = ({ onAboutClick, onHomeClick, onGalleryClick, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <button onClick={onHomeClick} className="logo-link">
              <h2>Rehan Camel Safari</h2>
            </button>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              {/* <li><a href="#packages" className="nav-link">Desert Safari</a></li> */}
              {/* <li><a href="#packages" className="nav-link">Safari Packages</a></li>
              <li><a href="#experiences" className="nav-link">Experiences</a></li> */}
              <li><button onClick={onGalleryClick} className="nav-link">Gallery</button></li>
              <li><button onClick={onAboutClick} className="nav-link">About Us</button></li>
              <li><button onClick={onContactClick} className="nav-link">Contact Us</button></li>
            </ul>
          </nav>

          <div className="header-contact">
            <a href="tel:+917737329071" className="contact-item">
              <Phone size={18} />
              <span>+917737329071</span>
            </a>
            <a href="https://wa.me/917737329071" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
              <MessageCircle size={18} />
            </a>
            <a href="mailto:info@rehancamelsafari.com" className="contact-item">
              <Mail size={18} />
            </a>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 8px 0;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
          padding: 5px 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-link {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .logo h2 {
          color: #f39c12;
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0;
          transition: color 0.3s ease;
        }

        .logo-link:hover h2 {
          color: #e67e22;
        }

        .nav ul {
          display: flex;
          list-style: none;
          gap: 30px;
          align-items: center;
        }

        .nav ul li {
          display: flex;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-size: inherit;
          font-family: inherit;
          padding: 8px 12px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .nav-link:hover {
          color: #f39c12;
        }

        .header-contact {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          color: #333;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: #f39c12;
        }

        .contact-item.whatsapp:hover {
          color: #25d366;
        }

        .contact-item span {
          font-size: 14px;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
        }

        @media (max-width: 768px) {
          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transform: translateY(-20px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav ul {
            flex-direction: column;
            padding: 20px;
            gap: 15px;
          }

          .header-contact {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .logo h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .logo h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

