import React from 'react';
import { useShitabAi } from '../hooks/useShitabAi';
import { ShitabAiAvatar } from './ShitabAiAvatar';
import { ShitabAiChatInput } from './ShitabAiChatInput';

export const ShitabAiContainer: React.FC = () => {
  const { currentExpression, isProcessing, inputText, setInputText, sendComment } =
    useShitabAi();

  return (
    <div className="flex flex-col items-center justify-between min-h-[70vh] w-full max-w-4xl mx-auto px-4 py-8 text-center gap-8">
      {/* 1. Top Text: S.H.I.T.A.B. */}
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">
          S.H.I.T.A.B.
        </h1>
      </div>

      {/* 2. Avatar Section */}
      <div className="my-auto">
        <ShitabAiAvatar expression={currentExpression} />
      </div>

      {/* 3. Comment Box with Send Button */}
      <div className="w-full">
        <ShitabAiChatInput
          inputText={inputText}
          setInputText={setInputText}
          onSend={sendComment}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  );
};
