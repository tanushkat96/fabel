"use client";

import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Ask anything about books..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />

      <Button size="icon" onClick={onSend}>
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
}