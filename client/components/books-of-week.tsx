import Image from "next/image"
import { Star } from "lucide-react"

type WeeklyBook = {
  id: number
  title: string
  author: string
  cover: string
  rating: string
  tag: string
}

const books: WeeklyBook[] = [
  { id: 1, title: "The Quiet Tide", author: "Marin Hale", cover: "/books/book-1.png", rating: "4.8", tag: "Editor's Pick" },
  { id: 2, title: "Ember & Ash", author: "Sofia Reyes", cover: "/books/book-2.png", rating: "4.6", tag: "Trending" },
  { id: 3, title: "Midnight Lines", author: "J. Calder", cover: "/books/book-3.png", rating: "4.9", tag: "New" },
  { id: 4, title: "Letters to the Sky", author: "Wren Adler", cover: "/books/book-4.png", rating: "4.7", tag: "Staff Loved" },
]

export function BooksOfWeek() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Books of the week
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Fresh off the shelf — the titles our readers can&apos;t stop talking about.
            </p>
          </div>
          <a href="#" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
            View all
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {books.map((book) => (
            <li key={book.id} className="group">
              <a href="#" className="block">
                <div className="relative aspect-2/3 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={book.cover || "/placeholder.svg"}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                    {book.tag}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-semibold leading-tight text-foreground">{book.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
                  <div className="mt-2 flex items-center gap-1 text-sm text-foreground">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="font-medium">{book.rating}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
