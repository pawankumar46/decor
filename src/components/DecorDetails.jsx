import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Star } from 'lucide-react';
import { getGalleryImages as getFolderImages } from '../utils/galleryImages';
import Reveal from './Reveal';

const honganasuExtraImages = [
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq8Tmz1mTXD3FAdbhQCTGfOLz8GTl9yNYl3U_f620IMLP0QQPjo5dYx4UrgicGO_LqOUvw-9YYbazIuLWNAXmtTDWyjZyIv7lXPajFDvwXjQ2kuCB9uueaq-UdIiqEyj0bnR4c=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nptwBjwQkdIbu9OS_T1Ed02dFc_FWbcUvQ4q4O816oUQXPq4ls3uP2iHNp6XcD2dr6_pmqukYvj8Lm4MpRrhQUvAoUJJA1sIlpyTQeY-IRJpjMLb1pGavxA3h8jCp2Hh6QBQnB-=s1360-w1360-h1020-rw',
];

const honganasuTailImages = [
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqNgRR56RoR32Inf4wctJB2Np4yUZVvfqY3mXnKkgP0NNVzibTcHgrn6J4gb0BapQy2QP2nSITg6_S1Xmr21z01MDrFA1LK-DygwgH0GRtUECeTaC04zAnltE3lFq6GunhSjF1c=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqkntEOA5XerfhKj4n9Xz5nyljBZb9Plmh0YVhjZBcsOjaMzvjbm5mc-4t9Wtkjbbmp64B7yjKlUGhhPV1LLwE0xoe85ZCVct_xuQqwr3ggkV018XTr7MPNGtUTZOy4pD43W1BD=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noLsxW0J0XggkSR4z8HikfJ73fH725lzivCYJBrw-rnKlt4x4KgfDdqmRiaEBMA1awAdhfR5wx4VWdij4oIUK34Lyxj8cqWMbWvso_nPzrWOggyy0m7s8NtVpu1JdaBfePouiA4eQ=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npnzqq-dL3zUeckLHIVheN4xWFyvGAgqTTr-vAwEJqki1je8DkpN6jlWbU-O7aCw551vGLHStxjFzU4LOUvuEmZ1QO9dBDCj_CplqxEyP5_uEmbNxyAE34sUQZK2vD54f1UD5ELrQ=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrplT8uFiTYl_Iiqc2iRD1bZ5VCx25KYN20-plA1bkfJ_Q5jTmooOghyU9YqK5-U9mx_cQskF-rtGsT6q8rGePl7ofX4TA9P6ge9bVDNEiKHWpoU6r8XYRDQE3CeiF3B2nWww1fNA=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqK2o8ZQNplwwSczk6oVAHTZTz5H0E8vfcRtAdx7HwZq8FtMTag9bbbhGhtkqR6a9rNVDpfQ3IRoGDUuVcW98fJbNQgZ_wtngiv9cJRy2KJqg-WjiopiKqYbwX6Qd-6YWiUs0Vh=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqV5R5GQdNd4UnERvv8ZR2H-Jf_y8N-BAUZXxO1y1uVLpoRkWSYv3EyNdHjHJFQsz_PfqEkEBHxtdIcQxNLdTG9Anqls4EWudaK59iXOG9MlCEt-2duoLxmZjIN3R0Kjan_LWU87Tsza-I=s1360-w1360-h1020-rw',
];

const DecorDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const decorationData = location.state?.decoration || {
    id: 1,
    title: 'Honganasu Party Hall',
    description: 'Versatile hall with themed décor and vibrant celebrations.',
    image:
      'https://lh3.googleusercontent.com/p/AF1QipNPSEc88Vo3g9leSKB_5Mg6YtimueCQcftnriih=s1360-w1360-h1020-rw',
    tags: ['Engagement', 'Baby Shower', 'Half Saree', 'Birthday', 'Anniversary'],
    rating: 4.9,
    priceStart: '₹3,500',
    priceRange: '₹3,500 - ₹10,000',
    productDetails: [
      'Height: 10 ft Backdrop',
      'Material: Teak wood & silk',
      'Includes fresh marigold flower decorations',
      'Customizable color theme to match event decor',
      'Intricate traditional carvings on pillars',
      'Optional lighting setup for evening ceremonies',
    ],
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const isHonganasuHall = decorationData.title === 'Honganasu Party Hall';
  const isHotelNandini =
    decorationData.title === 'Hotel Nandini' || decorationData.title.includes('Nandini');
  const isKsba = decorationData.title === 'KSBA' || decorationData.title.includes('KSBA');
  const hasRichGallery = isHonganasuHall || isHotelNandini || isKsba;

  const galleryImages = (() => {
    if (isHonganasuHall) {
      const [birthday1, birthday2] = getFolderImages('Birthday');
      const [babyShower1, babyShower2] = getFolderImages('BabyShower');
      return [
        decorationData.image,
        ...honganasuExtraImages,
        birthday1,
        babyShower1,
        birthday2,
        babyShower2,
        ...honganasuTailImages,
      ].filter(Boolean);
    }
    if (isHotelNandini) return [decorationData.image, ...getFolderImages('Nandini')];
    if (isKsba) return [decorationData.image, ...getFolderImages('Ksba')];
    return [decorationData.image];
  })();

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <div className="border-b border-[var(--ink)]/8 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back to previous page"
            className="flex items-center gap-2 rounded-full bg-[var(--mist)] px-3 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--sage)]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="font-display truncate text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
            {decorationData.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            <Reveal>
              <div className="overflow-hidden rounded-3xl bg-[var(--mist)] shadow-[0_24px_60px_-30px_rgba(14,47,54,0.35)]">
                <img
                  src={galleryImages[selectedImageIndex]}
                  alt={`${decorationData.title} - view ${selectedImageIndex + 1}`}
                  className="h-[22rem] w-full object-cover sm:h-[28rem]"
                />
              </div>
            </Reveal>

            {hasRichGallery && (
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-[var(--ink)]/6 bg-white p-4">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
                    Gallery
                  </h3>
                  <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        aria-label={`View image ${index + 1}`}
                        aria-pressed={selectedImageIndex === index}
                        className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] ${
                          selectedImageIndex === index
                            ? 'ring-2 ring-[var(--sage)] ring-offset-2'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${decorationData.title} thumbnail ${index + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <div className="space-y-5 lg:col-span-2">
            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-[var(--ink)]/6 bg-white p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">About</h2>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {decorationData.description}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(decorationData.rating)
                            ? 'fill-[var(--champagne)] text-[var(--champagne)]'
                            : 'text-[var(--mist)]'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-[var(--muted)]">
                    {decorationData.rating} rating
                  </span>
                </div>

                <div className="mt-6 border-t border-[var(--ink)]/6 pt-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Starting from
                  </p>
                  <p className="font-display text-4xl font-semibold text-[var(--ink)]">
                    {decorationData.priceStart}
                  </p>
                  <p className="text-sm text-[var(--muted)]">Full range: {decorationData.priceRange}</p>
                </div>

                {hasRichGallery && decorationData.productDetails?.length > 0 ? (
                  <div className="mt-6">
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
                      Key features
                    </h3>
                    <ul className="space-y-2">
                      {decorationData.productDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sage)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  !hasRichGallery && (
                    <div className="mt-6 rounded-2xl border border-[var(--sage)]/25 bg-[var(--mist)] p-4 text-sm text-[var(--ink-soft)]">
                      <span className="font-semibold">Note:</span> Detailed gallery is not available for
                      this venue yet. Contact us for more details.
                    </div>
                  )
                )}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-[var(--ink)]/6 bg-white p-6 sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
                  Event types
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {decorationData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--mist)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="btn-primary w-full !rounded-xl"
                  >
                    {hasRichGallery ? 'Book this service' : 'Contact for details'}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="w-full rounded-xl border-2 border-[var(--ink)] px-4 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--mist)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
                  >
                    Get quote
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorDetails;
