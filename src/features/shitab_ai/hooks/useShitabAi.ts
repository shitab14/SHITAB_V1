import { useState, useCallback } from 'react';
import { ExpressionType } from '../types';
import { processUserComment } from '../api/shitabAiApi';

export const useShitabAi = () => {
  const [currentExpression, setCurrentExpression] = useState<ExpressionType>('happiness');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');

  const sendComment = useCallback(
    async (commentText?: string) => {
      const textToSend = (commentText ?? inputText).trim();
      if (!textToSend || isProcessing) return;

      setInputText('');
      setIsProcessing(true);

      try {
        const result = await processUserComment(textToSend);
        setCurrentExpression(result.expression);
      } catch (err) {
        console.error('Failed to process comment', err);
      } finally {
        setIsProcessing(false);
      }
    },
    [inputText, isProcessing]
  );

  return {
    currentExpression,
    setCurrentExpression,
    isProcessing,
    inputText,
    setInputText,
    sendComment,
  };
};
