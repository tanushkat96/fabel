import { GoogleBook } from "@/types/book";
import Image from "next/image";
import { ArrowRight, Trash2 } from "lucide-react";


interface BookCardProps {
  book: GoogleBook;
  size?: "small" | "large";
  onClick?: () => void;
  showRemove?: boolean;
  onRemove?: () => void;
}

export default function BookCard({ book,
  size = "large",
  onClick,
  showRemove = false,
  onRemove, }: BookCardProps) {
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

   ${size === "small"
? "w-48 h-72"
: "w-72 h-[430px]"
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
{showRemove && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onRemove?.();
    }}
    className="
      absolute
      top-3
      right-3
      z-20
      flex
      h-9
      w-9
      items-center
      justify-center
      rounded-full
      bg-red-500/90
      text-white
      opacity-0
      transition-all
      duration-300
      group-hover:opacity-100
      hover:scale-110
      hover:bg-red-600
    "
  >
    <Trash2 className="h-4 w-4" />
  </button>
)}

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
            onClick={onClick}
            className="
    mt-3
    flex w-full items-center justify-center gap-2
    rounded-[22px]
    bg-primary
    px-4
    py-2
    text-md
    font-medium
    text-primary-foreground
    transition-all
    hover:scale-[1.02]
  "
          >
            Open Book
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}