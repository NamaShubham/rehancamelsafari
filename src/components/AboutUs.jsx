import React from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Star, Users, Calendar, Award } from 'lucide-react';

const AboutUs = ({ onBack }) => {
  return (
    <div className="about-us-page">
      {/* Back Button */}
      <button onClick={onBack} className="back-button">
        <ArrowLeft size={20} />
        Back to Home
      </button>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <h2>Rehan Camel Safari Pushkar</h2>
          <p className="hero-subtitle">Your Gateway to Authentic Desert Adventures</p>
        </div>
        <div className="about-hero-image">
          <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Desert Safari" />
        </div>
      </section>

      {/* Main About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-main">
            <h2>About Us</h2>
            <h3>Rehan Camel Safari Pushkar</h3>
            
            <p>
              Pushkar, also known as the Holy City, is a beautiful <strong>desert town in Rajasthan</strong> that attracts travellers from all over the world. We understand that travellers want to experience Pushkar uniquely and that's why your ideal travel partner offers <strong>non-touristic safari options</strong> that will allow you to witness the exotic and enigmatic sites with the beauty of Pushkar like never before.
            </p>

            <p>
              At <strong>Rehan Camel Safari</strong>, we have a team of professionals who are local to the area and have extensive knowledge about the city's history, culture, traditions and desert area. Our team of seasoned tour guides is passionate about what they do and will take you on an offbeat journey that won't be forgotten. Our <strong>non-touristic safari packages</strong> include picturesque sightseeing with camel safari in a far-stretched desert area, doing the most common things uncommonly with offbeat tracks and promoting healthy <strong>tourism in Pushkar</strong>.
            </p>

            <p>
              We are a dedicated tour operator based in Rajasthan, especially Pushkar, with more than 15 years of experience in providing personalised and unforgettable travel experiences to our clients from all over the world. Our commitment to customer satisfaction is unparalleled. We offer much more than just <strong>Desert Safari packages, Desert Camp, Camel Safari, Jeep Safari, and Pushkar Tours</strong> - we promise to deliver an experience that will stay with you for a lifetime.
            </p>

            <p>
              At <strong>Rehan Camel Safari</strong>, we pride ourselves on being the pioneers of luxury in Pushkar. Our renowned service and exceptional facilities are sure to leave you with a fresh perspective on the Holy City. We offer authentic and world-class hospitality, ensuring that customers have a comfortable and enjoyable trip. We provide the best hotels and tents to make your <strong>stay in Pushkar</strong> hassle-free.
            </p>

            <p>
              We understand that every traveller is unique and has different needs and preferences. That's why we work closely with our clients to create a customised itinerary that suits their interests, budgets and schedules. Our TripAdvisor reputation and Google reviews say it all. We aim to help tourists explore the beauty of Pushkar and create an unforgettable travel experience. Do not miss out on the opportunity to explore this breathtaking destination with your loved ones. Come visit and experience the magic of <strong>Pushkar</strong> firsthand.
            </p>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-icon">
                <Users size={40} />
              </div>
              <div className="stat-content">
                <h4>5000+</h4>
                <p>Happy Travelers</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Calendar size={40} />
              </div>
              <div className="stat-content">
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Star size={40} />
              </div>
              <div className="stat-content">
                <h4>4.9</h4>
                <p>Rating</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Award size={40} />
              </div>
              <div className="stat-content">
                <h4>100+</h4>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Message Section */}
      <section className="owner-message">
        <div className="container">
          <div className="owner-content">
            <div className="owner-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Rehan - Owner" />
              <div className="owner-badge">
                <h4>About Owner</h4>
              </div>
            </div>
            
            <div className="owner-text">
              <h2>Message from Rehan</h2>
              
              <p>Hello Travellers,</p>
              
              <p>
                Myself Rehan, the founder of <strong>Rehan Camel Safari</strong>. I have a deep passion for travel and tourism, which has led me to explore the beauty of Rajasthan and gain a deep understanding of the needs of travellers.
              </p>

              <p>
                Growing up in Pushkar, I gained local experience and became a <strong>skilled camel rider</strong>. With over <strong>15 years of experience</strong> in the field, I have built a platform that caters to the needs of travellers from all over the world. My vision is to provide travellers with an authentic and immersive experience, one that takes them off the beaten track and into the heart of desert life.
              </p>

              <p>
                Over the past decade, I have dedicated myself to promoting the unique culture and breathtaking beauty of this majestic region. I am a firm believer in promoting <strong>healthy and responsible tourism</strong> to showcase the beauty of life amidst such an adverse environment. At the same time, I have a strong commitment to giving back to this community that has given me so much. As a local, I feel I must give back and support my people. Together, we can make a positive impact on the lives of those around us and continue to preserve the beauty of this unique region.
              </p>

              <p>
                When travellers come to <strong>Rehan Camel Safari</strong>, they can expect the best transportation, comfortable and safe accommodations, and an unforgettable experience. I am hands-on and always available for any of your needs, extending true hospitality and friendship to all my guests.
              </p>

              <p>
                My passion and dedication to providing travellers with an authentic and immersive experience make Rehan Camel Safari a go-to platform for travellers looking for a unique and <strong>unforgettable desert adventure</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Tour Packages" />
              </div>
              <div className="service-content">
                <h3>Pushkar Tour Packages</h3>
                <p>Choose from our Pushkar tour packages or opt for Pushkar sightseeing to make the most of your trip. Book now to enjoy your dream vacation in Pushkar.</p>
                <button className="service-btn">Click Here</button>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Desert Safari" />
              </div>
              <div className="service-content">
                <h3>Desert Safari</h3>
                <p>Experience the ultimate glamping experience with our luxury tents amid the desert. Book now to make your desert safari in Pushkar a memorable one.</p>
                <button className="service-btn">Click Here</button>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Car Rental" />
              </div>
              <div className="service-content">
                <h3>Car Rental India</h3>
                <p>Rehan Camel Safari offers reliable car rental services in Pushkar with a wide range of vehicles for your travel needs. Book with us today.</p>
                <button className="service-btn">Click Here</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h4>Address</h4>
                <p>Near Brahma Temple, Pushkar, Rajasthan 305022</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h4>Contact</h4>
                <p>+91-9414166565, +91-8302997703</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>rehancamelsafari@gmail.com<br />info@rehancamelsafaripushkar.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-us-page {
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

        .about-hero {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover;
          opacity: 0.2;
          z-index: 1;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-hero h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .about-hero h2 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #f39c12;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .about-content {
          padding: 80px 0;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-main h2 {
          font-size: 3rem;
          color: #2c3e50;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .about-main h3 {
          font-size: 2rem;
          color: #f39c12;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .about-main p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 25px;
          text-align: justify;
        }

        .about-main strong {
          color: #f39c12;
          font-weight: 600;
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 60px;
          padding: 40px 0;
          background: #f8f9fa;
          border-radius: 15px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          color: #f39c12;
          background: rgba(243, 156, 18, 0.1);
          padding: 15px;
          border-radius: 50%;
        }

        .stat-content h4 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 5px;
        }

        .stat-content p {
          color: #666;
          font-weight: 500;
          margin: 0;
        }

        .owner-message {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .owner-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: start;
        }

        .owner-image {
          position: relative;
        }

        .owner-image img {
          width: 100%;
          max-width: 400px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .owner-badge {
          position: absolute;
          top: -20px;
          left: 20px;
          background: #f39c12;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
        }

        .owner-text h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .owner-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 20px;
          text-align: justify;
        }

        .owner-text strong {
          color: #f39c12;
          font-weight: 600;
        }

        .services-preview {
          padding: 80px 0;
          background: white;
        }

        .services-preview h2 {
          font-size: 3rem;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 60px;
          font-weight: 700;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .service-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-image {
          height: 250px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.1);
        }

        .service-content {
          padding: 30px;
        }

        .service-content h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-btn {
          background: #f39c12;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-btn:hover {
          background: #e67e22;
          transform: translateY(-2px);
        }

        .contact-info {
          padding: 80px 0;
          background: #2c3e50;
          color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 30px;
          background: rgba(255,255,255,0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .contact-item svg {
          color: #f39c12;
          margin-top: 5px;
        }

        .contact-item h4 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #f39c12;
        }

        .contact-item p {
          color: #ecf0f1;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }

          .about-hero h2 {
            font-size: 1.8rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .about-main h2 {
            font-size: 2rem;
          }

          .about-main h3 {
            font-size: 1.5rem;
          }

          .owner-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .owner-text h2 {
            font-size: 2rem;
          }

          .services-preview h2 {
            font-size: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .back-button {
            position: static;
            margin: 20px;
            align-self: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
