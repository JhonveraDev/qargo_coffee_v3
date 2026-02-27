import type { BaseLocation } from "../types/map.types";

export const BASE_LOCATIONS: BaseLocation[] = [
  { name: "California", slug: "california", position: [36.7783, -119.4179] },
  { name: "Belleville (Illinois)", slug: "belleville", position: [38.5201, -89.9839] },
  { name: "Florida", slug: "florida", position: [27.6648, -81.5158] },
  { name: "Illinois", slug: "illinois", position: [40.6331, -89.3985] },
  { name: "Michigan", slug: "michigan", position: [44.3148, -85.6024] },
  { name: "Missouri", slug: "missouri", position: [37.9643, -91.8318] },
  { name: "Nevada", slug: "nevada", position: [38.8026, -116.4194] },
  { name: "New Hampshire", slug: "newhampshire", position: [43.1939, -71.5724] },
  { name: "Ohio", slug: "ohio", position: [40.4173, -82.9071] },
  { name: "Texas", slug: "texas", position: [31.9686, -99.9018] },
  { name: "Washington D.C.", slug: "washingtondc", position: [38.9072, -77.0369] },
];

export const MAP_CENTER: [number, number] = [39.8283, -98.5795];
