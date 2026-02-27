export interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  image: string;
  path: string;
  comingSoon?: boolean,
}

export interface StateLocationsContent {
  id: number;
  state: string;
  locations: Location[];
}