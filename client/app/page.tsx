import { BookCarousel } from "@/components/book-carousel"
import { GenreSlider } from "@/components/genre-slider"
import { Reviews } from "@/components/reviews"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import icon from "@/app/icon.png"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-2 py-6">
        <div className="flex items-center gap-2">
          <Image
            src={icon}
            alt="Fabel"
            width={120}
            height={120}
          />

          
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#" className="transition-colors hover:text-foreground">Browse</a>
          <a href="#" className="transition-colors hover:text-foreground">New Releases</a>
          <a href="#" className="transition-colors hover:text-foreground">Authors</a>
        </nav>
        <Button variant="outline" size="lg">Sign in</Button>
      </header>

      <section className="relative isolate overflow-hidden">
        {/* Infinite-motion carousel as the backdrop */}
        <div className="absolute inset-0 -z-10 flex items-center opacity-40">
          <BookCarousel />
        </div>
        {/* Readability scrim over the moving covers */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/70 via-background/85 to-background" />

        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center lg:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Star className="size-3.5 fill-primary text-primary" />
            Curated picks of the month
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Discover your next favorite story
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Hand-picked covers from the worlds of literary fiction, mystery, poetry, and more. Get lost in a book worth
            reading.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-11 px-6 text-sm">Start reading</Button>
            <Button variant="ghost" size="lg" className="h-11 px-6 text-sm">Explore</Button>
          </div>
        </div>
      </section>

      <GenreSlider />
      <Reviews />
      <SiteFooter />
    </main>
  )
}
