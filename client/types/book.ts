export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    pageCount?: number;
    averageRating?: number;
    categories?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
  };
}