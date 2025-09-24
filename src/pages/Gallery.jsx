import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  // Sample gallery items - you can replace these with actual images
  const galleryItems = [
    { 
      id: 1, 
      title: "Gruhapravesha Ceremony", 
      description: "Sacred decorations for house warming ceremony with traditional elements.",
      eventType: "gruhapravesha",
      image: '/src/Images/HouseWarming/pic2.jpeg'
    },
    { 
      id: 2, 
      title: "Birthday Celebrations", 
      description: "A joyful burst of colorful flowers, crafted to spread smiles and celebrate special days.",
      eventType: "birthday",
      imageCount: 3,
      image: '/src/assets/Birthday/pic1.jpeg'
    },
    { 
      id: 3, 
      title: "Naming Ceremony", 
      description: "Gentle white lilies and fresh greenery, representing purity and blessings for the newborn.",
      eventType: "cradle",
      imageCount: 2,
      image: '/src/assets/NamingCeremony/pic1.jpeg'
    },
    { 
      id: 4, 
      title: "Seemantham Decor", 
      description: "Traditional red roses and festive blooms to honor motherhood and auspicious beginnings.",
      eventType: "seemantham",
      imageCount: 3,
      image: '/src/assets/BabyShower/pic1.jpeg'
    },
    { 
      id: 5, 
      title: "Engagement Decor", 
      description: "Romantic tulips and daffodils, setting the stage for love and togetherness.",
      eventType: "engagement",
      imageCount: 4,
      image: '/src/assets/Engagement/pic1.jpeg'
    },
    { 
      id: 6, 
      title: "Sangeet Decor", 
      description: "Vibrant marigolds and festive accents.",
      eventType: "sangeet",
      imageCount: 3,
      image: '/src/assets/Sangeet/pic1.jpeg'
    },
    { 
      id: 7, 
      title: "Wedding Decorations", 
      description: "Grand floral arches with roses and orchids, creating an unforgettable wedding ambience.",
      eventType: "wedding",
      imageCount: 5,
      image: '/src/assets/Wedding/pic1.jpeg'
    },
    
  ];

  const handleGalleryItemClick = (eventType) => {
    navigate(`/gallery/${eventType}`);
  };
  

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Explore our beautiful collection of floral arrangements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleGalleryItemClick(item.eventType)}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 group"
            >
              <div className="relative h-64 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🌸</div>
                    <p className="text-sm">Click to View Photos</p>
                  </div>
                )}
                {/* Photo Count Badge */}
               
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                 
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    View Gallery
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
