export interface ICard {
  id: number;
  image?: string;
  lesson_num: number;
  title: string;
  author: number;
}

export interface MovieCardsProps {
  id: string;
  image?: string;
  title: string;
  year: string;
  country: string;
}
