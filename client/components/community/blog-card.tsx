import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

interface BlogCardProps {
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
}

export default function BlogCard({
  title,
  category,
  readTime,
  date,
  excerpt,
}: BlogCardProps) {
  return (
    <article
      className="
        group
        rounded-[22px]
        border
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Category */}

      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {category}
      </span>

      {/* Title */}

      <h3 className="mt-4 text-2xl font-semibold leading-tight">
        {title}
      </h3>

      {/* Excerpt */}

      <p className="mt-3 line-clamp-3 text-muted-foreground">
        {excerpt}
      </p>

      {/* Meta */}

      <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">

        <div className="flex items-center gap-1">
          <CalendarDays className="h-4 w-4" />
          {date}
        </div>

        <div className="flex items-center gap-1">
          <Clock3 className="h-4 w-4" />
          {readTime}
        </div>

      </div>

      {/* CTA */}

      <button
        className="
          mt-6
          flex
          items-center
          gap-2
          rounded-[22px]
          bg-primary
          px-5
          py-2.5
          text-sm
          font-medium
          text-primary-foreground
          transition
          hover:scale-105
        "
      >
        Read Blog
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </button>
    </article>
  );
}