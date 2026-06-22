import { GoogleBook } from "@/types/book";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


interface BookCardProps {
  book: GoogleBook;
  size?:"small"|"large";
  onClick?: () => void;
}

export default function BookCard({ book, size = "large",onClick }: BookCardProps) {
  const title = book.volumeInfo.title;
  const author =
    book.volumeInfo.authors?.join(", ") ?? "Unknown Author";

  const cover =
    book.volumeInfo.imageLinks?.thumbnail ??
    "/placeholder-book.jpg";

  return (
    <div
   onClick={onClick}
  className="cursor-pointer"
>
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

   <div
  className="
    mt-3
    flex items-center justify-center gap-2
    rounded-[22px]
    bg-primary
    px-4
    py-2
    text-md
    font-medium
    text-primary-foreground
  "
>
  Open Book
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</div>
  </div>
</div>
</div>
  );
}