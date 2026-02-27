export type Coordinates = [number, number];

export interface MapLocation {
  name: string;
  slug: string;
  position: [number, number];
  cityImage: string;
}

export type BaseLocation = {
  name: string;
  slug: string;
  position: [number, number];
};