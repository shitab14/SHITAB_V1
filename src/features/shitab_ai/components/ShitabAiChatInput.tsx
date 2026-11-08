import React, { FormEvent, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Send } from 'lucide-react';

interface ShitabAiChatInputProps {
  inputText: string;
  setInputText: (val: string) => void;
  onSend: () => void;
  isProcessing: boolean;
}

export const ShitabAiChatInput: React.FC<ShitabAiChatInputProps> = ({
  inputText,
  setInputText,
  onSend,
  isProcessing,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSend();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 w-full max-w-xl mx-auto bg-slate-900/90 border border-slate-800 focus-within:border-indigo-500/80 focus-within:ring-2 focus-within:ring-indigo-500/20 rounded-2xl p-2 shadow-2xl backdrop-blur transition-all"
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isProcessing}
        placeholder="Type a comment..."
        className="flex-1 bg-transparent px-4 py-2.5 text-sm md:text-base text-slate-100 placeholder-slate-500 focus:outline-none disabled:opacity-50"
      />
      <Button
        type="submit"
        disabled={!inputText.trim() || isProcessing}
        size="md"
        className="rounded-xl px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 shrink-0 flex items-center gap-2 font-semibold"
      >
        <span>Send</span>
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
};
