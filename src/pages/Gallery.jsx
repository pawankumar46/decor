import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getCoverImage } from '../utils/galleryImages';
import Reveal from '../components/Reveal';

const galleryItems = [
  {
    id: 1,
    title: 'Gruhapravesha Ceremony',
    description: 'Sacred décor for house warming with traditional floral elements.',
    eventType: 'gruhapravesha',
    image: getCoverImage('HouseWarming'),
  },
  {
    id: 2,
    title: 'Birthday Celebrations',
    description: 'Colourful blooms crafted to celebrate special days.',
    eventType: 'birthday',
    image: getCoverImage('Birthday'),
  },
  {
    id: 3,
    title: 'Naming Ceremony',
    description: 'Gentle whites and greenery for blessings of the newborn.',
    eventType: 'cradle',
    image: getCoverImage('NamingCeremony'),
  },
  {
    id: 4,
    title: 'Seemantham Decor',
    description: 'Festive blooms honouring motherhood and auspicious beginnings.',
    eventType: 'seemantham',
    image: getCoverImage('BabyShower'),
  },
  {
    id: 5,
    title: 'Engagement Decor',
    description: 'Romantic setups for love and togetherness.',
    eventType: 'engagement',
    image: getCoverImage('Engagement'),
  },
  {
    id: 6,
    title: 'Sangeet Decor',
    description: 'Vibrant marigolds and festive accents for the night of song.',
    eventType: 'sangeet',
    image: getCoverImage('Sangeet'),
  },
  {
    id: 7,
    title: 'Wedding Decorations',
    description: 'Grand floral arches and mandaps for an unforgettable day.',
    eventType: 'wedding',
    image: getCoverImage('Wedding'),
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <section className="relative overflow-hidden border-b border-[var(--ink)]/6 bg-[var(--ink)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(63,143,126,0.5), transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[var(--champagne-soft)]">
            Portfolio
          </p>
          <h1 className="font-display text-5xl font-semibold sm:text-6xl md:text-7xl">
            Our Gallery
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            Explore floral arrangements across ceremonies — tap a collection to open the full set.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.06, 0.3)}>
              <button
                type="button"
                onClick={() => navigate(`/gallery/${item.eventType}`)}
                aria-label={`View ${item.title} gallery`}
                className="group w-full overflow-hidden rounded-2xl border border-[var(--ink)]/6 bg-white text-left transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(14,47,54,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[var(--mist)]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[var(--muted)]">
                      Photos coming soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[var(--ink)]/0 transition-colors duration-300 group-hover:bg-[var(--ink)]/20" />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[var(--ink)] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--sage)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--sage)]">
                    View gallery
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
