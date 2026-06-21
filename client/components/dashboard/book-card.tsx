import { GoogleBook } from "@/types/book";
import Image from "next/image";


interface BookCardProps {
  book: GoogleBook;
  size?:"small"|"large";
}

export default function BookCard({ book, size = "large", }: BookCardProps) {
  const title = book.volumeInfo.title;
  const author =
    book.volumeInfo.authors?.join(", ") ?? "Unknown Author";

  const cover =
    book.volumeInfo.imageLinks?.thumbnail ??
    "/placeholder-book.jpg";

  return (
    < div className={`   group
    relative
    overflow-hidden
    rounded-[22px]
    border
    bg-card
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl

    ${
      size === "small"
        ? "h-[290px]"
        : "h-[420px]"
    }
  `}>
  <Image
    src={cover}
    alt={title}
    fill
    className="
      object-cover
      transition-transform
      duration-300
      group-hover:scale-105
    "
  />


  {/* Hover Overlay */}
  <div
    className="
      absolute inset-0
      flex flex-col justify-end
      bg-linear-to-t
      from-black/95
      via-black/60
      to-transparent
      p-4
      opacity-0
      transition-all
      duration-300
      group-hover:opacity-100
    "
  >
    <h3 className="line-clamp-2 text-lg font-semibold text-white">
      {title}
    </h3>

    <p className="mt-1 text-sm text-neutral-300">
      {author ??
        "Unknown Author"}
    </p>

    <button
      className="
        mt-3
        rounded-full
        bg-primary
        px-4
        py-2
        text-sm
        font-medium
        text-primary-foreground
        transition-all
        hover:scale-105
      "
    >
      Explore
    </button>
  </div>
</div>
  );
}