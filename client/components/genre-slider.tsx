"use client"

import { motion } from "framer-motion"
import {
  BookText,
  Drama,
  Feather,
  Ghost,
  Heart,
  Landmark,
  Rocket,
  Search,
  Sparkles,
  Swords,
  Wand2,
  type LucideIcon,
} from "lucide-react"

type Genre = {
  name: string
  icon: LucideIcon
}

const genres: Genre[] = [
  { name: "Literary Fiction", icon: BookText },
  { name: "Mystery", icon: Search },
  { name: "Poetry", icon: Feather },
  { name: "Romance", icon: Heart },
  { name: "Historical", icon: Landmark },
  { name: "Science Fiction", icon: Rocket },
  { name: "Fantasy", icon: Wand2 },
  { name: "Horror", icon: Ghost },
  { name: "Drama", icon: Drama },
  { name: "Adventure", icon: Swords },
  { name: "Young Adult", icon: Sparkles },
]

function GenrePill({ genre }: { genre: Genre }) {
  const Icon = genre.icon

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group flex shrink-0 items-center gap-3 rounded-full border border-border bg-card px-6 py-3 shadow-sm hover:border-primary/40 hover:bg-accent"
    >
      <Icon className="size-5 text-primary transition-transform duration-300 group-hover:scale-110" />
      <span className="whitespace-nowrap text-sm font-medium">
        {genre.name}
      </span>
    </motion.div>
  )
}

export function GenreSlider() {
  const loop = [...genres, ...genres]

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">
          Explore every genre
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          From page-turning thrillers to quiet poetry, there is a shelf for every
          kind of reader.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loop.map((genre, index) => (
            <GenrePill key={`${genre.name}-${index}`} genre={genre} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}