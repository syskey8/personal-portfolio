export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1.5 p-4">
      <div className="h-2 w-2 rounded-full bg-secondary-foreground/50 animate-[typing_1s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }}></div>
      <div className="h-2 w-2 rounded-full bg-secondary-foreground/50 animate-[typing_1s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
      <div className="h-2 w-2 rounded-full bg-secondary-foreground/50 animate-[typing_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
}
