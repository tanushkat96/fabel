import { Star } from "lucide-react"
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "Avid Reader",
    avatar: "https://i.pravatar.cc/100?img=1",
    text: "Fabel helped me discover books I would never have picked myself. Every recommendation feels personal."
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Fantasy Lover",
    avatar: "https://i.pravatar.cc/100?img=2",
    text: "The curated collections are amazing. I found three new favorite authors in one week."
  },
  {
    id: 3,
    name: "Sophia Carter",
    role: "Book Blogger",
    avatar: "https://i.pravatar.cc/100?img=3",
    text: "Beautiful interface, thoughtful recommendations, and a wonderful reading community."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold">
            Loved by Readers
          </h2>
          <p className="mt-3 text-muted-foreground">
            Thousands of readers discover their next favorite story with Fabel.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group rounded-3xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">
                    {review.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
