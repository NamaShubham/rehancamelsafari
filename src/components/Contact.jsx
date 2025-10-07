import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create SMS message with form data
      const smsMessage = `Hello! I'm interested in your camel safari services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject || 'General Inquiry'}

Message: ${formData.message}

Please contact me back. Thank you!`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(smsMessage);
      
      // Phone number for SMS (your number)
      const phoneNumber = '917737329071'; // Your phone number without + symbol
      
      // Create SMS URL (sms: protocol)
      const smsUrl = `sms:${phoneNumber}?body=${encodedMessage}`;
      
      // Open SMS app
      window.location.href = smsUrl;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with Rehan Camel Safari for your unforgettable desert adventure in Pushkar</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Leave us your info</h2>
                <p>and we will get back to you.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject of your inquiry"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your requirements, preferred dates, number of guests, etc."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <MessageCircle size={20} />
                    SMS app will open with your message. Please send it to contact us directly!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-card">
                <div className="contact-card-header">
                  <Phone size={30} />
                  <h3>Phone</h3>
                </div>
                <div className="contact-card-content">
                  <a href="tel:+919414166565">+91-9414166565</a>
                  <a href="tel:+918302997703">+91-8302997703</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <Mail size={30} />
                  <h3>Email</h3>
                </div>
                <div className="contact-card-content">
                  <a href="mailto:rehancamelsafari@gmail.com">rehancamelsafari@gmail.com</a>
                  <a href="mailto:info@rehancamelsafaripushkar.com">info@rehancamelsafaripushkar.com</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <MapPin size={30} />
                  <h3>Location</h3>
                </div>
                <div className="contact-card-content">
                  <p>Near Brahma Temple, Pushkar, Rajasthan 305022</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-header">
                  <Clock size={30} />
                  <h3>Business Hours</h3>
                </div>
                <div className="contact-card-content">
                  <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                  <p>Emergency: 24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.6188082072556!2d74.55135985553366!3d26.48824294627156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bdcdfbdfa9e01%3A0x97e66416557c7a07!2sRehan%20camel%20safari!5e0!3m2!1sen!2sin!4v1759870510041!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rehan Camel Safari Location"
              ></iframe>
            </div>
            <div className="map-info">
              <h3>Rehan Camel Safari</h3>
              <p>Near Brahma Temple, Pushkar, Rajasthan 305022</p>
              <div className="map-actions">
                <a 
                  href="https://www.google.com/maps/place/Rehan+camel+safari/@26.4882429,74.5513599,17z/data=!3m1!4b1!4m6!3m5!1s0x396bdcdfbdfa9e01:0x97e66416557c7a07!8m2!3d26.4882429!4d74.5513599!16s%2Fg%2F11h0x8x8x8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-btn"
                >
                  Open in Google Maps
                </a>
                <a 
                  href="tel:+917737329071" 
                  className="map-btn secondary"
                >
                  Call for Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="quick-actions">
        <div className="container">
          <div className="quick-actions-grid">
            <a href="tel:+917737329071" className="quick-action-card">
              <Phone size={40} />
              <h3>Call Now</h3>
              <p>Speak directly with our team</p>
            </a>
            <a href="https://wa.me/917737329071" className="quick-action-card whatsapp">
              <MessageCircle size={40} />
              <h3>WhatsApp</h3>
              <p>Chat with us instantly</p>
            </a>
            <a href="mailto:shubham.nama@mydevteam.com" className="quick-action-card">
              <Mail size={40} />
              <h3>Email Us</h3>
              <p>Send us your requirements</p>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #f8f9fa;
        }

        .back-button {
          position: fixed;
          top: 100px;
          left: 20px;
          background: #f39c12;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 600;
          z-index: 100;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
        }

        .back-button:hover {
          background: #e67e22;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(243, 156, 18, 0.4);
        }

        .contact-hero {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 220px 0 200px;
          position: relative;
          overflow: hidden;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/images/images-2-1509295524t.jpg') center/cover;
          opacity: 0.2;
          z-index: 1;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-hero h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .contact-hero p {
          font-size: 1.3rem;
          opacity: 0.9;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .contact-content {
          padding: 80px 0;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .form-header {
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .form-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .contact-form {
          background: #f8f9fa;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 15px;
          border: 2px solid #e9ecef;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
          color: #333;
          width: 100%;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #f39c12;
          box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: #f39c12;
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .submit-btn:hover:not(:disabled) {
          background: #e67e22;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(243, 156, 18, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 15px;
          border-radius: 10px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #c3e6cb;
        }

        .error-message {
          background: #f8d7da;
          color: #721c24;
          padding: 15px;
          border-radius: 10px;
          margin-top: 20px;
          border: 1px solid #f5c6cb;
        }

        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .contact-card-header svg {
          color: #f39c12;
        }

        .contact-card-header h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin: 0;
          font-weight: 600;
        }

        .contact-card-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-card-content a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 1.1rem;
        }

        .contact-card-content a:hover {
          color: #f39c12;
        }

        .contact-card-content p {
          color: #666;
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .map-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .map-section h2 {
          font-size: 2.5rem;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 50px;
          font-weight: 700;
        }

        .map-container {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 400px;
        }

        .google-map {
          position: relative;
        }

        .google-map iframe {
          width: 100%;
          height: 100%;
          border-radius: 15px 0 0 15px;
        }

        .map-info {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .map-info h3 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .map-info p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .map-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .map-btn {
          background: #f39c12;
          color: white;
          text-decoration: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .map-btn:hover {
          background: #e67e22;
          transform: translateY(-2px);
        }

        .map-btn.secondary {
          background: transparent;
          color: #f39c12;
          border: 2px solid #f39c12;
        }

        .map-btn.secondary:hover {
          background: #f39c12;
          color: white;
        }

        .quick-actions {
          padding: 80px 0;
          background: white;
        }

        .quick-actions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .quick-action-card {
          background: #f8f9fa;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .quick-action-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .quick-action-card svg {
          color: #f39c12;
          margin-bottom: 20px;
        }

        .quick-action-card.whatsapp svg {
          color: #25d366;
        }

        .quick-action-card h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .quick-action-card p {
          color: #666;
          margin: 0;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-hero h1 {
            font-size: 2.5rem;
          }

          .contact-hero p {
            font-size: 1.1rem;
          }

          .form-header h2 {
            font-size: 2rem;
          }

          .contact-form {
            padding: 30px 20px;
          }

          .quick-actions-grid {
            grid-template-columns: 1fr;
          }

          .map-container {
            grid-template-columns: 1fr;
            grid-template-rows: 300px 1fr;
          }

          .google-map iframe {
            border-radius: 15px 15px 0 0;
          }

          .map-info {
            padding: 30px 20px;
          }

          .map-actions {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }

          .map-btn {
            width: auto;
            padding: 12px 20px;
            text-align: center;
          }

          .back-button {
            position: static;
            margin: 20px;
            align-self: flex-start;
          }
        }

        @media (max-width: 480px) {
          .contact-content,
          .map-section,
          .quick-actions {
            padding: 40px 0;
          }

          .map-placeholder {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;

