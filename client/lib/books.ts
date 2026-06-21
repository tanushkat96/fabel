import { GoogleBook } from "@/types/book";

type OpenLibraryBook = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
};

type OpenLibraryResponse = {
  docs: OpenLibraryBook[];
};

export async function getBooksOfWeek(): Promise<GoogleBook[]> {
  const res = await fetch(
    "https://openlibrary.org/search.json?q=bestseller&limit=12",
    {
      next: { revalidate: 86400 },
    }
  );

  const data: OpenLibraryResponse = await res.json();

  return data.docs.map((book, index) => ({
    id: book.key || String(index),

    volumeInfo: {
      title: book.title,

      authors: book.author_name ?? ["Unknown Author"],

      imageLinks: {
        thumbnail: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "/placeholder-book.jpg",
      },
    },
  }));
}