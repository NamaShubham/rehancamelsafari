import React from 'react';
import { Star, Activity, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Star size={48} />,
      title: "1000+ Positive Reviews",
      description: "With over 1000 positive reviews on Tripadvisor and Google Reviews, we are confident that our tour and travel services will meet clients' expectations."
    },
    {
      icon: <Activity size={48} />,
      title: "15+ Uniquely Crafted Activities",
      description: "We offer over 15+ unique activities and experiences in Pushkar that are specially crafted to provide each client with an unforgettable experience."
    },
    {
      icon: <Users size={48} />,
      title: "80%+ Recommended Clients",
      description: "Over 80% of our new clients are recommended by our previous clients. Our commitment to excellence ensures memorable experiences every time."
    },
    {
      icon: <Award size={48} />,
      title: "Best Tour Provider",
      description: "As one of the most reputable and highly-rated tour providers in Pushkar, we take pride in being the best in desert safari experiences."
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="grid grid-2">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features {
          background: #f8f9fa;
        }

        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .feature-icon {
          color: #f39c12;
          flex-shrink: 0;
          padding: 15px;
          background: rgba(243, 156, 18, 0.1);
          border-radius: 10px;
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .feature-description {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .feature-card {
            flex-direction: column;
            text-align: center;
            padding: 25px;
          }

          .feature-icon {
            align-self: center;
          }

          .feature-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;

