"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  useRef,
  useState,
  useEffect,
} from "react";

interface BookshelfProps {
  title: string;
  children: React.ReactNode;
}

export default function Bookshelf({
  title,
  children,
}: BookshelfProps) {
  const scrollRef =
    useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);

  const totalPages = Math.max(
    1,
    Math.ceil(
      (Array.isArray(children)
        ? children.length
        : 1) / 5
    )
  );

  const scroll = (
    direction: "left" | "right"
  ) => {
    if (!scrollRef.current) return;

    const width =
      scrollRef.current.clientWidth;

    scrollRef.current.scrollBy({
      left:
        direction === "left"
          ? -width
          : width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const width = container.clientWidth;

      const current = Math.round(
        container.scrollLeft / width
      );

      setPage(current);
    };

    container.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      container.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <section className="group mb-20">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-3xl font-heading font-semibold">
          {title}
        </h2>

        <button className="flex items-center gap-2 text-sm hover:text-primary">
          View all
          <ChevronRight size={18} />
        </button>

      </div>

      <div className="relative">

        {/* Left */}

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 opacity-0 transition group-hover:opacity-100"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-lg">
            <ChevronLeft />
          </div>
        </button>

        {/* Right */}

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 opacity-0 transition group-hover:opacity-100"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-lg">
            <ChevronRight />
          </div>
        </button>

        {/* Books */}

        <div
          ref={scrollRef}
          className="
          flex
          gap-8
          overflow-x-auto
          scroll-smooth
          no-scrollbar
          pb-8
        "
        >
          {children}
        </div>

        {/* Wooden Shelf */}

        <div className="relative mt-2 h-7 rounded-md bg-gradient-to-b from-[#dcb27c] via-[#bf8954] to-[#8c5526] shadow-[0_8px_20px_rgba(0,0,0,.25)]">

          <div className="absolute inset-x-5 top-1 h-[2px] rounded-full bg-white/30" />

          <div className="absolute inset-x-8 bottom-1 h-[2px] rounded-full bg-black/20" />

        </div>

        {/* Pagination */}

        <div className="mt-6 flex justify-center gap-3">

          {Array.from({
            length: totalPages,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!scrollRef.current)
                  return;

                scrollRef.current.scrollTo({
                  left:
                    scrollRef.current
                      .clientWidth *
                    index,
                  behavior: "smooth",
                });
              }}
              className={`h-3 w-3 rounded-full transition-all ${
                page === index
                  ? "w-8 bg-primary"
                  : "bg-muted"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}