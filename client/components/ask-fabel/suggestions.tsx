const suggestions = [
  "Recommend me a fantasy book",
  "Summarize Atomic Habits",
  "Find books like The Alchemist",
  "Who is Jane Austen?",
];

interface Props {
  onSelect: (text: string) => void;
}

export default function Suggestions({ onSelect }: Props) {
  return (
    <div className="space-y-2">
      {suggestions.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="
            w-full
            rounded-xl
            border
            p-3
            text-left
            text-sm
            transition-colors
            hover:bg-muted
          "
        >
          {item}
        </button>
      ))}
    </div>
  );
}