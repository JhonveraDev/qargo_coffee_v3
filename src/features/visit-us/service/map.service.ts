import type { MapLocation } from "../types/map.types";
import { BASE_LOCATIONS } from "../data/map.data";

const imageModules = import.meta.glob(
  "../../../assets/images/visit-us/cities/*.png",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const images: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const fileName = path.split("/").pop()?.replace(".png", "") ?? "";
    return [fileName, url];
  })
);

export const buildMapLocations = (): MapLocation[] => {
  return BASE_LOCATIONS.map(location => ({
    ...location,
    cityImage: images[location.slug] ?? "",
  }));
};