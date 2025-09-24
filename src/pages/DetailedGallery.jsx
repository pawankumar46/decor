import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import all HouseWarming photos
import pic2Hw from '../Images/HouseWarming/pic2.jpeg';
import pic3Hw from '../Images/HouseWarming/pic3.jpeg';
import pic4Hw from '../Images/HouseWarming/pic4.jpeg';
import pic5Hw from '../Images/HouseWarming/pic5.jpeg';
import pic6Hw from '../Images/HouseWarming/pic6.jpeg';
import pic7Hw from '../Images/HouseWarming/pic7.jpeg';
import pic8Hw from '../Images/HouseWarming/pic8.jpeg';
import pic9Hw from '../Images/HouseWarming/pic9.jpeg';
import pic10Hw from '../Images/HouseWarming/pic10.jpeg';
import pic11Hw from '../Images/HouseWarming/pic11.jpeg';
import pic12Hw from '../Images/HouseWarming/pic12.jpeg';
import pic14Hw from '../Images/HouseWarming/pic14.jpeg';
import pic15Hw from '../Images/HouseWarming/pic15.jpeg';
import pic16Hw from '../Images/HouseWarming/pic16.jpeg';
import pic17Hw from '../Images/HouseWarming/pic17.jpeg';
import pic18Hw from '../Images/HouseWarming/pic18.jpeg';
import pic21Hw from '../Images/HouseWarming/pic21.jpeg';
import pic22Hw from '../Images/HouseWarming/pic22.jpeg';
import pic24Hw from '../Images/HouseWarming/pic24.jpeg';
import pic25Hw from '../Images/HouseWarming/pic25.jpeg';
import pic27Hw from '../Images/HouseWarming/pic27.jpeg';
import pic28Hw from '../Images/HouseWarming/pic28.jpeg';
import pic29Hw from '../Images/HouseWarming/pic29.jpeg';
import pic30Hw from '../Images/HouseWarming/pic30.jpeg';
import pic31Hw from '../Images/HouseWarming/pic31.jpeg';
import pic32Hw from '../Images/HouseWarming/pic32.jpeg';
import pic33Hw from '../Images/HouseWarming/pic33.jpeg';
import pic34Hw from '../Images/HouseWarming/pic34.jpeg';
import pic35Hw from '../Images/HouseWarming/pic35.jpeg';
import pic36Hw from '../Images/HouseWarming/pic36.jpeg';
import pic37Hw from '../Images/HouseWarming/pic37.jpeg';

// Import all Birthday photos
import pic1Bd from '../assets/Birthday/pic1.jpeg';
import pic2Bd from '../assets/Birthday/pic2.jpeg';
import pic3Bd from '../assets/Birthday/pic3.jpeg';
import pic4Bd from '../assets/Birthday/pic4.jpeg';
import pic5Bd from '../assets/Birthday/pic5.jpeg';
import pic6Bd from '../assets/Birthday/pic6.jpeg';
import pic7Bd from '../assets/Birthday/pic7.jpeg';
import pic8Bd from '../assets/Birthday/pic8.jpeg';
import pic9Bd from '../assets/Birthday/pic9.jpeg';
import pic10Bd from '../assets/Birthday/pic10.jpeg';
import pic11Bd from '../assets/Birthday/pic11.jpeg';
import pic12Bd from '../assets/Birthday/pic12.jpeg';
import pic13Bd from '../assets/Birthday/pic13.jpeg';
import pic14Bd from '../assets/Birthday/pic14.jpeg';
import pic15Bd from '../assets/Birthday/pic15.jpeg';
import pic16Bd from '../assets/Birthday/pic16.jpeg';
import pic17Bd from '../assets/Birthday/pic17.jpeg';
import pic18Bd from '../assets/Birthday/pic18.jpeg';
import pic19Bd from '../assets/Birthday/pic19.jpeg';
import pic20Bd from '../assets/Birthday/pic20.jpeg';

