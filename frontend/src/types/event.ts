export interface Event {
  id: number;
  title: string;
  description: string;
  venue: string;
  date: string;
  price: number;
  image_url: string;
  category: string;
}

export interface EventsResponse {
  data: Event[];
  message: string;
}
