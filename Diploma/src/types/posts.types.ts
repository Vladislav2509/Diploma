export interface Post {
  [x: string]: any;
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  is_bookmarked: boolean;
  genre: string,
  slice: any;
}
