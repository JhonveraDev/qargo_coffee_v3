export interface profile {
  id: number;
  name: string;
  title: string;
  image: string;
}

export interface ProfilesContent {
  id: number;
  team: string;
  profiles: profile[];
}