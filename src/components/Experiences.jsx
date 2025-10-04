import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      title: "Camel Safari in Pushkar",
      description: "Enjoy a traditional and unique experience by taking a camel safari in Pushkar. Traverse through the Thar desert and witness the beautiful sand dunes, rustic villages and mesmerising sunset and sunrise views. This is an excellent opportunity to soak in the desert landscape while enjoying the company of these gentle creatures.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🐪"
    },
    {
      title: "Desert Camping in Pushkar",
      description: "Glimpse the desert lifestyle by staying in a desert camp in Pushkar. Enjoy the tranquillity of the desert landscape while staying in luxury tents equipped with all modern amenities. Get a taste of Rajasthani cuisine, watch cultural performances, and gaze at the starry night sky for a truly memorable experience.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "⛺"
    },
    {
      title: "Dinner on the Dunes",
      description: "Relish a romantic dinner under the starry night sky with Dinner on the Dunes in Pushkar. Savour delicious Rajasthani cuisine while enjoying the peaceful ambiance of the desert. This is an excellent opportunity to spend some quality time with your loved one while enjoying the natural beauty of the desert.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🍽️"
    },
    {
      title: "Jeep Safari in Pushkar",
      description: "Witness the Thar desert in style with a Jeep Safari in Pushkar. Hop on board a jeep and embark on an adventure to discover the hidden gems of the desert. The thrill of the bumpy ride combined with the stunning views of the desert landscape is an experience that shouldn't be missed.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🚙"
    },
    {
      title: "Folk Dance and Music in Pushkar",
      description: "Dip yourself in the vibrant and colourful culture of Rajasthan by attending a cultural program in Pushkar Desert. Witness traditional Rajasthani dances, music and performances that showcase the rich heritage of the state. This is an excellent opportunity to get a glimpse into the local culture and traditions.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "💃"
    },
    {
      title: "Quad Bike in Pushkar",
      description: "Experience the thrill of riding a Quad Bike in Pushkar. Explore the rugged terrain and undulating sand dunes of the Thar desert on these powerful and versatile machines. This is a great way to get your adrenaline pumping while enjoying the scenic beauty of the desert.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🏍️"
    },
    {
      title: "Parasailing in Pushkar",
      description: "Soar high above the desert landscape with parasailing in Pushkar. Experience the thrill of flying while enjoying the panoramic views of the desert and the majestic Pushkar temples. This is an excellent opportunity to get a bird's eye view of the desert and feel the wind rushing through your hair.",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🪂"
    },
    {
      title: "Paramotoring in the Pushkar",
      description: "Partake the thrill of flying with Paramotoring in Pushkar. Soar high above the desert on a motorised paraglider and enjoy the panoramic views of the desert landscape. This is an excellent opportunity to get a unique perspective of the desert and feel the rush of adrenaline.",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: "🛩️"
    }
  ];

  return (
    <section id="experiences" className="experiences section">
      <div className="container">
        <h2 className="section-title">Experiences</h2>
        <p className="section-subtitle">
          Discover the hidden gems of Pushkar and the stretched desert area with our offbeat 
          and non-touristic tours that take you beyond the usual tourist spots. From cultural 
          walks to culinary delights, we have it all for our clients.
        </p>
        
        <div className="experiences-grid">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <div className="experience-image">
                <img src={experience.image} alt={experience.title} />
                <div className="experience-overlay">
                  <div className="experience-icon">
                    {experience.icon}
                  </div>
                </div>
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-description">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experiences {
          background: #f8f9fa;
          padding: 80px 0;
        }

        .section-subtitle {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .experiences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .experience-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .experience-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .experience-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .experience-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .experience-card:hover .experience-image img {
          transform: scale(1.1);
        }

        .experience-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(243, 156, 18, 0.8), rgba(230, 126, 34, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .experience-card:hover .experience-overlay {
          opacity: 1;
        }

        .experience-icon {
          font-size: 4rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .experience-content {
          padding: 30px;
        }

        .experience-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .experience-description {
          color: #666;
          line-height: 1.6;
          font-size: 1rem;
          text-align: justify;
          margin: 0;
        }

        @media (max-width: 768px) {
          .experiences {
            padding: 60px 0;
          }

          .section-subtitle {
            margin-bottom: 40px;
            font-size: 1rem;
          }

          .experiences-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .experience-image {
            height: 200px;
          }

          .experience-content {
            padding: 25px;
          }

          .experience-title {
            font-size: 1.2rem;
          }

          .experience-description {
            font-size: 0.95rem;
            text-align: left;
          }

          .experience-icon {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          .experiences {
            padding: 40px 0;
          }

          .experiences-grid {
            gap: 20px;
          }

          .experience-content {
            padding: 20px;
          }

          .experience-title {
            font-size: 1.1rem;
          }

          .experience-description {
            font-size: 0.9rem;
          }

          .experience-icon {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experiences;

