import { ExpressionType } from '../types';
import { analyzeCommentSentiment } from '../utils/shitabAiUtils';

export interface ProcessCommentResult {
  expression: ExpressionType;
}

export const processUserComment = async (comment: string): Promise<ProcessCommentResult> => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 150) + 100;
    setTimeout(() => {
      const expression = analyzeCommentSentiment(comment);
      resolve({ expression });
    }, delay);
  });
};
