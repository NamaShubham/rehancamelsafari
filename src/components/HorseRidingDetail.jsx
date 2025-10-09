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
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const HorseRidingDetail = ({ onBack, onPackageClick }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [guests, setGuests] = useState(1);

  const packageData = {
    title: "Horse Riding",
    duration: "2-3 Hours",
    location: "Pushkar",
    price: "INR 1,500",
    originalPrice: "INR 3,000",
    discount: "50% Off",
    minimumGuests: 1,
    extraPersonCharge: "per person",
    images: [
      "/images/sunset-ride-july-2023.jpg",
      "/images/WhatsApp Image 2025-10-08 at 18.29.34.jpeg",
      "/images/Horse-riding-in-pushkar-1.webp",
      "/images/WhatsApp Image 2025-10-08 at 18.27.03.jpeg"
    ],
    highlights: [
      "Majestic Horse Riding Experience",
      "Professional Guide & Trainer",
      "Scenic Desert Routes",
      "Photography Sessions",
      "Safety Equipment Provided",
      "Refreshments Included",
      "Sunset / Sunrise Rides Available",
      "Suitable for Beginners & Experts",
      "Traditional Rajasthani Welcome"
    ],
    overview: "Experience the thrill of exploring Pushkar's stunning desert landscapes on horseback with our Horse Riding Safari. Perfect for adventure enthusiasts and nature lovers, this package offers a unique perspective of the Thar Desert's beauty. Guided by experienced trainers, you'll ride through scenic trails, golden sand dunes, and traditional villages while enjoying breathtaking views. Whether you're a beginner or an experienced rider, our well-trained horses and professional guides ensure a safe and memorable journey. Capture stunning photographs, feel the desert breeze, and create unforgettable memories on this majestic horse riding adventure.",
    inclusions: [
      "Well-trained and gentle horses suitable for all skill levels",
      "Professional horse riding guide and trainer",
      "Safety equipment (helmets, etc.)",
      "2-3 hours scenic desert trail ride",
      "Traditional Rajasthani welcome with tikka",
      "Refreshments (tea/coffee and snacks)",
      "Photography assistance and photo stops",
      "Pick-up and drop from meeting point"
    ],
    exclusions: [
      "Transportation from hotel to meeting point (available on request)",
      "Personal expenses and tips",
      "Travel insurance",
      "Any meals not mentioned in inclusions",
      "Additional horse riding time beyond package duration"
    ],
    itinerary: [
      {
        day: "Activity Schedule",
        title: "Horse Riding Safari Experience",
        description: "**Arrival & Briefing (30 minutes)**\n\n• Arrival at the horse riding camp\n\n• Traditional Rajasthani welcome with tikka and refreshments\n\n• Safety briefing and horse riding instructions by professional trainer\n\n• Introduction to your horse and basic riding techniques\n\n**Desert Trail Ride (1.5 - 2 hours)**\n\n• Begin your horse riding adventure through scenic desert trails\n\n• Explore sand dunes, rural villages, and picturesque landscapes\n\n• Multiple photo stops at scenic viewpoints\n\n• Experience sunset/sunrise rides (depending on timing)\n\n• Guided tour with interesting facts about local culture and wildlife\n\n**Refreshment Break & Departure (30 minutes)**\n\n• Return to the camp for light refreshments\n\n• Tea/coffee with traditional snacks\n\n• Photo session with your horse\n\n• Departure and drop-off at meeting point"
      }
    ]
  };

  const relatedPackages = [
    {
      id: "luxury-getaway",
      title: "Camel Cart Safari",
      duration: "1-2 Hours",
      price: "INR 2,500",
      image: "/images/image2.jpg",
    },
    {
      id: "dinner-dunes",
      title: "Dinner On The Dunes",
      duration: "1 Day",
      price: "INR 4,999",
      image: "/images/becf6b_d88e2f2d0ba24db0b67baae114c10cd6~mv2.avif"
    },
    {
      id: "arabian-night",
      title: "Arabian Night with Cultural Show",
      duration: "01 Nights / 02 Days",
      price: "INR 6,000",
      image: "/images/desert-rose-jaisalmer-luxury-tent-in-thar-desert_aMbKP.jpeg",
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % packageData.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + packageData.images.length) % packageData.images.length);
  };

  const calculateTotalPrice = () => {
    const basePrice = parseInt(packageData.price.replace(/[^\d]/g, ''));
    return basePrice * guests;
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
              
              {/* Special Note */}
              <div className="special-note">
                <AlertCircle size={16} />
                <span>
                  <strong>Note:</strong> This package is priced at {packageData.price} per person. 
                  Age requirement: Minimum 8 years. Children must be accompanied by adults.
                </span>
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
                <p>{packageData.overview}</p>
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
          </div>

          {/* Booking Sidebar */}
          <div className="booking-sidebar">
            <div className="price-card">
              <div className="price-section">
                <div className="price-info">
                  <div className="current-price">{packageData.price} <span>per Person</span></div>
                  {packageData.originalPrice && (
                    <div className="original-price">{packageData.originalPrice}</div>
                  )}
                  {packageData.discount && (
                    <div className="discount-badge">{packageData.discount}</div>
                  )}
                </div>
              </div>

              <div className="booking-form">
                <div className="form-group">
                  <label>Select Date</label>
                  <input type="date" className="form-control" />
                </div>
                
                <div className="form-group">
                  <label>No. of Guests (Min: {packageData.minimumGuests})</label>
                  <div className="guest-counter">
                    <button 
                      onClick={() => setGuests(Math.max(packageData.minimumGuests, guests - 1))}
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
                    <span className="total-price">INR {calculateTotalPrice()}</span>
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
                <div className="contact-hours">10:30 AM - 8:00 PM (Mon to Sun)</div>
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
          margin-bottom: 60px;
        }

        .main-content {
          
        }

        .package-info {
          margin-bottom: 40px;
        }

        .package-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .package-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
        }

        .special-note {
          display: flex;
          gap: 10px;
          background: #fff3cd;
          padding: 15px;
          border-radius: 8px;
          color: #856404;
          border-left: 4px solid #f39c12;
        }

        .special-note svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .section {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #eee;
        }

        .section:last-child {
          border-bottom: none;
        }

        .section-title {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        .highlights-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #666;
        }

        .highlights-list svg {
          color: #27ae60;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .overview-text p {
          color: #666;
          line-height: 1.8;
          font-size: 15px;
        }

        .inclusion-exclusion {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
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
          margin-bottom: 12px;
          color: #666;
          font-size: 14px;
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
          
        }

        .day-section {
          margin-bottom: 30px;
        }

        .day-title {
          font-size: 1.4rem;
          color: #2c3e50;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f39c12;
        }

        .day-description p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 15px;
          font-size: 14px;
        }

        .booking-sidebar {
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .price-card {
          background: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
        }

        .price-section {
          background: #f8f9fa;
          padding: 20px;
          border-bottom: 1px solid #ddd;
        }

        .price-info {
          position: relative;
        }

        .current-price {
          font-size: 2rem;
          font-weight: bold;
          color: #f39c12;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .current-price span {
          font-size: 14px;
          color: #666;
          font-weight: normal;
        }

        .original-price {
          text-decoration: line-through;
          color: #999;
          font-size: 1.1rem;
          margin-top: 5px;
        }

        .discount-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #e74c3c;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }

        .booking-form {
          padding: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }

        .guest-counter {
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: center;
          background: #f8f9fa;
          padding: 10px;
          border-radius: 5px;
        }

        .counter-btn {
          width: 35px;
          height: 35px;
          border: 1px solid #f39c12;
          background: white;
          color: #f39c12;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.3s;
        }

        .counter-btn:hover {
          background: #f39c12;
          color: white;
        }

        .guest-count {
          font-size: 18px;
          font-weight: bold;
          color: #2c3e50;
          min-width: 30px;
          text-align: center;
        }

        .extra-charge-note {
          margin-top: 8px;
          font-size: 12px;
          color: #666;
          text-align: center;
        }

        .price-breakdown {
          border-top: 1px solid #eee;
          padding-top: 15px;
          margin-bottom: 20px;
        }

        .breakdown-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .breakdown-row span:first-child {
          color: #666;
          font-size: 14px;
        }

        .total-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #f39c12;
        }

        .book-now-btn {
          width: 100%;
          padding: 15px;
          background: #f39c12;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .book-now-btn:hover {
          background: #e67e22;
        }

        .whatsapp-btn {
          width: 100%;
          padding: 12px;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          margin-top: 10px;
          transition: background 0.3s;
        }

        .whatsapp-btn:hover {
          background: #128C7E;
        }

        .contact-info {
          padding: 20px;
          border-top: 1px solid #eee;
        }

        .contact-info h4 {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .contact-info p {
          color: #666;
          font-size: 13px;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #f39c12;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .contact-hours {
          color: #666;
          font-size: 12px;
        }

        .policies-section {
          background: #f8f9fa;
          padding: 60px 0;
          margin-top: 60px;
        }

        .policies-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 30px;
        }

        .policy-card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .policy-card h3 {
          font-size: 1.2rem;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .policy-card ul {
          list-style: none;
        }

        .policy-card li {
          color: #666;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;
        }

        .policy-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #f39c12;
          font-weight: bold;
        }

        .related-packages {
          padding: 60px 0;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 30px;
        }

        .related-package-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }

        .related-package-card:hover {
          transform: translateY(-5px);
        }

        .related-image {
          width: 100%;
          height: 200px;
          background-size: cover;
          background-position: center;
        }

        .related-content {
          padding: 20px;
        }

        .related-title {
          font-size: 1.1rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .related-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .related-duration {
          color: #666;
          font-size: 13px;
        }

        .related-price {
          color: #f39c12;
          font-weight: 600;
          font-size: 14px;
        }

        .related-buttons {
          display: flex;
          gap: 10px;
        }

        .btn-know-more {
          flex: 1;
          padding: 10px;
          background: #f39c12;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .btn-know-more:hover {
          background: #e67e22;
        }

        .btn-whatsapp-small {
          flex: 1;
          padding: 10px;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          text-decoration: none;
          transition: background 0.3s;
        }

        .btn-whatsapp-small:hover {
          background: #128C7E;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .detail-content {
            grid-template-columns: 1fr;
          }

          .booking-sidebar {
            position: static;
          }

          .policies-grid {
            grid-template-columns: 1fr;
          }

          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .package-detail {
            padding: 60px 0 20px 0;
          }

          .package-title {
            font-size: 2rem;
          }

          .main-image {
            height: 250px;
          }

          .thumbnail-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }

          .thumbnail-grid img {
            height: 60px;
          }

          .highlights-list {
            grid-template-columns: 1fr;
          }

          .inclusion-exclusion {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .package-title {
            font-size: 1.5rem;
          }

          .package-meta {
            flex-direction: column;
            gap: 10px;
          }

          .main-image {
            height: 200px;
          }

          .thumbnail-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .current-price {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HorseRidingDetail;
