"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import Message from "./message";
import Suggestions from "./suggestions";
import ChatInput from "./chat-input";
import { ChatMessage } from "./type";

export default function AskFabel() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hi! I'm Fabel. I can recommend books, summarize stories, explain endings, and help you discover your next read.",
    },
  ]);

  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Temporary AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "AI integration coming next! Soon I'll answer your questions about books.",
        },
      ]);
    }, 700);

    setInput("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="
          fixed
          bottom-8
          right-8
          flex
          items-center
          gap-2
          rounded-full
          bg-primary
          px-5
          py-3
          text-primary-foreground
          shadow-xl
          transition
          hover:scale-105
        "
        >
          <Sparkles className="h-5 w-5" />
          Ask Fabel
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-[22px] p-0 overflow-hidden">

        <DialogHeader className="px-6 pt-6">

          <DialogTitle className="flex items-center gap-2">

            <Sparkles className="h-5 w-5 text-primary" />

            Ask Fabel

          </DialogTitle>

          <DialogDescription>
            Your AI reading companion.
          </DialogDescription>

        </DialogHeader>

        <Separator />

        <ScrollArea className="h-105 px-6 py-5">

          <div className="space-y-4">

            {messages.map((message) => (
              <Message
                key={message.id}
                message={message}
              />
            ))}

            {messages.length === 1 && (
              <Suggestions onSelect={setInput} />
            )}

          </div>

        </ScrollArea>

        <Separator />

        <div className="p-4">

          <ChatInput
            value={input}
            onChange={setInput}
            onSend={sendMessage}
          />

        </div>

      </DialogContent>
    </Dialog>
  );
}