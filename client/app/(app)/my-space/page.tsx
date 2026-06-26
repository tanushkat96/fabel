"use client";


import BookCard from "@/components/dashboard/book-card";
import Bookshelf from "@/components/bookshelf";
import { useShelfStore } from "@/lib/shelf";
import { useState } from "react";
import BookSheet from "@/components/dashboard/BookSheet";
import { GoogleBook } from "@/types/book";
export default function MySpacePage() {
  const {
    currentlyReading,
    wantToRead,
    favorites,
    finished,
  } = useShelfStore();
  const isEmpty =
    currentlyReading.length === 0 &&
    wantToRead.length === 0 &&
    favorites.length === 0 &&
    finished.length === 0;

  const [selectedBook, setSelectedBook] = useState<GoogleBook | null>(null);
  const [open, setOpen] = useState(false);
const { removeBook } = useShelfStore();

  return (
    <div className="min-h-screen bg-background">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-4xl font-semibold">
            Your Personal Book Shelf
          </h1>

          <p className="mt-1 text-muted-foreground">
            Continue your reading journey
          </p>
        </div>

       
      </header>
      {/* Empty State */}
      {isEmpty && (
        <div className="mt-20 rounded-3xl border border-dashed p-16 text-center">
          <h2 className="text-2xl font-semibold">
            Your bookshelf is empty !
          </h2>

          <p className="mt-2 text-muted-foreground">
            Add books from the Dashboard to start building your library.
          </p>
        </div>
      )}

      {/* Currently Reading */}
      <Bookshelf title="Currently Reading">
  {currentlyReading.map((book) => (
    <div
      key={book.id}
      className="w-48 shrink-0"
    >
      <BookCard
        book={book}
        size="small"
        showRemove
        onRemove={() =>
          removeBook(book.id, "currentlyReading")
        }
        onClick={() => {
          setSelectedBook(book);
          setOpen(true);
        }}
      />
    </div>
  ))}
</Bookshelf>

      {/* Want To Read */}
      <Bookshelf title="Want To Read">
  {wantToRead.map((book) => (
    <div
      key={book.id}
      className="w-48 shrink-0"
    >
      <BookCard
        book={book}
        size="small"
        showRemove
        onRemove={() =>
          removeBook(book.id, "wantToRead")
        }
        onClick={() => {
          setSelectedBook(book);
          setOpen(true);
        }}
      />
    </div>
  ))}
</Bookshelf>
      {/* Favorites */}
     <Bookshelf title="Favorites">
  {favorites.map((book) => (
    <div
      key={book.id}
      className="w-48 shrink-0"
    >
      <BookCard
        book={book}
        size="small"
        showRemove
        onRemove={() =>
          removeBook(book.id, "favorites")
        }
        onClick={() => {
          setSelectedBook(book);
          setOpen(true);
        }}
      />
    </div>
  ))}
</Bookshelf>
      {/* Finished */}
      <Bookshelf title="Finished">
  {finished.map((book) => (
    <div
      key={book.id}
      className="w-48 shrink-0"
    >
      <BookCard
        book={book}
        size="small"
        showRemove
        onRemove={() =>
          removeBook(book.id, "finished")
        }
        onClick={() => {
          setSelectedBook(book);
          setOpen(true);
        }}
      />
    </div>
  ))}
</Bookshelf>
      <BookSheet
        open={open}
        setOpen={setOpen}
        book={selectedBook}
      />
    </div>
  );
}