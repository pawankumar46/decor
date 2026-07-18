import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGalleryImages } from '../utils/galleryImages';

// Maps a route `eventType` to its asset folder + display copy.
// To add a new event: drop a folder in src/assets (or src/Images) and add an
// entry here — no per-image imports needed.
const eventConfig = {
  gruhapravesha: {
    folder: 'HouseWarming',
    title: 'Gruhapravesha Decorations',
    description: 'Beautiful floral arrangements for your new home',
  },
  birthday: {
    folder: 'Birthday',
    title: 'Birthday Celebrations',
    description: 'Colorful arrangements for special birthdays',
  },
  wedding: {
    folder: 'Wedding',
    title: 'Wedding Decorations',
    description: 'Romantic floral arrangements for your special day',
  },
  sangeet: {
    folder: 'Sangeet',
    title: 'Sangeeth Decorations',
    description: 'Vibrant marigolds and festive accents',
  },
  cradle: {
    folder: 'NamingCeremony',
    title: 'Naming Ceremony Decorations',
    description: 'Gentle blooms and greenery to bless the newborn',
  },
  seemantham: {
    folder: 'BabyShower',
    title: 'Seemantham Decorations',
    description: 'Traditional decorations to honor motherhood',
  },
  engagement: {
    folder: 'Engagement',
    title: 'Engagement Decorations',
    description: 'Romantic setups for love and togetherness',
  },
};

const buildEvent = ({ folder, title, description }) => ({
  title,
  description,
  photos: getGalleryImages(folder).map((url, index) => ({ id: index + 1, url })),
});

const eventPhotos = Object.fromEntries(
  Object.entries(eventConfig).map(([key, config]) => [key, buildEvent(config)])
);

const DetailedGallery = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentEvent = eventPhotos[eventType] || eventPhotos['gruhapravesha'];
  const photos = currentEvent.photos;

  // Reset the active image whenever the event changes.
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [eventType]);

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
    if (photos.length <= 1) return;

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
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52ab98]/50"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back to Gallery</span>
              </button>


            </div>

            {/* Center Title */}
            <p className="text-2xl italic font-semibold text-gray-900 text-center">
              {currentEvent.title}
            </p>

            {/* Right Counter */}
            <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              {photos.length === 0 ? 0 : currentImageIndex + 1} of {photos.length}
            </div>
          </div>
        </div>
      </header>

      {photos.length === 0 ? (
        /* Empty state when a folder has no images yet */
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="mb-2 text-lg font-semibold text-gray-800">No photos yet</h2>
          <p className="mx-auto mb-6 max-w-sm text-sm text-gray-500">
            Photos for this gallery are coming soon. Please check back later.
          </p>
          <button
            onClick={() => navigate('/gallery')}
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#52ab98]/50"
            style={{ background: 'linear-gradient(90deg, #2b6777, #52ab98)' }}
          >
            Back to Gallery
          </button>
        </div>
      ) : (
      /* Main Gallery Layout */
      <div className="w-full py-6">
        {/* Main Image Display */}
        <div className="relative mb-6">
          <div className="relative bg-white shadow-lg overflow-hidden">
            {/* Main Image */}
            <div className="relative aspect-[16/9] bg-gray-100 max-h-96 w-full">
              <img
                src={photos[currentImageIndex].url}
                alt={`${currentEvent.title} image ${currentImageIndex + 1} of ${photos.length}`}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-4 text-black top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#52ab98]/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 text-black top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#52ab98]/50"
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
          <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToImage(index)}
                aria-label={`View image ${index + 1}`}
                aria-pressed={index === currentImageIndex}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#52ab98]/50 ${index === currentImageIndex
                    ? 'ring-2 ring-[#2b6777] ring-offset-2 scale-105'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
              >
                <img
                  src={photo.url}
                  alt={`${currentEvent.title} image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default DetailedGallery;
