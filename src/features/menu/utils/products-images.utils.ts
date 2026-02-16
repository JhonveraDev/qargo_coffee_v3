const images = import.meta.glob(
  "../../../assets/images/menu/**/*.png",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const fallback = images["../../../assets/images/menu/thumbnail-images/elemento-01.png"];

export const getImage = (folder: string, fileName: string): string => {
  const path = `../../../assets/images/menu/${folder}/${fileName}`;
  return images[path] ?? fallback;
};
