
import { BookCarousel } from "@/components/book-carousel"
import { GenreSlider } from "@/components/genre-slider"
import { Reviews } from "@/components/reviews"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

import { BooksOfWeek } from "@/components/books-of-week"
import  Navbar  from "@/components/navbar"

export default function Page() {
 
  return (
    <main className="min-h-screen bg-background">
      <Navbar/>

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
      <hr/>
      <section >
      <SiteFooter />
      </section>
         
    </main>


  );
}