// Import all Wedding photos
import pic1Wd from '../assets/Wedding/pic1.jpeg';
import pic2Wd from '../assets/Wedding/pic2.jpeg';
import pic3Wd from '../assets/Wedding/pic3.jpeg';
import pic4Wd from '../assets/Wedding/pic4.jpeg';
import pic5Wd from '../assets/Wedding/pic5.jpeg';
import pic6Wd from '../assets/Wedding/pic6.jpeg';
import pic7Wd from '../assets/Wedding/pic7.jpeg';
import pic8Wd from '../assets/Wedding/pic8.jpeg';
import pic9Wd from '../assets/Wedding/pic9.jpeg';
import pic10Wd from '../assets/Wedding/pic10.jpeg';
import pic11Wd from '../assets/Wedding/pic11.jpeg';
import pic12Wd from '../assets/Wedding/pic12.jpeg';
import pic13Wd from '../assets/Wedding/pic13.jpeg';
import pic14Wd from '../assets/Wedding/pic14.jpeg';
import pic15Wd from '../assets/Wedding/pic15.jpeg';
import pic16Wd from '../assets/Wedding/pic16.jpeg';
import pic17Wd from '../assets/Wedding/pic17.jpeg';
import pic18Wd from '../assets/Wedding/pic18.jpeg';
import pic19Wd from '../assets/Wedding/pic19.jpeg';

// Import all Sangeet photos
import pic1Sg from '../assets/Sangeet/pic1.jpeg';
import pic2Sg from '../assets/Sangeet/pic2.jpeg';
import pic3Sg from '../assets/Sangeet/pic3.jpeg';
import pic4Sg from '../assets/Sangeet/pic4.jpeg';
import pic5Sg from '../assets/Sangeet/pic5.jpeg';
import pic6Sg from '../assets/Sangeet/pic6.jpeg';
import pic7Sg from '../assets/Sangeet/pic7.jpeg';

// Import all NamingCeremony photos
import pic1Nc from '../assets/NamingCeremony/pic1.jpeg';
import pic2Nc from '../assets/NamingCeremony/pic2.jpeg';
import pic3Nc from '../assets/NamingCeremony/pic3.jpeg';
import pic4Nc from '../assets/NamingCeremony/pic4.jpeg';
import pic5Nc from '../assets/NamingCeremony/pic5.jpeg';
import pic6Nc from '../assets/NamingCeremony/pic6.jpeg';
import pic7Nc from '../assets/NamingCeremony/pic7.jpeg';
import pic8Nc from '../assets/NamingCeremony/pic8.jpeg';
import pic9Nc from '../assets/NamingCeremony/pic9.jpeg';
import pic10Nc from '../assets/NamingCeremony/pic10.jpeg';
import pic11Nc from '../assets/NamingCeremony/pic11.jpeg';
import pic12Nc from '../assets/NamingCeremony/pic12.jpeg';
import pic13Nc from '../assets/NamingCeremony/pic13.jpeg';
import pic14Nc from '../assets/NamingCeremony/pic14.jpeg';
import pic15Nc from '../assets/NamingCeremony/pic15.jpeg';

// Import all BabyShower photos
import pic1Bs from '../assets/BabyShower/pic1.jpeg';
import pic2Bs from '../assets/BabyShower/pic2.jpeg';
import pic3Bs from '../assets/BabyShower/pic3.jpeg';
import pic4Bs from '../assets/BabyShower/pic4.jpeg';
import pic5Bs from '../assets/BabyShower/pic5.jpeg';
import pic6Bs from '../assets/BabyShower/pic6.jpeg';
import pic7Bs from '../assets/BabyShower/pic7.jpeg';
import pic8Bs from '../assets/BabyShower/pic8.jpeg';
import pic9Bs from '../assets/BabyShower/pic9.jpeg';
import pic10Bs from '../assets/BabyShower/pic10.jpeg';
import pic11Bs from '../assets/BabyShower/pic11.jpeg';
import pic12Bs from '../assets/BabyShower/pic12.jpeg';
import pic13Bs from '../assets/BabyShower/pic13.jpeg';
import pic14Bs from '../assets/BabyShower/pic14.jpeg';
import pic15Bs from '../assets/BabyShower/pic15.jpeg';
import pic16Bs from '../assets/BabyShower/pic16.jpeg';
import pic17Bs from '../assets/BabyShower/pic17.jpeg';

