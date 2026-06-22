
import Image from "next/image"
import { getBooksOfWeek } from "@/lib/books"
import { GoogleBook } from "@/types/book";


export async function BooksOfWeek() {
  const books = await getBooksOfWeek();
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-serif text-4xl font-bold">
          Books of the Week
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-6">
          {books.map((book: GoogleBook) => (
            <div key={book.id}>
              <div className="relative aspect-2/3 overflow-hidden rounded-[22px]">
                <Image
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    "/placeholder.png"
                  }
                  alt={book.volumeInfo.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-3 font-semibold">
                {book.volumeInfo.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {book.volumeInfo.authors?.[0]}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}