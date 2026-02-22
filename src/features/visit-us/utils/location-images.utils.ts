const images = import.meta.glob(
  "../../../assets/images/visit-us/*.png",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const fallback = images["../../../assets/images/menu/thumbnail-images/elemento-01.png"];

export const getImage = (folder: string, fileName: string): string => {
  const path = `../../../assets/images/${folder}/${fileName}`;
  return images[path] ?? fallback;
};
