// 1. Use Vite's glob feature to import all matching images at once.
// The `{ eager: true }` option loads them immediately.
const imageModules = import.meta.glob("../assets/images/team*.jpeg", {
  eager: true,
});

const n = 14;

const teamImages = Array.from({ length: n }).map((_, index) => {
  const imagePath = `../assets/images/team${index + 1}.jpeg`;
  return imageModules[imagePath]?.default;
});

console.log(teamImages)

export default teamImages;
