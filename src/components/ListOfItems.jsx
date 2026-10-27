import React, { useMemo, useState, lazy, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, SlidersHorizontal, PackageOpen, ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  getGalleryFolders,
  getCoverImage,
  getGalleryImages,
  formatFolderName,
} from '../utils/galleryImages';
import Reveal from './Reveal';

const PetalField = lazy(() => import('./PetalField'));

const HANDLED_FOLDERS = new Set([
  'HouseWarming',
  'Wedding',
  'Birthday',
  'Sangeet',
  'NamingCeremony',
  'Engagement',
  'BabyShower',
  'Nandini',
  'Ksba',
]);

const EVENT_ORDER = [
  'Welcoming Bride and Groom',
  'Lagna Patrike',
  'Kobbari Mithai or Sweets',
  'Devara Samaradhane',
  'Chapara',
  'Hoovilya',
  'Mane Devru Pooje',
  'Kashi Yatre',
  'Gowri Pooja',
  'Muhurtam (Jeerige Bella)',
  'Sapthapadi',
  'Sathyanarayana Pooja',
  'Return gifts',
];

const curatedEvents = [
  { title: 'All Events', href: '/gallery', folder: null, subtitle: 'Full collection' },
  { title: 'Marriage', href: '/gallery/wedding', folder: 'Wedding', subtitle: 'Wedding décor' },
  { title: 'Birthday', href: '/gallery/birthday', folder: 'Birthday', subtitle: 'Celebrations' },
  { title: 'Sangeet', href: '/gallery/sangeet', folder: 'Sangeet', subtitle: 'Festive nights' },
  { title: 'Naming Ceremony', href: '/gallery/cradle', folder: 'NamingCeremony', subtitle: 'Blessings' },
  { title: 'Engagement', href: '/gallery/engagement', folder: 'Engagement', subtitle: 'Beginnings' },
  { title: 'Baby Shower', href: '/gallery/seemantham', folder: 'BabyShower', subtitle: 'Seemantham' },
  { title: 'Gruhapravesha', href: '/gallery/gruhapravesha', folder: 'HouseWarming', subtitle: 'New homes' },
];

const decorations = [
  {
    id: 1,
    title: 'Honganasu Party Hall',
    description: 'Versatile hall with themed décor and vibrant celebrations.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNPSEc88Vo3g9leSKB_5Mg6YtimueCQcftnriih=s1360-w1360-h1020-rw',
    tags: ['Engagement', 'Baby Shower', 'Birthday'],
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
  },
  {
    id: 2,
    title: 'Hotel Nandini',
    description: 'Elegant halls with floral arches and creative décor for every event.',
    image: 'https://nandhini.com/wp-content/uploads/2022/10/nandhini-logo-removebg-preview-e1666141300990.png',
    tags: ['Restaurant', 'Party', 'Modern Style'],
    rating: 4.8,
    priceStart: '₹1000',
    priceRange: '₹1000 - ₹8,500',
    productDetails: [],
  },
  {
    id: 3,
    title: 'KSBA',
    description: 'An association known for elegant coastal-themed decorations',
    image: 'https://www.myksba.com/img/carousel-1.jpg',
    tags: ['Wedding'],
    rating: 4.7,
    priceStart: '₹1,200',
    priceRange: '₹1,200 - ₹2,000',
    productDetails: [],
  },
  {
    id: 4,
    title: "Chairman's Club",
    description: 'A premier club known for stylish birthday decorations and themes.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNJFro43Gl6XmD4hnZ3f01s6ApDaqNfQpsx5DOj=s1360-w1360-h1020-rw',
    tags: ['Popular', 'Birthday'],
    rating: 4.6,
    priceStart: '₹300',
    priceRange: '₹300 - ₹800',
    productDetails: [],
  },
  {
    id: 5,
    title: 'Superhero Party Decor',
    description: 'Action-packed superhero themed decoration',
    image: 'https://images.unsplash.com/photo-1637724562261-5777b67c59b2?q=80&w=1170&auto=format&fit=crop',
    tags: ['Birthday'],
    rating: 4.5,
    priceStart: '₹250',
    priceRange: '₹250 - ₹600',
    productDetails: [],
  },
  {
    id: 6,
    title: 'Elegant Birthday',
    description: 'Sophisticated black and gold theme for adults',
    image: 'https://images.unsplash.com/photo-1626149136691-78e3977b3d69?q=80&w=1150&auto=format&fit=crop',
    tags: ['Popular', 'Birthday'],
    rating: 4.8,
    priceStart: '₹400',
    priceRange: '₹400 - ₹1,000',
    productDetails: [],
  },
  {
    id: 7,
    title: 'Anniversary Setup',
    description: 'Luxurious golden anniversary celebration',
    image: 'https://plus.unsplash.com/premium_photo-1670333351949-47f735fa9ba4?q=80&w=765&auto=format&fit=crop',
    tags: ['Popular', 'Anniversary'],
    rating: 4.9,
    priceStart: '₹1,500',
    priceRange: '₹1,500 - ₹3,000',
    productDetails: [],
  },
  {
    id: 8,
    title: 'Silver Jubilee Decor',
    description: 'Classic silver themed decoration for 25th anniversary',
    image: 'https://i.pinimg.com/736x/c8/d6/6f/c8d66f7cef63a3fc5d1fa231d2979c7f.jpg',
    tags: ['Anniversary'],
    rating: 4.7,
    priceStart: '₹800',
    priceRange: '₹800 - ₹1,800',
    productDetails: [],
  },
];

