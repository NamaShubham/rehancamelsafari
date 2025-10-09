import React, { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Photo categories and images
  const categories = [
    { id: 'all', name: 'All Photos', count: 0 },
    { id: 'luxury-getaway', name: 'A Luxury Getaway Under the Stars', count: 8 },
    { id: 'camel-safari', name: 'Camel Safari', count: 11 },
    { id: 'jeep-safari', name: 'Jeep Safari', count: 10 },
    { id: 'camp', name: 'Camp', count: 15 },
    // { id: 'dinner-dunes', name: 'Dinner at Dunes', count: 8 },
    { id: 'horse-riding', name: 'Horse Riding', count: 8 },
    // { id: 'desert', name: 'Desert', count: 20 },
    // { id: 'monuments', name: 'Monuments', count: 12 },
    // { id: 'folk-dance', name: 'Folk Dance', count: 6 },
    { id: 'other', name: 'Other', count: 3 }
  ];

  const photos = [
    // Luxury Getaway
    { id: 1, category: 'luxury-getaway', src: '/images/winds-desert-camp-jaisalmer-rj.webp', alt: 'Luxury Desert Camp at Night' },
    { id: 2, category: 'luxury-getaway', src: '/images/9d.jpg', alt: 'Luxury Tent Interior' },
    { id: 3, category: 'luxury-getaway', src: '/images/77b794e9-cad4-467f-9c8a-f104ef690eaf.jpeg', alt: 'Desert Stars View' },
    { id: 4, category: 'luxury-getaway', src: '/images/648b0b5da16b1.avif', alt: 'Luxury Desert Experience' },
    { id: 5, category: 'luxury-getaway', src: '/images/a6.jpg', alt: 'Desert Luxury Setup' },
    { id: 6, category: 'luxury-getaway', src: '/images/a6e85190-1028-41ea-aa7d-8185ad711376.jpeg', alt: 'Luxury Camp Fire' },
    { id: 7, category: 'luxury-getaway', src: '/images/c05a8799-864d-4faf-be41-897342f16b47.jpeg', alt: 'Desert Night Sky' },
    { id: 8, category: 'luxury-getaway', src: '/images/c9edbd0e-c054-459a-a4b8-7820696373bd.jpeg', alt: 'Luxury Desert Dining' },
    { id: 9, category: 'luxury-getaway', src: '/images/cultural program.jpg', alt: 'Pushkar Cultural Program' },
    { id: 10, category: 'luxury-getaway', src: '/images/desert-rose-jaisalmer-luxury-tent-in-thar-desert_aMbKP.jpeg', alt: 'Luxury Tent Interior' },
    { id: 11, category: 'luxury-getaway', src: '/images/gorbandh-palace-dinner-at-sand-dunes-jaisalmer.jpg', alt: 'gorbandh palace dinner at sand dunes jaisalmer' },
    { id: 12, category: 'luxury-getaway', src: '/images/000fecd9-8cc5-4bcf-814a-1ee0a6c63374.jpeg', alt: 'cultural program' },

    // Camel Safari
    { id: 13, category: 'camel-safari', src: '/images/camel-safari-in-jaisalmer.jpg', alt: 'Camel Safari in Desert' },
    { id: 14, category: 'camel-safari', src: '/images/camel-1.jpg', alt: 'Camel Caravan' },
    { id: 15, category: 'camel-safari', src: '/images/f4.jpg', alt: 'Camel Riding Experience' },
    { id: 16, category: 'camel-safari', src: '/images/726347553Bikaner_desert_safari_Main.jpg', alt: 'Desert Camel Trek' },
    { id: 17, category: 'camel-safari', src: '/images/premium_photo-1661962542692-4fe7a4ad6b54.jpeg', alt: 'Camel Safari Sunset' },
    { id: 18, category: 'camel-safari', src: '/images/ocone.jpg', alt: 'Traditional Camel Ride' },
    { id: 19, category: 'camel-safari', src: '/images/csone.jpg', alt: 'Camel Safari Group' },
    { id: 20, category: 'camel-safari', src: '/images/Jaisalmer_Desert_Safari_3_1438755627_HRhRBg.jpg', alt: 'Desert Camel Adventure' },
    { id: 21, category: 'camel-safari', src: '/images/camel-safari-jaisalmer.jpg', alt: 'Camel Safari Experience' },
    { id: 22, category: 'camel-safari', src: '/images/pushkar.jpg', alt: 'Pushkar Camel Safari' },
    { id: 23, category: 'camel-safari', src: '/images/WhatsApp Image 2025-10-08 at 18.30.10.jpeg', alt: 'Pushkar Camel Safari' },

    // Jeep Safari
    { id: 24, category: 'jeep-safari', src: '/images/two-nights-three-days4.jpg', alt: 'Desert Jeep Safari' },
    { id: 25, category: 'jeep-safari', src: '/images/two-nights-three-days5.jpg', alt: 'Off-Road Desert Adventure' },
    { id: 26, category: 'jeep-safari', src: '/images/said-desert-jeep-safari.jpg', alt: 'Jeep in Sand Dunes' },
    { id: 27, category: 'jeep-safari', src: '/images/thar-desert-safari.webp', alt: 'Desert Jeep Tour' },
    { id: 28, category: 'jeep-safari', src: '/images/Desert-Jeep-Safari-in-Jaisalmer-Desert-Royal-Golden-Camp-11.jpg', alt: 'Adventure Jeep Safari' },
    { id: 29, category: 'jeep-safari', src: '/images/3c7144f0-9457-4402-8cc3-b045b9aeb625.jpg', alt: 'Thar Desert Jeep' },
    { id: 30, category: 'jeep-safari', src: '/images/two-nights-three-days2.jpg', alt: 'Desert Exploration' },

    // Camp
    { id: 31, category: 'camp', src: '/images/image_processing20211118-4-pb5ebp.jpg', alt: 'Desert Camp Setup' },
    { id: 32, category: 'camp', src: '/images/desert_camp-1024x685.webp', alt: 'Traditional Desert Tents' },
    { id: 33, category: 'camp', src: '/images/IMG-20210901-WA0035_z5Vd0UUur.webp', alt: 'Camp Fire Evening' },
    { id: 34, category: 'camp', src: '/images/399074701.jpg', alt: 'Desert Camping Experience' },
    { id: 35, category: 'camp', src: '/images/648b0b5da16b1.avif', alt: 'Luxury Desert Camp' },
    { id: 36, category: 'camp', src: '/images/patel-desert-camp.jpg', alt: 'Camp Under Stars' },
    { id: 37, category: 'camp', src: '/images/DSCN0440.webp', alt: 'Desert Camp Life' },

    // Horse Riding
    { id: 38, category: 'horse-riding', src: '/images/WhatsApp Image 2025-10-08 at 18.23.51.jpeg', alt: 'Black Horse' },
    { id: 39, category: 'horse-riding', src: '/images/sunset-ride-july-2023.jpg', alt: 'Sunset Ride' },
    { id: 40, category: 'horse-riding', src: '/images/WhatsApp Image 2025-10-08 at 18.24.58.jpeg', alt: 'Horse Riding' },
    { id: 41, category: 'horse-riding', src: '/images/Horse-riding-in-pushkar-1.webp', alt: 'Horse Riding' },
    { id: 42, category: 'horse-riding', src: '/images/WhatsApp Image 2025-10-08 at 18.29.34.jpeg', alt: 'Horse Riding' },
    // { id: 43, category: 'dinner-dunes', src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Romantic Desert Dinner' },
    // { id: 52, category: 'dinner-dunes', src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Culinary Experience' },
    // { id: 53, category: 'dinner-dunes', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Dinner on Sand Dunes' },

    // Desert
    // { id: 54, category: 'desert', src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Thar Desert Landscape' },
    // { id: 55, category: 'desert', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Sand Dunes Sunset' },
    // { id: 56, category: 'desert', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Sunrise' },
    // { id: 57, category: 'desert', src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Golden Desert Sands' },
    // { id: 58, category: 'desert', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Dunes Pattern' },
    // { id: 59, category: 'desert', src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Vast Desert Expanse' },
    // { id: 60, category: 'desert', src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Beauty' },
    // { id: 61, category: 'desert', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Rajasthan Desert' },
    // { id: 62, category: 'desert', src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Wilderness' },
    // { id: 63, category: 'desert', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Sand Dunes Vista' },
    // { id: 64, category: 'desert', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Horizon' },
    // { id: 65, category: 'desert', src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Serenity' },
    // { id: 66, category: 'desert', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Magic' },
    // { id: 67, category: 'desert', src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Splendor' },
    // { id: 68, category: 'desert', src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Wonder' },
    // { id: 69, category: 'desert', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Majesty' },
    // { id: 70, category: 'desert', src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Grandeur' },
    // { id: 71, category: 'desert', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Tranquility' },
    // { id: 72, category: 'desert', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Adventure' },
    // { id: 73, category: 'desert', src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Experience' },

    // Monuments
    // { id: 74, category: 'monuments', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Pushkar Temple' },
    // { id: 75, category: 'monuments', src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Brahma Temple' },
    // { id: 76, category: 'monuments', src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Pushkar Lake' },
    // { id: 77, category: 'monuments', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Historic Architecture' },
    // { id: 78, category: 'monuments', src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Ancient Structures' },
    // { id: 79, category: 'monuments', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Cultural Heritage' },
    // { id: 80, category: 'monuments', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Religious Sites' },
    // { id: 81, category: 'monuments', src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Traditional Architecture' },
    // { id: 82, category: 'monuments', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Historic Monuments' },
    // { id: 83, category: 'monuments', src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Pushkar Heritage' },
    // { id: 84, category: 'monuments', src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Sacred Places' },
    // { id: 85, category: 'monuments', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Cultural Sites' },

    // Folk Dance
    // { id: 86, category: 'folk-dance', src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Rajasthani Folk Dance' },
    // { id: 87, category: 'folk-dance', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Traditional Dance Performance' },
    // { id: 88, category: 'folk-dance', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Cultural Dance Show' },
    // { id: 89, category: 'folk-dance', src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Dance Performance' },
    // { id: 90, category: 'folk-dance', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Folk Music and Dance' },
    // { id: 91, category: 'folk-dance', src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Traditional Entertainment' },

    // Other
    { id: 92, category: 'other', src: '/images/WhatsApp Image 2025-10-08 at 18.27.56.jpeg', alt: 'Happy Clients' },
    { id: 93, category: 'other', src: '/images/w3696h1960x0y488-1860badf.avif', alt: 'Local Culture' },
    { id: 94, category: 'other', src: '/images/WhatsApp-Image-2024-11-15-at-19.14.57-1-780x470.jpeg', alt: 'Desert Flora' },
    // { id: 95, category: 'other', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Traditional Crafts' },
    // { id: 96, category: 'other', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Local Markets' },
    // { id: 97, category: 'other', src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Life' },
    // { id: 98, category: 'other', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Pushkar Fair' },
    // { id: 99, category: 'other', src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Local Traditions' },
    // { id: 100, category: 'other', src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert Adventures' }
  ];

  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = photos.length;
    } else {
      category.count = photos.filter(photo => photo.category === category.id).length;
    }
  });

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo) => {
    setSelectedImage(photo);
    setCurrentImageIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredPhotos.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredPhotos[prevIndex]);
  };

  return (
    <div className="gallery-page">

      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Photo Gallery</h1>
          <p>See the beauty of Pushkar's vibrant markets, stunning temples, and awe-inspiring Thar desert through Rehan Camel Safari's photo gallery. These glamorous images showcase the diverse culture and rich heritage of this unique destination and are sure to leave you inspired to visit the Holy City.</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="photo-grid-section">
        <div className="container">
          <div className="photo-grid">
            {filteredPhotos.map(photo => (
              <div key={photo.id} className="photo-item" onClick={() => openLightbox(photo)}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="photo-overlay">
                  <span className="photo-title">{photo.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              <ChevronLeft size={30} />
            </button>
            <button className="lightbox-next" onClick={nextImage}>
              <ChevronRight size={30} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-info">
              <h3>{selectedImage.alt}</h3>
              <p>{currentImageIndex + 1} of {filteredPhotos.length}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-page {
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

        .gallery-hero {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 160px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .gallery-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/images/WhatsApp Image 2025-10-07 at 17.03.13.jpeg') center/cover;
          opacity: 0.2;
          z-index: 1;
        }

        .gallery-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .gallery-hero h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .gallery-hero p {
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.9;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .category-filter {
          padding: 40px 0;
          background: white;
          border-bottom: 1px solid #eee;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }

        .filter-btn {
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          color: #495057;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .filter-btn:hover {
          background: #f39c12;
          border-color: #f39c12;
          color: white;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: #f39c12;
          border-color: #f39c12;
          color: white;
          box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
        }

        .photo-grid-section {
          padding: 60px 0;
          background: white;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .photo-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .photo-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .photo-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .photo-item:hover img {
          transform: scale(1.1);
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 30px 20px 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .photo-item:hover .photo-overlay {
          transform: translateY(0);
        }

        .photo-title {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 10px;
        }

        .lightbox-close {
          position: absolute;
          top: -50px;
          right: -50px;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .lightbox-close:hover {
          background: rgba(255,255,255,0.3);
        }

        .lightbox-prev,
        .lightbox-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 15px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .lightbox-prev {
          left: -80px;
        }

        .lightbox-next {
          right: -80px;
        }

        .lightbox-prev:hover,
        .lightbox-next:hover {
          background: rgba(255,255,255,0.3);
        }

        .lightbox-info {
          text-align: center;
          color: white;
          margin-top: 20px;
        }

        .lightbox-info h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .lightbox-info p {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .gallery-hero h1 {
            font-size: 2.5rem;
          }

          .gallery-hero p {
            font-size: 1rem;
          }

          .filter-buttons {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
          }

          .filter-btn {
            flex-shrink: 0;
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .photo-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .back-button {
            position: static;
            margin: 20px;
            align-self: flex-start;
          }

          .lightbox-close {
            top: -40px;
            right: -10px;
          }

          .lightbox-prev {
            left: -60px;
          }

          .lightbox-next {
            right: -60px;
          }

          .lightbox-content {
            max-width: 95vw;
          }
        }

        @media (max-width: 480px) {
          .photo-grid {
            grid-template-columns: 1fr;
          }

          .lightbox-prev,
          .lightbox-next {
            display: none;
          }

          .lightbox-close {
            top: 10px;
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;