// Import all Engagement photos
import pic1Eg from '../assets/Engagement/pic1.jpeg';
import pic2Eg from '../assets/Engagement/pic2.jpeg';
import pic3Eg from '../assets/Engagement/pic3.jpeg';
import pic4Eg from '../assets/Engagement/pic4.jpeg';
import pic5Eg from '../assets/Engagement/pic5.jpeg';
import pic6Eg from '../assets/Engagement/pic6.jpeg';
import pic7Eg from '../assets/Engagement/pic7.jpeg';
import pic8Eg from '../assets/Engagement/pic8.jpeg';
import pic9Eg from '../assets/Engagement/pic9.jpeg';
import pic10Eg from '../assets/Engagement/pic10.jpeg';
import pic11Eg from '../assets/Engagement/pic11.jpeg';
import pic12Eg from '../assets/Engagement/pic12.jpeg';
import pic13Eg from '../assets/Engagement/pic13.jpeg';
import pic14Eg from '../assets/Engagement/pic14.jpeg';



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
          url: pic2Hw,
        },
        {
          id: 2,
          url: pic3Hw,
        },
        {
          id: 3,
          url: pic4Hw,
        },
        {
          id: 4,
          url: pic5Hw,
        },
        {
          id: 5,
          url: pic6Hw,
        },
        {
          id: 6,
          url: pic7Hw,
        },
        {
          id: 7,
          url: pic8Hw,
        },
        {
          id: 8,
          url: pic9Hw,
        },
        {
          id: 9,
          url: pic10Hw,
        },
        {
          id: 10,
          url: pic11Hw,
        },
        {
          id: 11,
          url: pic12Hw,
        },
        {
          id: 12,
          url: pic14Hw,
        },
        {
          id: 13,
          url: pic15Hw,
        },
        {
          id: 14,
          url: pic16Hw,
        },
        {
          id: 15,
          url: pic17Hw,
        },
        {
          id: 16,
          url: pic18Hw,
        },
        {
          id: 17,
          url: pic21Hw,
        },
        {
          id: 18,
          url: pic22Hw,
        },
        {
          id: 19,
          url: pic24Hw,
        },
        {
          id: 20,
          url: pic25Hw,
        },
        {
          id: 21,
          url: pic27Hw,
        },
        {
          id: 22,
          url: pic28Hw,
        },
        {
          id: 23,
          url: pic29Hw,
        },
        {
          id: 24,
          url: pic30Hw,
        },
        {
          id: 25,
          url: pic31Hw,
        },
        {
          id: 26,
          url: pic32Hw,
        },
        {
          id: 27,
          url: pic33Hw,
        },
        {
          id: 28,
          url: pic34Hw,
        },
        {
          id: 29,
          url: pic35Hw,
        },
        {
          id: 30,
          url: pic36Hw,
        },
        {
          id: 31,
          url: pic37Hw,
        },
      ]
    },
    'birthday': {
      title: "Birthday Celebrations",
      description: "Colorful arrangements for special birthdays",
      photos: [
        {
          id: 1,
          url: pic1Bd,
        },
        {
          id: 2,
          url: pic2Bd,
        },
        {
          id: 3,
          url: pic3Bd,
        },
        {
          id: 4,
          url: pic4Bd,
        },
        {
          id: 5,
          url: pic5Bd,
        },
        {
          id: 6,
          url: pic6Bd,
        },
        {
          id: 7,
          url: pic7Bd,
        },
        {
          id: 8,
          url: pic8Bd,
        },
        {
          id: 9,
          url: pic9Bd,
        },
        {
          id: 10,
          url: pic10Bd,
        },
        {
          id: 11,
          url: pic11Bd,
        },
        {
          id: 12,
          url: pic12Bd,
        },
        {
          id: 13,
          url: pic13Bd,
        },
        {
          id: 14,
          url: pic14Bd,
        },
        {
          id: 15,
          url: pic15Bd,
        },
        {
          id: 16,
          url: pic16Bd,
        },
        {
          id: 17,
          url: pic17Bd,
        },
        {
          id: 18,
          url: pic18Bd,
        },
        {
          id: 19,
          url: pic19Bd,
        },
        {
          id: 20,
          url: pic20Bd,
        },
      ]
    },
    'wedding': {
      title: "Wedding Decorations",
      description: "Romantic floral arrangements for your special day",
      photos: [
        {
          id: 1,
          url: pic1Wd,
        },
        {
          id: 2,
          url: pic2Wd,
        },
        {
          id: 3,
          url: pic3Wd,
        },
        {
          id: 4,
          url: pic4Wd,
        },
        {
          id: 5,
          url: pic5Wd,
        },
        {
          id: 6,
          url: pic6Wd,
        },
        {
          id: 7,
          url: pic7Wd,
        },
        {
          id: 8,
          url: pic8Wd,
        },
        {
          id: 9,
          url: pic9Wd,
        },
        {
          id: 10,
          url: pic10Wd,
        },
        {
          id: 11,
          url: pic11Wd,
        },
        {
          id: 12,
          url: pic12Wd,
        },
        {
          id: 13,
          url: pic13Wd,
        },
        {
          id: 14,
          url: pic14Wd,
        },
        {
          id: 15,
          url: pic15Wd,
        },
        {
          id: 16,
          url: pic16Wd,
        },
        {
          id: 17,
          url: pic17Wd,
        },
        {
          id: 18,
          url: pic18Wd,
        },
        {
          id: 19,
          url: pic19Wd,
        },
      ]
    },
    'sangeet': {
      title: "Sangeeth Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: pic1Sg,
        },
        {
          id: 2,
          url: pic2Sg,
        },
        {
          id: 3,
          url: pic3Sg,
        },
        {
          id: 4,
          url: pic4Sg,
        },
        {
          id: 5,
          url: pic5Sg,
        },
        {
          id: 6,
          url: pic6Sg,
        },
        {
          id: 7,
          url: pic7Sg,
        },
      ]
    },
    'cradle': {
      title: "Naming Ceremony Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: pic1Nc,
        },
        {
          id: 2,
          url: pic2Nc,
        },
        {
          id: 3,
          url: pic3Nc,
        },
        {
          id: 4,
          url: pic4Nc,
        },
        {
          id: 5,
          url: pic5Nc,
        },
        {
          id: 6,
          url: pic6Nc,
        },
        {
          id: 7,
          url: pic7Nc,
        },
        {
          id: 8,
          url: pic8Nc,
        },
        {
          id: 9,
          url: pic9Nc,
        },
        {
          id: 10,
          url: pic10Nc,
        },
        {
          id: 11,
          url: pic11Nc,
        },
        {
          id: 12,
          url: pic12Nc,
        },
        {
          id: 13,
          url: pic13Nc,
        },
        {
          id: 14,
          url: pic14Nc,
        },
        {
          id: 15,
          url: pic15Nc,
        },
      ]
    },
    'seemantham': {
      title: "Seemantham Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: pic1Bs,
        },
        {
          id: 2,
          url: pic2Bs,
        },
        {
          id: 3,
          url: pic3Bs,
        },
        {
          id: 4,
          url: pic4Bs,
        },
        {
          id: 5,
          url: pic5Bs,
        },
        {
          id: 6,
          url: pic6Bs,
        },
        {
          id: 7,
          url: pic7Bs,
        },
        {
          id: 8,
          url: pic8Bs,
        },
        {
          id: 9,
          url: pic9Bs,
        },
        {
          id: 10,
          url: pic10Bs,
        },
        {
          id: 11,
          url: pic11Bs,
        },
        {
          id: 12,
          url: pic12Bs,
        },
        {
          id: 13,
          url: pic13Bs,
        },
        {
          id: 14,
          url: pic14Bs,
        },
        {
          id: 15,
          url: pic15Bs,
        },
        {
          id: 16,
          url: pic16Bs,
        },
        {
          id: 17,
          url: pic17Bs,
        },
      ]
    },
    'engagement': {
      title: "Engagement Decorations",
      description: "Traditional decorations for coming-of-age celebration",
      photos: [
        {
          id: 1,
          url: pic1Eg,
        },
        {
          id: 2,
          url: pic2Eg,
        },
        {
          id: 3,
          url: pic3Eg,
        },
        {
          id: 4,
          url: pic4Eg,
        },
        {
          id: 5,
          url: pic5Eg,
        },
        {
          id: 6,
          url: pic6Eg,
        },
        {
          id: 7,
          url: pic7Eg,
        },
        {
          id: 8,
          url: pic8Eg,
        },
        {
          id: 9,
          url: pic9Eg,
        },
        {
          id: 10,
          url: pic10Eg,
        },
        {
          id: 11,
          url: pic11Eg,
        },
        {
          id: 12,
          url: pic12Eg,
        },
        {
          id: 13,
          url: pic13Eg,
        },
        {
          id: 14,
          url: pic14Eg,
        },
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
