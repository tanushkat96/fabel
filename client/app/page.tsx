import { BookCarousel } from "@/components/book-carousel"
import { GenreSlider } from "@/components/genre-slider"
import { Reviews } from "@/components/reviews"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import icon from "@/app/icon.png"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { BooksOfWeek } from "@/components/books-of-week"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <header className="fixed top-0 z-20 w-full border-b border-white/10 backdrop-blur-xl bg-background/70">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link href="/" className="flex items-center gap-2">
            <Image
              src={icon}
              alt="Fabel"
              width={100}
              height={30}
              priority
              className="h-auto w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link href="#books" className="hover:text-primary">
              New Releases
            </Link>

            <Link href="#genres" className="hover:text-primary">
              Genres
            </Link>

            <Link href="#reviews" className="hover:text-primary">
              Reviews
            </Link>
          </nav>

          <div className="flex items-center gap-6">

            <ThemeToggle />
            <Button variant="outline">
              Log In
            </Button>
            <Button  variant="outline">
              Sign In
            </Button>

          </div>

        </div>
      </header>

    <section className="relative isolate overflow-hidden pt-50">
        {/* Infinite-motion carousel as the backdrop */}
        <div className="absolute inset-0 -z-10  flex items-center opacity-65">
          <BookCarousel />
        </div>
        {/* Readability scrim over the moving covers */}
       <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/95 via-background/80 to-background" />

        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-4 pb-28 text-center lg:pt-12 lg:pb-40">
          
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Discover your next favorite story
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Hand-picked covers from the worlds of literary fiction, mystery, poetry, and more. Get lost in a book worth
            reading.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="h-11 px-6 text-sm" asChild>
              <a href="#books">Start Reading</a>
            </Button>
            <Button variant="ghost" size="lg" className="h-11 px-6 text-sm">Explore</Button>
          </div>
        </div>
      </section>

      <section id="genres" className="scroll-mt-24">
        <GenreSlider />
      </section>

      <section id="books" className="scroll-mt-24">
        <BooksOfWeek />
      </section>

      <section id="reviews" className="scroll-mt-24">
        <Reviews />
      </section>
      <SiteFooter />
    </main>
  )
}
