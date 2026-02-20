export interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  image: string;
  url: string;
}

export interface StateLocationsContent {
  id: number;
  state: string;
  locations: Location[];
}