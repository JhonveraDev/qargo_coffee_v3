interface StatsGridCard {
  title: string;
  value: string;
}

export interface StatsGridContent {
  title: string;
  description: string;
  cards: StatsGridCard[];
}