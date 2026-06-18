"use client"

import Image from "next/image"

export type Book = {
  id: number
  title: string
  author: string
  cover: string
}

const books: Book[] = [
  { id: 1, title: "The Quiet Tide", author: "Marin Hale", cover: "/books/book1.jpg" },
  { id: 2, title: "Ember & Ash", author: "Sofia Reyes", cover: "/books/book2.jpg" },
  { id: 3, title: "Midnight Lines", author: "J. Calder", cover: "/books/book3.jpg" },
  { id: 4, title: "Letters to the Sky", author: "Wren Adler", cover: "/books/book4.jpg" },
  { id: 5, title: "The Cartographer's Wife", author: "Elena Voss", cover: "/books/book5.jpg" },
  { id: 6, title: "Almost September", author: "Tom Brennan", cover: "/books/book6.jpg" },
  { id: 7, title: "Almost September", author: "Tom Brennan", cover: "/books/book7.jpg" },
  { id: 8, title: "Almost September", author: "Tom Brennan", cover: "/books/book8.jpg" },
  { id: 9, title: "Almost September", author: "Tom Brennan", cover: "/books/book9.jpg" },
  { id: 6, title: "Almost September", author: "Tom Brennan", cover: "/books/book10.jpg" },
  { id: 7, title: "Almost September", author: "Tom Brennan", cover: "/books/book11.jpg" },
  { id: 8, title: "Almost September", author: "Tom Brennan", cover: "/books/book12.jpg" },
  { id: 9, title: "Almost September", author: "Tom Brennan", cover: "/books/book13.jpg" },
]

type MarqueeRowProps = {
  reverse?: boolean
}

function MarqueeRow({ reverse = false }: MarqueeRowProps) {
  // Duplicate the list so the loop is seamless.
  const loop = [...books, ...books]

  return (
    <div className="flex w-max shrink-0 items-center gap-6" aria-hidden="true">
      <ul
        className="flex shrink-0 items-center gap-6"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${reverse ? 55 : 45}s linear infinite`,
        }}
      >
        {loop.map((book, index) => (
          <li key={`${book.id}-${index}`} className="shrink-0">
            <div className="
              relative aspect-2/3
              h-72 sm:h-96
              overflow-hidden
              rounded-xl
              shadow-2xl
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-3xl
              ">
              <Image
                src={book.cover || "/placeholder.svg"}
                alt=""
                fill
                sizes="300px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/10" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BookCarousel() {
  return (
    <div
      className="relative flex w-full flex-col gap-6 overflow-hidden py-2"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured book covers in continuous motion"
    >
      <div className="flex">
        <MarqueeRow />
      </div>
      <div className="flex">
        <MarqueeRow reverse />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent sm:w-40" />
    </div>
  )
}
