import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { getGalleryImages, getGalleryFolders, formatFolderName } from '../utils/galleryImages';

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

const resolveEvent = (eventType) => {
  if (eventType && eventPhotos[eventType]) return eventPhotos[eventType];

  const folderMatch = getGalleryFolders().find(
    (folder) => folder.toLowerCase() === (eventType || '').toLowerCase()
  );
  if (folderMatch) {
    return buildEvent({
      folder: folderMatch,
      title: `${formatFolderName(folderMatch)} Decorations`,
      description: `Our ${formatFolderName(folderMatch)} decoration setups`,
    });
  }

  return eventPhotos.gruhapravesha || { title: '', description: '', photos: [] };
};

const DetailedGallery = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentEvent = resolveEvent(eventType);
  const photos = currentEvent.photos;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [eventType]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (photos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <header className="border-b border-[var(--ink)]/8 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate('/gallery')}
            aria-label="Back to Gallery"
            className="flex items-center gap-2 rounded-full bg-[var(--mist)] px-3 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--sage)]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Gallery</span>
          </button>
          <div className="min-w-0 text-center">
            <h1 className="font-display truncate text-xl font-semibold text-[var(--ink)] sm:text-2xl md:text-3xl">
              {currentEvent.title}
            </h1>
            {currentEvent.description && (
              <p className="mt-0.5 hidden truncate text-xs text-[var(--muted)] sm:block">
                {currentEvent.description}
              </p>
            )}
          </div>
          <div className="rounded-full bg-[var(--mist)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)]">
            {photos.length === 0 ? 0 : currentImageIndex + 1} / {photos.length}
          </div>
        </div>
      </header>

      {photos.length === 0 ? (
        <div className="mx-auto max-w-lg px-4 py-28 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--mist)]">
            <ImageOff className="h-7 w-7 text-[var(--muted)]" aria-hidden="true" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">No photos yet</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Photos for this gallery are coming soon. Please check back later.
          </p>
          <button type="button" onClick={() => navigate('/gallery')} className="btn-primary mt-8">
            Back to Gallery
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] shadow-[0_30px_80px_-40px_rgba(14,47,54,0.5)]">
            <div className="relative flex min-h-[50vh] items-center justify-center sm:min-h-[60vh]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[currentImageIndex].url}
                  src={photos[currentImageIndex].url}
                  alt={`${currentEvent.title} image ${currentImageIndex + 1} of ${photos.length}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="max-h-[70vh] w-full object-contain"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--ink)] shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--ink)] shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--ink)]/6 bg-white p-4">
            <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={index === currentImageIndex}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] ${
                    index === currentImageIndex
                      ? 'ring-2 ring-[var(--sage)] ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={`${currentEvent.title} thumbnail ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
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
