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

export async function getBooksOfWeek(): Promise<GoogleBook[]> {
  try {
    const res = await fetch(
      "https://openlibrary.org/search.json?q=popular&limit=12",
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) return [];

    const data: OpenLibraryResponse = await res.json();

    return data.docs.map(mapBook);
  } catch (error) {
    console.error("OpenLibrary Error:", error);
    return [];
  }
}
export async function searchBooks(
  query: string
): Promise<GoogleBook[]> {
  if (!query.trim()) return [];

  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query
    )}&limit=20`,
    {
      cache: "no-store",
    }
  );

  const data: OpenLibraryResponse = await res.json();

  return data.docs.map(mapBook);
}