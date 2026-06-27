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
export async function getBooksByGenre(
  genre: string
): Promise<GoogleBook[]> {
  const query =
    genre === "All"
      ? "fiction"
      : genre.toLowerCase();

  const res = await fetch(
    `https://openlibrary.org/search.json?subject=${query}&limit=20`
  );
  if (!res.ok) return [];

  const data:OpenLibraryResponse = await res.json();

  return data.docs.map((book: OpenLibraryBook) => ({
  id: book.key,

  volumeInfo: {
    title: book.title,

    authors:
      book.author_name ??
      ["Unknown Author"],

    imageLinks: {
      thumbnail: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "/placeholder-book.jpg",
    },
  },
}));
}