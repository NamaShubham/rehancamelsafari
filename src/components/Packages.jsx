import React from 'react';
import { Calendar, DollarSign, MessageCircle } from 'lucide-react';

const Packages = ({ onPackageClick }) => {
  const packages = [
    {
      id: "luxury-getaway",
      title: "Camel Cart Safari",
      duration: "1-2 Hours",
      originalPrice: "INR 5,000",
      price: "INR 25,00",
      discount: "50% Off",
      image: "/images/image2.jpg",
      features: [
        "Authentic Rajasthani Experience",
        "Comfortable Ride",
        "Sunset / Sunrise Views",
        "Village Visit",
        "Cultural Interaction",
        "Photo Opportunities",
      ]
    },
    {
      id: "arabian-night",
      title: "Arabian Night with Cultural Show",
      duration: "01 Nights / 02 Days",
      originalPrice: "INR 12,000",
      price: "INR 6000",
      discount: "50% Off",
      image: "/images/desert-rose-jaisalmer-luxury-tent-in-thar-desert_aMbKP.jpeg",
      features: [
        "Enchanting Desert Experience",
        "Traditional Rajasthani Welcome",
        "Live Cultural Performances",
        "Camel Ride at Sunset",
        "Authentic Buffet Dinner",
        "Bonfire & Entertainment",
      ]
    },
    {
      id: "dinner-dunes",
      title: "Dinner On The Dunes",
      duration: "1 Day",
      price: "INR 4,999",
      image: "/images/becf6b_d88e2f2d0ba24db0b67baae114c10cd6~mv2.avif",
      features: [
        "Romantic Desert Dining",
      "Sunset Camel or Camel Cart Ride",
      "Traditional Rajasthani Welcome",
      "Authentic Buffet Dinner",
      "Live Folk Music",
      "Bonfire Experience",
      ]
    },
    {
      id: "half-day",
      title: "Festival / Fair Special Package",
      duration: "2 Nights / 3 Days",
      price: "INR 9,999",
      image: "/images/pushkar-fair-tour-1.jpg",
      features: [
        "Exclusive Camel & Camel Cart Safaris during the fair.",
        "Access to the Pushkar Fairgrounds with guided tours of stalls, and cultural performances.",
        "Special Cultural Shows",
        "Local Cuisine Experience",
        "Village & Market Visits"
      ]
    },
    // {
    //   id: "heritage-package",
    //   title: "Heritage Pushkar Package",
    //   duration: "02 Nights / 03 Days",
    //   price: "INR 9,999",
    //   image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   features: [
    //     "Complete Pushkar sightseeing",
    //     "Desert safari experience",
    //     "Heritage hotel accommodation",
    //     "All meals included",
    //     "Professional guide and transport"
    //   ]
    // },
    // {
    //   id: "luxury-safari",
    //   title: "Luxury Overnight Safari",
    //   duration: "01 Nights / 02 Days",
    //   price: "INR 3,999",
    //   image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   features: [
    //     "Luxury desert camp stay",
    //     "Jeep and camel safari combo",
    //     "Cultural evening program",
    //     "Premium dining experience",
    //     "Sunrise/sunset viewing"
    //   ]
    // }
  ];

  return (
    <section id="packages" className="packages section">
      <div className="container">
        <h2 className="section-title">Pushkar - Desert Safari Packages</h2>
        <p className="section-subtitle">
          Enjoy the thrill of dune bashing, camel rides, jeep safari, dinner and starry nights 
          with the ultimate glamping experience with our luxury tents in the heart of the Thar desert.
        </p>
        
        <div className="grid grid-3">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${index === 0 ? 'featured' : ''}`}>
              {index === 0 && <div className="discount-badge">{pkg.discount}</div>}
              
              <div className="package-image" style={{backgroundImage: `url(${pkg.image})`}}></div>
              
              <div className="package-header">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-duration">
                  <Calendar size={16} />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              <div className="package-price">
                <div className="price-container">
                  {pkg.originalPrice && (
                    <span className="original-price">{pkg.originalPrice}</span>
                  )}
                  <div className="current-price">
                    <span>{pkg.price} per Adult</span>
                  </div>
                </div>
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <div className="package-buttons">
                <button 
                  onClick={() => (pkg.id === 'luxury-getaway' || pkg.id === 'arabian-night' || pkg.id === 'dinner-dunes' || pkg.id === 'half-day') && onPackageClick && onPackageClick(pkg.id)} 
                  className="btn btn-primary"
                  style={{cursor: (pkg.id === 'luxury-getaway' || pkg.id === 'arabian-night' || pkg.id === 'dinner-dunes' || pkg.id === 'half-day') ? 'pointer' : 'not-allowed', opacity: (pkg.id === 'luxury-getaway' || pkg.id === 'arabian-night' || pkg.id === 'dinner-dunes' || pkg.id === 'half-day') ? 1 : 0.6}}
                >
                  {(pkg.id === 'luxury-getaway' || pkg.id === 'arabian-night' || pkg.id === 'dinner-dunes' || pkg.id === 'half-day') ? 'Know More' : 'Coming Soon'}
                </button>
                {/* <a href="https://wa.me/919414166565" className="btn btn-whatsapp">
                  <MessageCircle size={16} />
                  WhatsApp Now
                </a> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="view-all">
          <a href="#" className="btn btn-secondary">View All Packages</a>
        </div> */}
      </div>

      <style jsx>{`
        .packages {
          background: white;
        }

        .section-subtitle {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .package-card {
          position: relative;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .package-card.featured {
          border-color: #f39c12;
          transform: scale(1.05);
        }

        .package-image {
          width: 100%;
          height: 200px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .package-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .discount-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #e74c3c;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
          z-index: 2;
        }

        .package-header {
          padding: 30px 25px 0;
        }

        .package-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .package-duration {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 0.9rem;
        }

        .package-price {
          padding: 20px 25px;
          border-bottom: 1px solid #eee;
        }

        .price-container {
          text-align: center;
        }

        .original-price {
          display: block;
          text-decoration: line-through;
          color: #999;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .current-price {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 1.5rem;
          font-weight: bold;
          color: #f39c12;
        }

        .package-features {
          padding: 25px;
          list-style: none;
        }

        .package-features li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 10px;
          color: #666;
          line-height: 1.5;
        }

        .package-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #27ae60;
          font-weight: bold;
        }

        .package-buttons {
          padding: 0 25px 25px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .package-buttons .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .view-all {
          text-align: center;
          margin-top: 50px;
        }

        @media (max-width: 768px) {
          .package-card.featured {
            transform: none;
          }

          .package-title {
            font-size: 1.2rem;
          }

          .current-price {
            font-size: 1.3rem;
          }

          .package-header,
          .package-price,
          .package-features,
          .package-buttons {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Packages;

