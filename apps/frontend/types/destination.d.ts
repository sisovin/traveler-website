export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  highlights: string[];
  itinerary: string[];
  included: string[];
  notIncluded: string[];
  departureDates: string[];
}
