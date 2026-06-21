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
    `https://openlibrary.org/search.json?subject=${query}&limit=20`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data: OpenLibraryResponse =
    await res.json();

  return data.docs.map((book) => ({
    id: book.key,

    volumeInfo: {
      title: book.title,

      authors:
        book.author_name ??
        ["Unknown Author"],

      averageRating: undefined,

      imageLinks: {
        thumbnail: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : undefined,
      },
    },
  }));
}