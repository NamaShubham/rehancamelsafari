import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "/images/73581857-c9ce-490d-b8e4-99fc1ca52253.jpeg",
      title: "Camel Safari Adventure",
      subtitle: "Experience the magic of the Thar Desert",
      description: "Embark on an unforgettable journey through golden sand dunes"
    },
    {
      id: 2,
      image: "/images/9d.jpg",
      title: "Desert Camping",
      subtitle: "Luxury meets wilderness",
      description: "Sleep under a blanket of stars in our premium desert camps"
    },
    {
      id: 3,
      image: "/images/WhatsApp-Image-2024-05-13-at-03.44.40_ef788819.webp",
      title: "Spectacular Desert Sunsets",
      subtitle: "Nature's daily masterpiece",
      description: "Witness breathtaking sunsets that paint the desert in gold"
    },
    {
      id: 4,
      image: "/images/a8be2ed2-b99b-4a1f-a7e3-c9eeed8100a1.jpeg",
      title: "Cultural Desert Experiences",
      subtitle: "Authentic Rajasthani traditions",
      description: "Immerse yourself in local culture with folk music and dance"
    },
    {
      id: 5,
      image: "/images/a6.jpg",
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



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
            height: 85vh;
          }

          .slide-text {
            max-width: 95%;
            padding: 0 20px;
          }

          .slide-title {
            font-size: 2.8rem;
            line-height: 1.1;
          }

          .slide-subtitle {
            font-size: 1.3rem;
          }

          .slide-description {
            font-size: 1.1rem;
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
        }

        @media (max-width: 480px) {
          .image-slider {
            height: 75vh;
          }

          .slide-text {
            max-width: 95%;
            padding: 0 15px;
          }

          .slide-title {
            font-size: 2.2rem;
            margin-bottom: 10px;
            line-height: 1.1;
          }

          .slide-subtitle {
            font-size: 1.1rem;
            margin-bottom: 15px;
          }

          .slide-description {
            font-size: 1rem;
            margin-bottom: 20px;
            line-height: 1.5;
          }

          .btn {
            padding: 10px 20px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
