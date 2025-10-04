import React from 'react';
import { Star, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <br />
            <span className="highlight">Rehan Camel Safari Pushkar</span>
          </h1>
          
          <p className="hero-description">
            Pushkar is a city in Rajasthan, India, that is renowned for its rich cultural heritage. 
            The city is home to several palaces, forts and havelis that are popular tourist attractions 
            in Pushkar. It is also known for its vast dunes that offer a unique desert experience to visitors.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <Star className="stat-icon" />
              <div>
                <h3>1000+</h3>
                <p>Positive Reviews</p>
              </div>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <div>
                <h3>15+</h3>
                <p>Unique Experiences</p>
              </div>
            </div>
            <div className="stat-item">
              <MapPin className="stat-icon" />
              <div>
                <h3>80%+</h3>
                <p>Recommended Clients</p>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#packages" className="btn btn-primary">Explore Packages</a>
            <a href="https://wa.me/919414166565" className="btn btn-whatsapp">WhatsApp Now</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          color: white;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: -2;
        }

        .hero-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          animation: float 20s ease-in-out infinite;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: -1;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding-top: 80px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .highlight {
          color: #f39c12;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .stat-icon {
          color: #f39c12;
          width: 32px;
          height: 32px;
        }

        .stat-item h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .stat-item p {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-stats {
            gap: 20px;
          }

          .stat-item {
            padding: 15px;
            gap: 10px;
          }

          .stat-item h3 {
            font-size: 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-buttons .btn {
            width: 200px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            align-items: center;
          }

          .stat-item {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

