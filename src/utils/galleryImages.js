// Automatically imports every image inside the asset sub-folders so new
// folders/pictures are picked up without adding an import for each file.
//
// Usage:
//   import { getGalleryImages } from '../utils/galleryImages';
//   const photos = getGalleryImages('Birthday'); // ordered array of image URLs
//
// Just drop a new folder (e.g. src/assets/MyEvent/pic1.jpeg ...) and read it
// with getGalleryImages('MyEvent').

const assetModules = import.meta.glob('../assets/*/*.{jpeg,jpg,JPG,png,webp}', {
  eager: true,
  import: 'default',
});

const imageModules = import.meta.glob('../Images/*/*.{jpeg,jpg,JPG,png,webp}', {
  eager: true,
  import: 'default',
});

const numberIn = (name) => {
  const match = name.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

const grouped = {};

for (const [path, url] of Object.entries({ ...assetModules, ...imageModules })) {
  const segments = path.split('/');
  const folder = segments[segments.length - 2];
  const file = segments[segments.length - 1];
  (grouped[folder] ||= []).push({ file, url });
}

// Order each folder naturally (pic2 before pic10).
for (const folder of Object.keys(grouped)) {
  grouped[folder].sort((a, b) => numberIn(a.file) - numberIn(b.file));
}

// Map of folder name -> ordered array of image URLs.
export const galleryImages = Object.fromEntries(
  Object.entries(grouped).map(([folder, items]) => [folder, items.map((item) => item.url)])
);

// Returns the ordered image URLs for a folder (empty array if it doesn't exist).
export const getGalleryImages = (folder) => galleryImages[folder] ?? [];

// Convenience helper for the first image in a folder (e.g. a cover thumbnail).
export const getCoverImage = (folder) => getGalleryImages(folder)[0];