const EventCard = ({ title, href, image, subtitle, count, index }) => (
  <Reveal delay={Math.min(index * 0.05, 0.35)}>
    <Link
      to={href}
      className="group relative block overflow-hidden rounded-2xl bg-[var(--ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2"
    >
      <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: 'linear-gradient(145deg, #1a4a54, #3f8f7e)' }}
          >
            <span className="font-display text-5xl text-white/90">✦</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="mb-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[var(--champagne-soft)]">
          {subtitle}
          {typeof count === 'number' ? ` · ${count}` : ''}
        </p>
        <div className="flex items-end justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-white sm:text-[1.65rem]">{title}</h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  </Reveal>
);

const ListOfItems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All Styles');
  const navigate = useNavigate();

  const styleOptions = useMemo(() => {
    const tags = new Set();
    decorations.forEach((d) => d.tags.forEach((tag) => tags.add(tag)));
    return ['All Styles', ...Array.from(tags).sort()];
  }, []);

  const query = searchTerm.trim().toLowerCase();
  const filteredDecorations = decorations.filter((decoration) => {
    const matchesSearch =
      query === '' ||
      decoration.title.toLowerCase().includes(query) ||
      decoration.description.toLowerCase().includes(query) ||
      decoration.tags.some((tag) => tag.toLowerCase().includes(query));
    const matchesStyle =
      selectedStyle === 'All Styles' || decoration.tags.includes(selectedStyle);
    return matchesSearch && matchesStyle;
  });

  const hasActiveFilters = query !== '' || selectedStyle !== 'All Styles';
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedStyle('All Styles');
  };

  const extraEventFolders = useMemo(() => {
    const orderOf = (folder) => {
      const index = EVENT_ORDER.indexOf(folder);
      return index === -1 ? EVENT_ORDER.length : index;
    };
    return getGalleryFolders()
      .filter((folder) => !HANDLED_FOLDERS.has(folder))
      .sort((a, b) => orderOf(a) - orderOf(b) || a.localeCompare(b));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero — brand-first, full-bleed */}
      <section className="grain relative flex min-h-[88vh] items-end overflow-hidden bg-[var(--ink)] text-white sm:min-h-[92vh]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(63,143,126,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(196,165,116,0.18), transparent 50%), linear-gradient(160deg, #0e2f36 0%, #163f48 45%, #1a4a54 100%)',
          }}
        />
        <Suspense fallback={null}>
          <PetalField />
        </Suspense>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[var(--champagne-soft)]"
          >
            Bengaluru · Est. floral atelier
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-4xl text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Sri Venkateshwara
            <span className="mt-2 block italic text-[var(--sage-light)]">Florist</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-base text-white/75 sm:text-lg"
          >
            Ceremony décor shaped with flowers, light, and tradition — for every sacred step of your celebration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link to="/gallery" className="btn-primary-light">
              Explore gallery
            </Link>
            <Link to="/contact" className="btn-ghost">
              Plan your event
            </Link>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--paper)] to-transparent" />
      </section>

      {/* Browse by event */}
      <section className="relative z-10 -mt-8 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--sage)]">
              Collections
            </p>
            <h2 className="font-display text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
              Browse by ceremony
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              From welcoming the couple to return gifts — each ritual, styled with care.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {curatedEvents.map((event, index) => (
              <EventCard
                key={event.href}
                index={index}
                title={event.title}
                href={event.href}
                subtitle={event.subtitle}
                image={event.folder ? getCoverImage(event.folder) : getCoverImage('Wedding')}
                count={event.folder ? getGalleryImages(event.folder).length : undefined}
              />
            ))}
            {extraEventFolders.map((folder, index) => {
              const count = getGalleryImages(folder).length;
              return (
                <EventCard
                  key={folder}
                  index={curatedEvents.length + index}
                  title={formatFolderName(folder)}
                  href={`/gallery/${folder}`}
                  subtitle={`${count} ${count === 1 ? 'design' : 'designs'}`}
                  image={getCoverImage(folder)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="border-t border-[var(--ink)]/6 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--sage)]">
                Venues &amp; setups
              </p>
              <h2 className="font-display text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
                Decoration showcase
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Search venues and themes. Open any card for details, pricing, and booking.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:max-w-md">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search venues, events, styles…"
                aria-label="Search decorations"
                className="input-field !pl-11 !pr-10"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[var(--muted)] hover:bg-[var(--mist)]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="relative">
              <SlidersHorizontal
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
                aria-hidden="true"
              />
              <select
                id="style-filter"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                aria-label="Filter by style"
                className="input-field appearance-none !py-3 !pl-10 !pr-8"
              >
                {styleOptions.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full border border-[var(--ink)]/12 px-4 py-3 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--mist)]"
              >
                Clear
              </button>
            )}
          </Reveal>

          <p className="mb-6 text-sm font-medium text-[var(--sage)]">
            {filteredDecorations.length}{' '}
            {filteredDecorations.length === 1 ? 'design' : 'designs'} found
          </p>

          {filteredDecorations.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--ink)]/15 bg-[var(--paper)] px-6 py-20 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--mist)]">
                <PackageOpen className="h-7 w-7 text-[var(--muted)]" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">No matches</h3>
              <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">
                Try another keyword or clear your filters to see all setups.
              </p>
              <button type="button" onClick={clearFilters} className="btn-primary mt-6">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDecorations.map((decoration, index) => (
                <Reveal key={decoration.id} delay={Math.min(index * 0.04, 0.28)}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--ink)]/6 bg-[var(--paper)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(14,47,54,0.35)]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--mist)]">
                      <img
                        src={decoration.image}
                        alt={decoration.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                        {decoration.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--ink)] backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[var(--ink)]/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-[var(--champagne)] text-[var(--champagne)]" aria-hidden="true" />
                        {decoration.rating}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                        {decoration.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-[var(--muted)]">
                        {decoration.description}
                      </p>
                      <div className="mt-4 flex-1">
                        <p className="text-[0.65rem] uppercase tracking-wider text-[var(--muted)]">
                          From
                        </p>
                        <p className="font-display text-2xl font-semibold text-[var(--ink)]">
                          {decoration.priceStart}
                        </p>
                        <p className="text-xs text-[var(--muted)]">{decoration.priceRange}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          navigate('/decordetails', { state: { decoration } })
                        }
                        className="btn-primary mt-5 w-full !rounded-xl"
                      >
                        View details
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0e2f36 0%, #1a4a54 40%, #3f8f7e 100%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[var(--champagne-soft)]">
              Ready when you are
            </p>
            <h2 className="font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
              Bring your vision to life
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Tell us about your muhurtam, venue, and colour story — we&apos;ll craft the décor around it.
            </p>
            <Link to="/contact" className="btn-primary-light mt-10 inline-flex">
              Book a consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ListOfItems;
