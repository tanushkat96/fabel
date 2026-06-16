import { Star } from "lucide-react"

type Review = {
  quote: string
  name: string
  role: string
}

const reviews: Review[] = [
  {
    quote: "Marginalia helped me rediscover my love of reading. The curated picks are always spot on.",
    name: "Priya Sharma",
    role: "Member since 2023",
  },
  {
    quote: "I've found more great books here in a month than I did all of last year. Beautifully done.",
    name: "Daniel Okafor",
    role: "Book club host",
  },
  {
    quote: "The genre collections are a joy to browse. It feels like a real bookstore, but better.",
    name: "Hannah Lee",
    role: "Avid reader",
  },
]

export function Reviews() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Loved by readers everywhere
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Join thousands of readers who found their next favorite book.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground text-pretty">
                {`"${review.quote}"`}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
