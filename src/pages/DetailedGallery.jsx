import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailedGallery = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample photo data for different events
  const eventPhotos = {
    'gruhapravesha': {
      title: "Gruhapravesha Decorations",
      description: "Beautiful floral arrangements for your new home",
      photos: [
        {
          id: 1,
          url: '/src/Images/HouseWarming/pic2.jpeg',

        },
        {
          id: 2,
          url: '/src/Images/HouseWarming/pic3.jpeg',

        },
        {
          id: 3,
          url: '/src/Images/HouseWarming/pic4.jpeg',

        },
        {
          id: 4,
          url: '/src/Images/HouseWarming/pic5.jpeg',

        },
        {
          id: 5,
          url: '/src/Images/HouseWarming/pic6.jpeg',

        },
        {
          id: 6,
          url: '/src/Images/HouseWarming/pic7.jpeg',

        },
        {
          id: 7,
          url: '/src/Images/HouseWarming/pic8.jpeg',

        },
        {
          id: 8,
          url: '/src/Images/HouseWarming/pic9.jpeg',

        },
        {
          id: 9,
          url: '/src/Images/HouseWarming/pic10.jpeg',

        },
        {
          id: 10,
          url: '/src/Images/HouseWarming/pic11.jpeg',

        },
        {
          id: 11,
          url: '/src/Images/HouseWarming/pic12.jpeg',

        },
        {
          id: 12,
          url: '/src/Images/HouseWarming/pic14.jpeg',

        },
        {
          id: 13,
          url: '/src/Images/HouseWarming/pic15.jpeg',

        },
        {
          id: 14,
          url: '/src/Images/HouseWarming/pic16.jpeg',

        },
        {
          id: 15,
          url: '/src/Images/HouseWarming/pic17.jpeg',

        },
        {
          id: 16,
          url: '/src/Images/HouseWarming/pic18.jpeg',

        },
        {
          id: 17,
          url: '/src/Images/HouseWarming/pic21.jpeg',

        },
        {
          id: 18,
          url: '/src/Images/HouseWarming/pic22.jpeg',

        },
        {
          id: 19,
          url: '/src/Images/HouseWarming/pic24.jpeg',

        },
        {
          id: 20,
          url: '/src/Images/HouseWarming/pic25.jpeg',

        },
        {
          id: 21,
          url: '/src/Images/HouseWarming/pic27.jpeg',

        },
        {
          id: 22,
          url: '/src/Images/HouseWarming/pic28.jpeg',

        },
        {
          id: 23,
          url: '/src/Images/HouseWarming/pic29.jpeg',

        },
        {
          id: 24,
          url: '/src/Images/HouseWarming/pic30.jpeg',

        },
        {
          id: 25,
          url: '/src/Images/HouseWarming/pic31.jpeg',

        },
        {
          id: 26,
          url: '/src/Images/HouseWarming/pic32.jpeg',

        },
        {
          id: 27,
          url: '/src/Images/HouseWarming/pic33.jpeg',

        },
        {
          id: 28,
          url: '/src/Images/HouseWarming/pic34.jpeg',

        },
        {
          id: 29,
          url: '/src/Images/HouseWarming/pic35.jpeg',

        },
        {
          id: 30,
          url: '/src/Images/HouseWarming/pic36.jpeg',

        },
        {
          id: 31,
          url: '/src/Images/HouseWarming/pic37.jpeg',

        },

      ]
    },
    'birthday': {
      title: "Birthday Celebrations",
      description: "Colorful arrangements for special birthdays",
      photos: [
        {
          id: 1,
          url: "/src/assets/Birthday/pic1.jpeg",

        },
        {
          "id": 2,
          "url": "/src/assets/Birthday/pic2.jpeg"
        },
        {
          "id": 3,
          "url": "/src/assets/Birthday/pic3.jpeg"
        },
        {
          "id": 4,
          "url": "/src/assets/Birthday/pic4.jpeg"
        },
        {
          "id": 5,
          "url": "/src/assets/Birthday/pic5.jpeg"
        },
        {
          "id": 6,
          "url": "/src/assets/Birthday/pic6.jpeg"
        },
        {
          "id": 7,
          "url": "/src/assets/Birthday/pic7.jpeg"
        },
        {
          "id": 8,
          "url": "/src/assets/Birthday/pic8.jpeg"
        },
        {
          "id": 9,
          "url": "/src/assets/Birthday/pic9.jpeg"
        },
        {
          "id": 10,
          "url": "/src/assets/Birthday/pic10.jpeg"
        },
        {
          "id": 11,
          "url": "/src/assets/Birthday/pic11.jpeg"
        },
        {
          "id": 12,
          "url": "/src/assets/Birthday/pic12.jpeg"
        },
        {
          "id": 13,
          "url": "/src/assets/Birthday/pic13.jpeg"
        },
        {
          "id": 14,
          "url": "/src/assets/Birthday/pic14.jpeg"
        },
        {
          "id": 15,
          "url": "/src/assets/Birthday/pic15.jpeg"
        },
        {
          "id": 16,
          "url": "/src/assets/Birthday/pic16.jpeg"
        },
        {
          "id": 17,
          "url": "/src/assets/Birthday/pic17.jpeg"
        },
        {
          "id": 18,
          "url": "/src/assets/Birthday/pic18.jpeg"
        },
        {
          "id": 19,
          "url": "/src/assets/Birthday/pic19.jpeg"
        },
        {
          "id": 20,
          "url": "/src/assets/Birthday/pic20.jpeg"
        },

      ]
    },
    'wedding': {
      title: "Wedding Decorations",
      description: "Romantic floral arrangements for your special day",
      photos: [
        {
          id: 1,
          url: "/src/assets/Wedding/pic1.jpeg",
        },
        {
          "id": 2,
          "url": "/src/assets/Wedding/pic2.jpeg"
        },
        {
          "id": 3,
          "url": "/src/assets/Wedding/pic3.jpeg"
        },
        {
          "id": 4,
          "url": "/src/assets/Wedding/pic4.jpeg"
        },
        {
          "id": 5,
          "url": "/src/assets/Wedding/pic5.jpeg"
        },
        {
          "id": 6,
          "url": "/src/assets/Wedding/pic6.jpeg"
        },
        {
          "id": 7,
          "url": "/src/assets/Wedding/pic7.jpeg"
        },
        {
          "id": 8,
          "url": "/src/assets/Wedding/pic8.jpeg"
        },
        {
          "id": 9,
          "url": "/src/assets/Wedding/pic9.jpeg"
        },
        {
          "id": 10,
          "url": "/src/assets/Wedding/pic10.jpeg"
        },
        {
          "id": 11,
          "url": "/src/assets/Wedding/pic11.jpeg"
        },
        {
          "id": 12,
          "url": "/src/assets/Wedding/pic12.jpeg"
        },
        {
          "id": 13,
          "url": "/src/assets/Wedding/pic13.jpeg"
        },
        {
          "id": 14,
          "url": "/src/assets/Wedding/pic14.jpeg"
        },
        {
          "id": 15,
          "url": "/src/assets/Wedding/pic15.jpeg"
        },
        {
          "id": 16,
          "url": "/src/assets/Wedding/pic16.jpeg"
        },
        {
          "id": 17,
          "url": "/src/assets/Wedding/pic17.jpeg"
        },
        {
          "id": 18,
          "url": "/src/assets/Wedding/pic18.jpeg"
        },
        {
          "id": 19,
          "url": "/src/assets/Wedding/pic19.jpeg"
        }
      ]
    },
    'sangeet': {
      title: "Sangeeth Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: '/src/assets/Sangeet/pic1.jpeg'
        },
        {
          "id": 2,
          "url": "/src/assets/Sangeet/pic2.jpeg"
        },
        {
          "id": 3,
          "url": "/src/assets/Sangeet/pic3.jpeg"
        },
        {
          "id": 4,
          "url": "/src/assets/Sangeet/pic4.jpeg"
        },
        {
          "id": 5,
          "url": "/src/assets/Sangeet/pic5.jpeg"
        },
        {
          "id": 6,
          "url": "/src/assets/Sangeet/pic6.jpeg"
        },
        {
          "id": 7,
          "url": "/src/assets/Sangeet/pic7.jpeg"
        }
      ]
    },
    'cradle': {
      title: "Naming Ceremony Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: "/src/assets/NamingCeremony/pic1.jpeg",
        },
        {
          "id": 2,
          "url": "/src/assets/NamingCeremony/pic2.jpeg"
        },
        {
          "id": 3,
          "url": "/src/assets/NamingCeremony/pic3.jpeg"
        },
        {
          "id": 4,
          "url": "/src/assets/NamingCeremony/pic4.jpeg"
        },
        {
          "id": 5,
          "url": "/src/assets/NamingCeremony/pic5.jpeg"
        },
        {
          "id": 6,
          "url": "/src/assets/NamingCeremony/pic6.jpeg"
        },
        {
          "id": 7,
          "url": "/src/assets/NamingCeremony/pic7.jpeg"
        },
        {
          "id": 8,
          "url": "/src/assets/NamingCeremony/pic8.jpeg"
        },
        {
          "id": 9,
          "url": "/src/assets/NamingCeremony/pic9.jpeg"
        },
        {
          "id": 10,
          "url": "/src/assets/NamingCeremony/pic10.jpeg"
        },
        {
          "id": 11,
          "url": "/src/assets/NamingCeremony/pic11.jpeg"
        },
        {
          "id": 12,
          "url": "/src/assets/NamingCeremony/pic12.jpeg"
        },
        {
          "id": 13,
          "url": "/src/assets/NamingCeremony/pic13.jpeg"
        },
        {
          "id": 14,
          "url": "/src/assets/NamingCeremony/pic14.jpeg"
        },
        {
          "id": 15,
          "url": "/src/assets/NamingCeremony/pic15.jpeg"
        }

      ]
    },
    'seemantham': {
      title: "Seemantham Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: "/src/assets/BabyShower/pic1.jpeg",
        },
        {
          "id": 2,
          "url": "/src/assets/BabyShower/pic2.jpeg"
        },
        {
          "id": 3,
          "url": "/src/assets/BabyShower/pic3.jpeg"
        },
        {
          "id": 4,
          "url": "/src/assets/BabyShower/pic4.jpeg"
        },
        {
          "id": 5,
          "url": "/src/assets/BabyShower/pic5.jpeg"
        },
        {
          "id": 6,
          "url": "/src/assets/BabyShower/pic6.jpeg"
        },
        {
          "id": 7,
          "url": "/src/assets/BabyShower/pic7.jpeg"
        },
        {
          "id": 8,
          "url": "/src/assets/BabyShower/pic8.jpeg"
        },
        {
          "id": 9,
          "url": "/src/assets/BabyShower/pic9.jpeg"
        },
        {
          "id": 10,
          "url": "/src/assets/BabyShower/pic10.jpeg"
        },
        {
          "id": 11,
          "url": "/src/assets/BabyShower/pic11.jpeg"
        },
        {
          "id": 12,
          "url": "/src/assets/BabyShower/pic12.jpeg"
        },
        {
          "id": 13,
          "url": "/src/assets/BabyShower/pic13.jpeg"
        },
        {
          "id": 14,
          "url": "/src/assets/BabyShower/pic14.jpeg"
        },
        {
          "id": 15,
          "url": "/src/assets/BabyShower/pic15.jpeg"
        },
        {
          "id": 16,
          "url": "/src/assets/BabyShower/pic16.jpeg"
        },
        {
          "id": 17,
          "url": "/src/assets/BabyShower/pic17.jpeg"
        }
      ]
    },
    'engagement': {
      title: "Engagement Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: "/src/assets/Engagement/pic1.jpeg",
        },
        {
          "id": 2,
          "url": "/src/assets/Engagement/pic2.jpeg"
        },
        {
          "id": 3,
          "url": "/src/assets/Engagement/pic3.jpeg"
        },
        {
          "id": 4,
          "url": "/src/assets/Engagement/pic4.jpeg"
        },
        {
          "id": 5,
          "url": "/src/assets/Engagement/pic5.jpeg"
        },
        {
          "id": 6,
          "url": "/src/assets/Engagement/pic6.jpeg"
        },
        {
          "id": 7,
          "url": "/src/assets/Engagement/pic7.jpeg"
        },
        {
          "id": 8,
          "url": "/src/assets/Engagement/pic8.jpeg"
        },
        {
          "id": 9,
          "url": "/src/assets/Engagement/pic9.jpeg"
        },
        {
          "id": 10,
          "url": "/src/assets/Engagement/pic10.jpeg"
        },
        {
          "id": 11,
          "url": "/src/assets/Engagement/pic11.jpeg"
        },
        {
          "id": 12,
          "url": "/src/assets/Engagement/pic12.jpeg"
        },
        {
          "id": 13,
          "url": "/src/assets/Engagement/pic13.jpeg"
        },
        {
          "id": 14,
          "url": "/src/assets/Engagement/pic14.jpeg"
        }

      ]
    },

  };

  const currentEvent = eventPhotos[eventType] || eventPhotos['gruhapravesha'];
  const photos = currentEvent.photos;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/gallery')}
                aria-label="Back to Gallery"
                className="text-black  text-xs font-medium"
              >
                Back to Gallery
              </button>


            </div>

            {/* Center Title */}
            <p className="text-2xl italic font-semibold text-gray-900 text-center">
              {currentEvent.title}
            </p>

            {/* Right Counter */}
            <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              {currentImageIndex + 1} of {photos.length}
            </div>
          </div>
        </div>
      </header>


      {/* Main Gallery Layout */}
      <div className="w-full py-6">
        {/* Main Image Display */}
        <div className="relative mb-6">
          <div className="relative bg-white shadow-lg overflow-hidden">
            {/* Main Image */}
            <div className="relative aspect-[16/9] bg-gray-100 max-h-96 w-full">
              <img
                src={photos[currentImageIndex].url}
                alt={photos[currentImageIndex].title}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4  text-black top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4  text-black top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {currentImageIndex + 1} / {photos.length}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Carousel */}
        <div className="bg-white shadow-lg p-4 mx-4">
          <div className="flex space-x-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${index === currentImageIndex
                    ? 'ring-2 ring-blue-500 ring-offset-2 scale-105'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedGallery;
