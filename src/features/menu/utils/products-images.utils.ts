const images = import.meta.glob(
  "../../../assets/images/menu/*.png",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const fallback = images["../../../assets/images/menu/elemento-01.png"];

export const getImage = (fileName: string): string => {
  const path = `../../../assets/images/menu/${fileName}`;
  return images[path] ?? fallback;
};