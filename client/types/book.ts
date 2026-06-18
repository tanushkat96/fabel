export type GoogleBook = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    averageRating?: number;
    imageLinks?: {
      thumbnail?: string;
    };
  };
};
