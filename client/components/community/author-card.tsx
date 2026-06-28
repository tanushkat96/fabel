import Image from "next/image";
import { BookOpen } from "lucide-react";

interface AuthorCardProps {
  name: string;
  image: string;
  books: number;
}

export default function AuthorCard({
  name,
  image,
  books,
}: AuthorCardProps) {
  return (
    <div
      className="
        group
        flex
        w-44
        shrink-0
        flex-col
        items-center
        rounded-[22px]
        border
        bg-card
        p-5
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/10">
        <Image
          src={image}
          alt={name}
           sizes="96px"
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {name}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <BookOpen className="h-4 w-4" />
        {books} Books
      </div>
    </div>
  );
}