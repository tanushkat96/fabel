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
function mapBook(book: OpenLibraryBook): GoogleBook {
  return {
    id: book.key,
    volumeInfo: {
      title: book.title,
      authors: book.author_name ?? ["Unknown Author"],
      imageLinks: {
        thumbnail: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "/placeholder-book.jpg",
      },
    },
  };
}
export async function getBooksByGenre(
  genre: string
): Promise<GoogleBook[]> {
  try {
    const query =
      genre === "All" ? "fiction" : genre.toLowerCase();

    const res = await fetch(
      `https://openlibrary.org/search.json?subject=${encodeURIComponent(query)}&limit=20`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return [];

    const data: OpenLibraryResponse = await res.json();

    return data.docs.map( mapBook );
  } catch (error) {
    console.error("Genre fetch failed:", error);
    return [];
  }
}