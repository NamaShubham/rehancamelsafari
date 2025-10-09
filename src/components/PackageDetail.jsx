import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Star, 
  Check, 
  X, 
  MessageCircle, 
  Phone,
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const PackageDetail = ({ onBack, onPackageClick }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [guests, setGuests] = useState(1);

  const packageData = {
    title: "Camel Cart Safari",
    duration: "1-2 Hours",
    location: "Pushkar",
    originalPrice: "INR 5,000",
    price: "INR 5,000",
    discountedPrice: "INR 2,500",
    discount: "50% Off",
    images: [
      "/images/image2.jpg",
      "/images/ocone.jpg",
      "/images/000fecd9-8cc5-4bcf-814a-1ee0a6c63374.jpg",
      "/images/camel-1.jpg"
    ],
    highlights: [
      "Authentic Rajasthani Experience",
      "Comfortable Ride",
      "Sunset / Sunrise Views",
      "Village Visit",
      "Cultural Interaction",
      "Photo Opportunities",
      "Professional Guide",
      "Flexible Duration Options",
      "Family & Group Friendly"
    ],
    overview: "Experience the magic of the Pushkar desert with our Camel Cart Safari — a perfect blend of comfort, culture, and adventure. Sit back and relax as our friendly camels take you across golden dunes, passing through charming Rajasthani villages and offering breathtaking views of the Aravalli hills. Ideal for families and couples, this traditional ride lets you enjoy the desert breeze, click stunning photos, and experience authentic rural life. Whether you choose a morning or sunset safari, you’ll be treated to warm hospitality, local tea, and unforgettable desert memories.",
    inclusions: [
      "Transport facility",
      "Camel Ride to the Sand Dunes",
      "Pickup/drop service to the city",
      "Campfire Folk Music & Dance",
      "Rajasthani Vegetarian Gala Dinner"
    ],
    exclusions: [
      "Alcoholic drinks",
      "Personal expenses",
      "Travel Insurance",
      "Extra charges for peak season",
      "Entrance fees",
      "Any increase in government taxes and state taxes"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Desert Adventure",
        activities: [
          {
            time: "2:30 PM",
            title: "Pick-up and Cultural Exploration",
            description: "Begin your journey with a private pick-up from Pushkar City. Along the way, explore the mystery of ancient villages, capturing the essence of local culture and history."
          },
          {
            time: "3:30 - 4:00 PM",
            title: "Desert Safari Adventure",
            description: "Arrive at our exclusive safari point, where luxury and adventure await you. Embark on a thrilling Jeep Safari, feeling the adrenaline as you traverse the golden desert."
          },
          {
            time: "Evening",
            title: "Camel Safari and Sunset Magic",
            description: "Transition to a regal Camel Safari, gliding across the dunes. Relish premium tea, coffee and gourmet snacks while watching the sunset paint the sky with gold and crimson."
          },
          {
            time: "Night",
            title: "Cultural Evening and Dinner",
            description: "Be fascinated by a live Rajasthani Cultural Show. Gather around a warm bonfire and taste an exquisite Rajasthani vegetarian gala dinner."
          },
          {
            time: "Late Night",
            title: "Stargazing and Nighttime Serenity",
            description: "End your evening with an intimate stargazing experience. Retreat to your luxurious open-air bed under the stars."
          }
        ]
      },
      {
        day: "Day 2",
        title: "Sunrise and Morning Safari",
        activities: [
          {
            time: "Early Morning",
            title: "Sunrise Serenity",
            description: "Awaken to a spectacular sunrise over the dunes, bathing you in the soft glow of a peaceful desert morning."
          },
          {
            time: "Morning",
            title: "Breakfast on the Dunes",
            description: "Delight in a specially curated breakfast in the middle of the dunes, savoring fresh flavors against the backdrop of a quiet desert landscape."
          },
          {
            time: "Late Morning",
            title: "Morning Jeep Safari",
            description: "Complete your unforgettable adventure with an exciting morning jeep safari, discovering more hidden gems."
          },
          {
            time: "Checkout",
            title: "Drop-off",
            description: "Return to Golden City, Pushkar, with unforgettable memories of this luxury desert retreat."
          }
        ]
      }
    ]
  };

  const relatedPackages = [
    {
      id: "arabian-night",
      title: "Arabian Night with Cultural Show",
      duration: "01 Nights 02 Days",
      price: "INR 12000",
      image: "/images/desert-rose-jaisalmer-luxury-tent-in-thar-desert_aMbKP.jpeg"
    },
      {
        id: "dinner-dunes",
        title: "Dinner On The Dunes",
        duration: "1 Day",
        price: "INR 4,999",
        image: "/images/becf6b_d88e2f2d0ba24db0b67baae114c10cd6~mv2.avif"
      },
    {
      id: "half-day",
      title: "Festival / Fair Special Package",
      duration: "02 Nights / 03 Days",
      price: "INR 9999",
      image: "/images/pushkar-fair-tour-1.jpg",
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % packageData.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + packageData.images.length) % packageData.images.length);
  };

  return (
    <div className="package-detail">
      <div className="container">

        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={packageData.images[selectedImage]} alt={packageData.title} />
            <button className="nav-button prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className="nav-button next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
            <div className="image-counter">
              {selectedImage + 1} / {packageData.images.length}
            </div>
          </div>
          <div className="thumbnail-grid">
            {packageData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${packageData.title} ${index + 1}`}
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="detail-content">
          <div className="main-content">
            {/* Package Info */}
            <div className="package-info">
              <h1 className="package-title">{packageData.title}</h1>
              <div className="package-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{packageData.duration}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{packageData.location}</span>
                </div>
              </div>
            </div>

            {/* Package Highlights */}
            <div className="section">
              <h2 className="section-title">Package Highlights</h2>
              <ul className="highlights-list">
                {packageData.highlights.map((highlight, index) => (
                  <li key={index}>
                    <Check size={16} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Package Overview */}
            <div className="section">
              <h2 className="section-title">About The Tour</h2>
              <div className="overview-text">
                {packageData.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="section">
              <div className="inclusion-exclusion">
                <div className="inclusions">
                  <h3>Inclusions</h3>
                  <ul>
                    {packageData.inclusions.map((item, index) => (
                      <li key={index}>
                        <Check size={16} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="exclusions">
                  <h3>Exclusions</h3>
                  <ul>
                    {packageData.exclusions.map((item, index) => (
                      <li key={index}>
                        <X size={16} className="x-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            {/* <div className="section">
              <h2 className="section-title">Itinerary</h2>
              <div className="itinerary">
                {packageData.itinerary.map((day, dayIndex) => (
                  <div key={dayIndex} className="day-section">
                    <h3 className="day-title">{day.day}: {day.title}</h3>
                    <div className="activities">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="activity">
                          <div className="activity-time">{activity.time}</div>
                          <div className="activity-content">
                            <h4 className="activity-title">{activity.title}</h4>
                            <p className="activity-description">{activity.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Booking Sidebar */}
          <div className="booking-sidebar">
            <div className="price-card">
              <div className="price-section">
                <div className="discount-badge">{packageData.discount}</div>
                <div className="price-info">
                  <div className="original-price">{packageData.originalPrice}</div>
                  <div className="current-price">{packageData.discountedPrice} <span>per Adult</span></div>
                </div>
              </div>

              <div className="booking-form">
                <div className="form-group">
                  <label>Select Date</label>
                  <input type="date" className="form-control" />
                </div>
                
                <div className="form-group">
                  <label>No. of Guests</label>
                  <div className="guest-counter">
                    <button 
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="counter-btn"
                    >
                      -
                    </button>
                    <span className="guest-count">{guests}</span>
                    <button 
                      onClick={() => setGuests(guests + 1)}
                      className="counter-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="price-breakdown">
                  <div className="breakdown-row">
                    <span>Total Price</span>
                    <span className="total-price">INR {parseInt(packageData.discountedPrice.replace(/[^\d]/g, '')) * guests}</span>
                  </div>
                </div>

                <button className="book-now-btn">Book Now</button>
                {/* <a href="https://wa.me/919414166565" className="whatsapp-btn">
                  <MessageCircle size={16} />
                  WhatsApp Now
                </a> */}
              </div>

              <div className="contact-info">
                <h4>Get a Question?</h4>
                <p>Our Destination expert will be happy to help you resolve your queries for this tour.</p>
                <div className="contact-details">
                  <Phone size={16} />
                  <span>+91-7737329071, +91-8905011430</span>
                </div>
                <div className="contact-hours">10:30 AM - 8:00 PM (Monday to Sunday)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Policies Section */}
        <div className="policies-section">
          <div className="container">
            <h2 className="section-title">Policies</h2>
            <div className="policies-grid">
              <div className="policy-card">
                <h3>Confirmation Policy</h3>
                <ul>
                  <li>The customer receives a confirmation voucher via email within 24 hours of successful booking</li>
                  <li>In case the preferred slots are unavailable, an alternate schedule of the customer's preference will be arranged and a new confirmation voucher will be sent via email</li>
                  <li>Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed</li>
                </ul>
              </div>
              
              <div className="policy-card">
                <h3>Refund Policy</h3>
                <ul>
                  <li>The applicable refund amount will be processed within 10 business days</li>
                  <li>All applicable refunds will be done in the traveler's account</li>
                </ul>
              </div>

              <div className="policy-card">
                <h3>Cancellation Policy</h3>
                <ul>
                  <li>If cancellation are made 30 days before the date of travel then 25.0% of total tour cost will be charged as cancellation fees</li>
                  <li>If cancellation are made 15 days to 30 days before the date of travel then 50.0% of total tour cost will be charged as cancellation fees</li>
                  <li>If cancellation are made 0 days to 15 days before the date of travel then 100.0% of total tour cost will be charged as cancellation fees</li>
                </ul>
              </div>

              <div className="policy-card">
                <h3>Payment Term Policy</h3>
                <ul>
                  <li>100.0% of total tour cost will have to be paid 0 days before the date of booking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages Section */}
        <div className="related-packages">
          <div className="container">
            <h2 className="section-title">Related Packages</h2>
            <div className="related-grid">
              {relatedPackages.map((pkg, index) => (
                <div key={index} className="related-package-card">
                  <div className="related-image" style={{backgroundImage: `url(${pkg.image})`}}></div>
                  <div className="related-content">
                    <h3 className="related-title">{pkg.title}</h3>
                    <div className="related-meta">
                      <span className="related-duration">{pkg.duration}</span>
                      <span className="related-price">{pkg.price} + Tax</span>
                    </div>
                    <div className="related-buttons">
                      <button 
                        className="btn-know-more"
                        onClick={() => onPackageClick && onPackageClick(pkg.id)}
                      >
                        Know More
                      </button>
                      {/* <a href="https://wa.me/919414166565" className="btn-whatsapp-small">
                        <MessageCircle size={14} />
                        WhatsApp Now
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .package-detail {
          background: white;
          min-height: 100vh;
          padding: 80px 0 20px 0;
        }

        .detail-header {
          margin-bottom: 30px;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #f39c12;
          cursor: pointer;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .back-button:hover {
          color: #e67e22;
        }

        .breadcrumb {
          color: #666;
          font-size: 14px;
        }

        .breadcrumb span:last-child {
          color: #2c3e50;
          font-weight: 500;
        }

        .image-gallery {
          margin-bottom: 40px;
        }

        .main-image {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .nav-button:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .nav-button.prev {
          left: 20px;
        }

        .nav-button.next {
          right: 20px;
        }

        .image-counter {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 14px;
        }

        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .thumbnail-grid img {
          width: 100%;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .thumbnail-grid img.active,
        .thumbnail-grid img:hover {
          opacity: 1;
        }

        .detail-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .package-info {
          margin-bottom: 30px;
        }

        .package-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .package-meta {
          display: flex;
          gap: 30px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 16px;
        }

        .section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 20px;
          border-bottom: 2px solid #f39c12;
          padding-bottom: 10px;
        }

        .highlights-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 15px;
        }

        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #666;
          line-height: 1.5;
        }

        .highlights-list li svg {
          color: #27ae60;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .overview-text p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 20px;
          text-align: justify;
        }

        .inclusion-exclusion {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .inclusions h3,
        .exclusions h3 {
          font-size: 1.3rem;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .inclusions ul,
        .exclusions ul {
          list-style: none;
        }

        .inclusions li,
        .exclusions li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 10px;
          color: #666;
          line-height: 1.5;
        }

        .check-icon {
          color: #27ae60;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .x-icon {
          color: #e74c3c;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .itinerary {
          space-y: 30px;
        }

        .day-section {
          margin-bottom: 30px;
        }

        .day-title {
          font-size: 1.4rem;
          color: #2c3e50;
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid #f39c12;
        }

        .activities {
          margin-left: 20px;
        }

        .activity {
          display: flex;
          gap: 20px;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }

        .activity:last-child {
          border-bottom: none;
        }

        .activity-time {
          flex-shrink: 0;
          width: 120px;
          font-weight: 600;
          color: #f39c12;
          font-size: 14px;
        }

        .activity-content {
          flex: 1;
        }

        .activity-title {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .activity-description {
          color: #666;
          line-height: 1.6;
        }

        .booking-sidebar {
          position: sticky;
          top: 20px;
          height: fit-content;
        }

        .price-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .price-section {
          background: linear-gradient(45deg, #f39c12, #e67e22);
          color: white;
          padding: 25px;
          position: relative;
        }

        .discount-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #e74c3c;
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: bold;
        }

        .price-info {
          text-align: center;
        }

        .original-price {
          text-decoration: line-through;
          opacity: 0.8;
          font-size: 16px;
          margin-bottom: 5px;
        }

        .current-price {
          font-size: 2rem;
          font-weight: bold;
        }

        .current-price span {
          font-size: 14px;
          opacity: 0.9;
        }

        .booking-form {
          padding: 25px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #2c3e50;
        }

        .form-control {
          width: 100%;
          padding: 12px;
          border: 2px solid #eee;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s;
        }

        .form-control:focus {
          outline: none;
          border-color: #f39c12;
        }

        .guest-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 12px;
          border: 2px solid #eee;
          border-radius: 8px;
        }

        .counter-btn {
          width: 30px;
          height: 30px;
          border: none;
          background: #f39c12;
          color: white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
        }

        .counter-btn:hover {
          background: #e67e22;
        }

        .guest-count {
          font-size: 18px;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }

        .price-breakdown {
          margin: 20px 0;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .breakdown-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .total-price {
          font-size: 1.3rem;
          font-weight: bold;
          color: #f39c12;
        }

        .book-now-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(45deg, #f39c12, #e67e22);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 15px;
          transition: all 0.3s;
        }

        .book-now-btn:hover {
          background: linear-gradient(45deg, #e67e22, #d35400);
          transform: translateY(-2px);
        }

        .whatsapp-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 15px;
          background: #25D366;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          transition: background 0.3s;
        }

        .whatsapp-btn:hover {
          background: #128C7E;
        }

        .contact-info {
          padding: 25px;
          background: #f8f9fa;
        }

        .contact-info h4 {
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .contact-info p {
          color: #666;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .contact-details {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #f39c12;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .contact-hours {
          font-size: 12px;
          color: #666;
        }

        /* Policies Section */
        .policies-section {
          background: #f8f9fa;
          padding: 60px 0;
          margin-top: 40px;
        }

        .policies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .policy-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .policy-card:hover {
          transform: translateY(-5px);
        }

        .policy-card h3 {
          color: #2c3e50;
          font-size: 1.3rem;
          margin-bottom: 20px;
          border-bottom: 2px solid #f39c12;
          padding-bottom: 10px;
        }

        .policy-card ul {
          list-style: none;
          padding: 0;
        }

        .policy-card li {
          color: #666;
          line-height: 1.6;
          margin-bottom: 12px;
          padding-left: 20px;
          position: relative;
        }

        .policy-card li::before {
          content: '•';
          color: #f39c12;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        /* Related Packages Section */
        .related-packages {
          padding: 60px 0;
          background: white;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .related-package-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .related-package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .related-image {
          width: 100%;
          height: 160px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .related-content {
          padding: 20px;
        }

        .related-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .related-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .related-duration {
          color: #666;
          font-size: 0.9rem;
        }

        .related-price {
          color: #f39c12;
          font-weight: bold;
          font-size: 1rem;
        }

        .related-buttons {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .btn-know-more {
          padding: 10px 16px;
          background: linear-gradient(45deg, #f39c12, #e67e22);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-know-more:hover {
          background: linear-gradient(45deg, #e67e22, #d35400);
          transform: translateY(-1px);
        }

        .btn-whatsapp-small {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          background: #25D366;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: bold;
          transition: background 0.3s;
        }

        .btn-whatsapp-small:hover {
          background: #128C7E;
        }

        @media (max-width: 1024px) {
          .detail-content {
            grid-template-columns: 1fr;
          }
          
          .booking-sidebar {
            position: static;
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .package-title {
            font-size: 2rem;
          }

          .package-meta {
            flex-direction: column;
            gap: 15px;
          }

          .inclusion-exclusion {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .thumbnail-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .activity {
            flex-direction: column;
            gap: 10px;
          }

          .activity-time {
            width: auto;
          }

          .policies-grid {
            grid-template-columns: 1fr;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .policy-card,
          .related-package-card {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .policies-section,
          .related-packages {
            padding: 40px 0;
          }

          .policy-card,
          .related-content {
            padding: 20px;
          }

          .related-image {
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default PackageDetail;
