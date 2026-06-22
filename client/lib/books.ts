import { GoogleBook } from "@/types/book";

export async function getBooksOfWeek(): Promise<GoogleBook[]> {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=12",
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  const data = await res.json();

  return data.items ?? [];
}