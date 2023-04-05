export interface Team {
  id: number;
  name: string;
  description: string;
  faculty: {
    name: string;
    imageUrl: string;
    link: string;
  }[];
  people: {
    name: string;
    imageUrl: string;
    position: string;
    link: string;
    email: string;
  }[];
  events: number[];
}

export interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  dates: string;
}
