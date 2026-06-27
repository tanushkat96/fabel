import {
  MessageCircle,
  ArrowRight,
  Clock3,
} from "lucide-react";

interface DiscussionCardProps {
  title: string;
  question: string;
  author: string;
  comments: number;
  time: string;
}

export default function DiscussionCard({
  title,
  question,
  author,
  comments,
  time,
}: DiscussionCardProps) {
  return (
    <div
      className="
        group
        rounded-[22px]
        border
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Book Title */}
      <h3 className="text-xl font-semibold">
        📖 {title}
      </h3>

      {/* Question */}
      <p className="mt-3 text-muted-foreground leading-relaxed">
        {question}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <span>By {author}</span>

          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            {comments}
          </div>

          <div className="flex items-center gap-1">
            <Clock3 className="h-4 w-4" />
            {time}
          </div>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-[22px]
            bg-primary
            px-4
            py-2
            text-sm
            text-primary-foreground
            transition
            hover:scale-105
          "
        >
          Join
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}