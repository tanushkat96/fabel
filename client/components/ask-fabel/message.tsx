import { ChatMessage } from "./type";

interface Props {
  message: ChatMessage;
}

export default function Message({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[80%]
          rounded-[20px]
          px-4
          py-3
          text-sm
          leading-relaxed
          ${
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  );
}