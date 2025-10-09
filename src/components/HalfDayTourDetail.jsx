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
  AlertCircle,
  Clock,
  Camera,
  Mountain
} from 'lucide-react';

const HalfDayTourDetail = ({ onBack, onPackageClick }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [guests, setGuests] = useState(2); // Minimum 2 people required

  const packageData = {
    title: "Festival / Fair Special Package",
    duration: "2 Nights / 3 Days",
    location: "Pushkar",
    price: "INR 9,999",
    minimumGuests: 2,
    extraPersonCharge: "30%",
    startTime: "2:00 PM",
    endTime: "10:00 PM",
    images: [
      "/images/pushkar-fair-tour-1.jpg",
      "/images/dancing-camel-pushkar-fair.jpg",
      "/images/rajasthan-with-pushkar-fair-tour.jpg",
      "/images/pushkarcamelfairdl1001.jpg"
    ],
    highlights: [
      "Exclusive Camel & Camel Cart Safaris during the fair days.",
      "Access to the Pushkar Fairgrounds with guided tours of stalls, and cultural performances.",
      "Traditional Rajasthani Welcome with tika.",
      "Special Cultural Shows",
      "Local Cuisine Experience",
      "Village & Market Visits",
      "Photography Opportunities",
      "Bonfire & Entertainment"
    ],
    overview: "The Festival / Fair Special Package is your ultimate way to experience the world-famous Pushkar Camel Fair — a spectacular celebration of Rajasthani culture, color, and tradition. This exclusive package is designed to immerse you in the vibrant festivities, complete with camel safaris, cultural shows, traditional food, and unique shopping experiences. From thrilling desert rides to exploring bustling fairgrounds, this package offers a blend of adventure, culture, and festivity. Perfect for families, couples, and photography enthusiasts, it ensures you experience Pushkar at its most magical time of the year.",
    inclusions: [
      "Camel / Camel Cart Safari during the fair.",
      "Access to cultural shows & fairground events.",
      "Rajasthani buffet dinner or thali during the package.",
      "Welcome drink, tika, and garland.",
      "Tea/coffee and bottled water."
    ],
    exclusions: [
      "Transport to/from Pushkar and within the fair (unless arranged).",
      "Alcoholic beverages & soft drinks.",
      "Optional activities (jeep safari, hot air balloon ride, luxury camping).",
      "Travel insurance or medical assistance."
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pushkar",
        description: "Today you went on an amazing adventure in the desert. Start your journey at 2:00 PM and take a ride into the desert. During the tour, you visit some of the most beautiful monuments and villages like Kuldhara, an abandoned village, located in the heart of the desert. Later, enjoy a one-and-a-half-hour camel ride that gives you a chance to witness the stunning sunset view. Finally, have a delicious dinner under the starry sky. The trip ended at 9:00 PM when you returned to the city in our jeep. Overall, it was an unforgettable experience that will cherish you forever."
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
      id: "luxury-getaway",
      title: "Camel Cart Safari",
      duration: "1-2 Hours",
      price: "INR 5,000",
      image: "/images/image2.jpg",
    },
    {
      id: "dinner-dunes",
      title: "Dinner On The Dunes",
      duration: "1 Day",
      price: "INR 4,999",
      image: "/images/becf6b_d88e2f2d0ba24db0b67baae114c10cd6~mv2.avif"
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
    let totalPrice = basePrice * Math.min(guests, 2); // Base price for first 2 people
    
    if (guests > 2) {
      const extraPeople = guests - 2;
      const extraCharge = basePrice * 0.30; // 30% extra charge per additional person
      totalPrice += extraPeople * extraCharge;
    }
    
    return Math.round(totalPrice);
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
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{packageData.startTime} - {packageData.endTime}</span>
                </div>
              </div>
              
              {/* Special Note */}
              <div className="special-note">
                <AlertCircle size={16} />
                <span>
                  <strong>Note:</strong> This package requires a minimum of {packageData.minimumGuests} people. 
                  If there is 1 extra after {packageData.minimumGuests} people, an additional charge of {packageData.extraPersonCharge} will apply.
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

            {/* Itinerary */}
            {/* <div className="section">
              <h2 className="section-title">Itinerary</h2>
              <div className="itinerary">
                {packageData.itinerary.map((day, dayIndex) => (
                  <div key={dayIndex} className="day-section">
                    <h3 className="day-title">{day.day}: {day.title}</h3>
                    <div className="day-description">
                      <p>{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Tour Activities */}
            {/* <div className="section">
              <h2 className="section-title">Tour Activities</h2>
              <div className="activities-grid">
                <div className="activity-card">
                  <div className="activity-icon">
                    <Mountain size={32} />
                  </div>
                  <div className="activity-content">
                    <h4>Monument & Village Visits</h4>
                    <p>Explore beautiful monuments and historic villages including the famous abandoned Kuldhara Village</p>
                  </div>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">
                    <Camera size={32} />
                  </div>
                  <div className="activity-content">
                    <h4>Camel Safari</h4>
                    <p>Enjoy a 1.5-hour camel ride through the desert dunes with stunning sunset views</p>
                  </div>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">
                    <Star size={32} />
                  </div>
                  <div className="activity-content">
                    <h4>Cultural Program</h4>
                    <p>Experience traditional Rajasthani folk music, dance performances, and cultural shows</p>
                  </div>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">
                    <MessageCircle size={32} />
                  </div>
                  <div className="activity-content">
                    <h4>Desert Dinner</h4>
                    <p>Enjoy a delicious Rajasthani buffet dinner around a campfire under the starry sky</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Timeline */}
            {/* <div className="section">
              <h2 className="section-title">Tour Timeline</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-time">2:00 PM</div>
                  <div className="timeline-content">
                    <h4>Pickup from Pushkar</h4>
                    <p>Journey begins with pickup from your location in Pushkar city</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">2:30 PM</div>
                  <div className="timeline-content">
                    <h4>Monument & Village Tour</h4>
                    <p>Visit beautiful monuments and explore historic villages including Kuldhara</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">4:00 PM</div>
                  <div className="timeline-content">
                    <h4>Camel Safari Begins</h4>
                    <p>Start your 1.5-hour camel ride through the golden sand dunes</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">5:30 PM</div>
                  <div className="timeline-content">
                    <h4>Sunset Viewing</h4>
                    <p>Witness the stunning desert sunset from the dunes</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">6:30 PM</div>
                  <div className="timeline-content">
                    <h4>Cultural Program</h4>
                    <p>Enjoy traditional folk music, dancing, and singing performances</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">7:30 PM</div>
                  <div className="timeline-content">
                    <h4>Campfire Dinner</h4>
                    <p>Delicious Rajasthani buffet dinner around a warm campfire</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">9:00 PM</div>
                  <div className="timeline-content">
                    <h4>Return to Pushkar</h4>
                    <p>Comfortable jeep ride back to Pushkar city with unforgettable memories</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Booking Sidebar */}
          <div className="booking-sidebar">
            <div className="price-card">
              <div className="price-section">
                <div className="price-info">
                  <div className="current-price">{packageData.price} <span>per Adult</span></div>
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
                  {guests > 2 && (
                    <div className="extra-charge-note">
                      Extra {guests - 2} person(s): +{packageData.extraPersonCharge} each
                    </div>
                  )}
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
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 16px;
        }

        .special-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 15px;
          color: #856404;
          font-size: 14px;
          line-height: 1.5;
        }

        .special-note svg {
          color: #f39c12;
          flex-shrink: 0;
          margin-top: 2px;
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

        .day-description p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
          margin-left: 20px;
          text-align: justify;
        }

        /* Activities Grid */
        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .activity-card {
          background: white;
          border: 2px solid #f8f9fa;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .activity-card:hover {
          border-color: #f39c12;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .activity-icon {
          color: #f39c12;
          margin-bottom: 15px;
        }

        .activity-content h4 {
          color: #2c3e50;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .activity-content p {
          color: #666;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          padding-left: 30px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #f39c12;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 30px;
          padding-left: 40px;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 5px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #f39c12;
          border: 3px solid white;
          box-shadow: 0 0 0 3px #f39c12;
        }

        .timeline-time {
          font-size: 14px;
          font-weight: bold;
          color: #f39c12;
          margin-bottom: 5px;
        }

        .timeline-content h4 {
          color: #2c3e50;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .timeline-content p {
          color: #666;
          line-height: 1.5;
          font-size: 14px;
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

        .price-info {
          text-align: center;
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

        .extra-charge-note {
          margin-top: 8px;
          font-size: 12px;
          color: #f39c12;
          font-weight: 600;
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

          .activities-grid {
            grid-template-columns: 1fr;
          }

          .policies-grid {
            grid-template-columns: 1fr;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .timeline {
            padding-left: 20px;
          }

          .timeline-item {
            padding-left: 30px;
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

          .timeline-item {
            padding-left: 25px;
          }

          .activity-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default HalfDayTourDetail;
