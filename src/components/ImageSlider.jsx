import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Camel Safari Adventure",
      subtitle: "Experience the magic of the Thar Desert",
      description: "Embark on an unforgettable journey through golden sand dunes"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Desert Camping Under Stars",
      subtitle: "Luxury meets wilderness",
      description: "Sleep under a blanket of stars in our premium desert camps"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Spectacular Desert Sunsets",
      subtitle: "Nature's daily masterpiece",
      description: "Witness breathtaking sunsets that paint the desert in gold"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Cultural Desert Experiences",
      subtitle: "Authentic Rajasthani traditions",
      description: "Immerse yourself in local culture with folk music and dance"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Traditional Rajasthani Hospitality",
      subtitle: "Welcome to Pushkar",
      description: "Experience warm hospitality and authentic desert adventures"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`
            }}
          >
            <div className="slide-content">
              <div className="container">
                <div className="slide-text">
                  <h1 className="slide-title">{slide.title}</h1>
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-buttons">
                    <a href="#packages" className="btn btn-primary">Explore Packages</a>
                    <a href="https://wa.me/919414166565" className="btn btn-whatsapp">WhatsApp Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <button className="autoplay-control" onClick={toggleAutoPlay}>
        {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>

      <style jsx>{`
        .image-slider {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          display: flex;
          align-items: center;
        }

        .slide.active {
          opacity: 1;
        }

        .slide-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .slide-text {
          color: white;
          max-width: 600px;
          animation: slideInUp 1s ease-out;
        }

        .slide.active .slide-text {
          animation: slideInUp 1s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 15px;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
          color: #f39c12;
        }

        .slide-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 20px;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
        }

        .slide-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
        }

        .slide-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          font-size: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .btn-primary {
          background: linear-gradient(45deg, #f39c12, #e67e22);
          color: white;
        }

        .btn-primary:hover {
          background: linear-gradient(45deg, #e67e22, #d35400);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .btn-whatsapp {
          background: #25D366;
          color: white;
        }

        .btn-whatsapp:hover {
          background: #128C7E;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        /* Navigation Arrows */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 3;
          backdrop-filter: blur(10px);
        }

        .nav-arrow:hover {
          background: rgba(243, 156, 18, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow-left {
          left: 30px;
        }

        .nav-arrow-right {
          right: 30px;
        }

        /* Slide Indicators */
        .slide-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          z-index: 3;
        }

        .indicator {
          width: 1px;
          height: 1px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #f39c12;
          border-color: #f39c12;
          transform: scale(1.5);
        }

        .indicator:hover {
          border-color: #f39c12;
        }

        /* Auto-play Control */
        .autoplay-control {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 3;
          backdrop-filter: blur(10px);
        }

        .autoplay-control:hover {
          background: rgba(243, 156, 18, 0.8);
          transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .slide-title {
            font-size: 3rem;
          }

          .slide-subtitle {
            font-size: 1.3rem;
          }

          .slide-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .image-slider {
            height: 80vh;
          }

          .slide-title {
            font-size: 2.5rem;
          }

          .slide-subtitle {
            font-size: 1.2rem;
          }

          .slide-description {
            font-size: 1rem;
            margin-bottom: 25px;
          }

          .slide-buttons {
            flex-direction: column;
            gap: 15px;
          }

          .btn {
            padding: 12px 25px;
            font-size: 14px;
            text-align: center;
          }

          .nav-arrow {
            width: 50px;
            height: 50px;
          }

          .nav-arrow-left {
            left: 20px;
          }

          .nav-arrow-right {
            right: 20px;
          }

          .slide-indicators {
            bottom: 20px;
          }

          .autoplay-control {
            bottom: 20px;
            right: 20px;
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 480px) {
          .image-slider {
            height: 70vh;
          }

          .slide-title {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .slide-subtitle {
            font-size: 1rem;
            margin-bottom: 15px;
          }

          .slide-description {
            font-size: 0.9rem;
            margin-bottom: 20px;
          }

          .slide-text {
            max-width: 90%;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
          }

          .nav-arrow-left {
            left: 15px;
          }

          .nav-arrow-right {
            right: 15px;
          }

          .indicator {
            width: 3px;
            height: 3px;
          }

          .slide-indicators {
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
