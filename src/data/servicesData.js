// 1. Use Vite's glob feature to import all matching images at once.
// The `{ eager: true }` option loads them immediately.
const imageModules = import.meta.glob("../assets/images/services*.jpeg", {
  eager: true,
});

const captions = [
  ["Regular Cleaning", "& Housekeeping"],
  ["Detailed Home", "Hygiene Cleaning"],
  ["Move in / Move Out", "Hygiene Cleaning"],
  ["Deep Spring", "Cleaning"],
  ["Mini Express", "Spring Cleaning"],
  ["Pre-Sale &", "Settlement Cleaning"],
  ["Builders &", "Renovation Cleaning"],
  ["Bond & Rental", "Inspection Cleaning"],
  ["Carpet Steam", "Cleaning"],
  ["Upholstery", "Cleaning"],
  ["Leather", "Cleaning"],
  ["Wet & Dry", "Vacuuming"],
];

const services = captions.map((caption, index) => {
  // Construct the path that matches the key in imageModules
  const imagePath = `../assets/images/services${index + 1}.jpeg`;

  // Get the image URL from the imported module
  const image = imageModules[imagePath]?.default;

  return {
    image: image, // Use the found image or a fallback
    caption: caption,
  };
});

export default services;
