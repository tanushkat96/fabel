"use client";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/theme-toggle";
import BookCard from "@/components/dashboard/book-card";
import { useEffect, useState, useRef } from "react";
import { getBooksByGenre } from "@/services/books";
import { GoogleBook } from "@/types/book";
import BookSheet from "@/components/dashboard/BookSheet";
import { searchBooks } from "@/lib/books";

interface Props {
  bookpage: GoogleBook[];
}


export default function DashboardPage({ bookpage }: Props) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [books, setBooks] = useState<GoogleBook[]>(bookpage);
  const [selectedBook, setSelectedBook] =
    useState<GoogleBook | null>(null);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const genres = [
    "All",
    "Romance",
    "Fantasy",
    "Thriller",
    "Horror",
    "Mystery",
    "Sci-Fi",
  ];

  const continueReading =
    books?.slice(0, 10) ?? [];
  useEffect(() => {
    async function loadBooks() {
      setLoading(true);

      const data = await getBooksByGenre(
        selectedGenre
      );

      setBooks(data ?? []);

      setLoading(false);
    }

    loadBooks();
  }, [selectedGenre]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -800 : 800,
      behavior: "smooth",
    });
  };
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await searchBooks(query);
    setBooks(results);
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-4xl font-semibold">
            Welcome Back
          </h1>

          <p className="mt-1 text-muted-foreground">
            Continue your reading journey
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Button */}
          <ThemeToggle />
          {/* Profile */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            T
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute ml-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground " />

        <Input
         className="pl-12"
        placeholder="Search your favourite book . . . ."
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>

      <section className="group relative mb-10">
        <div className="rounded-[22px] border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">
            Continue Reading
          </h2>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="
        absolute
        left-2
        top-1/2
        z-20
        -translate-y-1/2
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
      "
          >
            <div
              className="
          flex h-16 w-12 items-center justify-center
          rounded-r-xl
          bg-black/60
          backdrop-blur
        "
            >
              <ChevronLeft className="text-white" />
            </div>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="
        absolute
        right-2
        top-1/2
        z-20
        -translate-y-1/2
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
      "
          >
            <div
              className="
          flex h-16 w-12 items-center justify-center
          rounded-l-xl
          bg-black/60
          backdrop-blur
        "
            >
              <ChevronRight className="text-white" />
            </div>
          </button>

          <div
            ref={scrollRef}
            className="
        flex gap-8
        overflow-x-hidden
        scroll-smooth
      "
          >
            {continueReading.map((book) => (
              <div
                key={book.id}
                className="min-w-45"
              >
                <BookCard
                  book={book}
                  size="small"
                  onClick={() => {
                    setSelectedBook(book);
                    setOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-8">
        <div className="flex gap-3 overflow-x-auto">
          {genres.map((genre) => (
            <Button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              variant={
                selectedGenre === genre
                  ? "default"
                  : "outline"
              }
              className="rounded-[15px]"
            >
              {genre}
            </Button>
          ))}
        </div>
      </section>

      {/* Library */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Library
          </h2>


        </div>

        <div className="mt-10 grid grid-cols-2 gap-12 lg:grid-cols-5">
          {loading ? (
            <div className="col-span-full text-center py-20">
              Loading books...
            </div>
          ) : (
            books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => {
                  setSelectedBook(book);
                  setOpen(true);
                }}
              />
            ))
          )}
        </div>
      </section>

      {/* Ask Fabel */}
      <button
        className="
          fixed
          bottom-8
          right-8
          rounded-full
          bg-primary
          px-6
          py-4
          text-primary-foreground
          shadow-xl
          transition-all
          hover:scale-105
        "
      >
        ✨ Ask Fabel
      </button>
      <BookSheet
        open={open}
        setOpen={setOpen}
        book={selectedBook}
      />
    </div>
  );
}