import { ExpressionType } from '../types';

export const analyzeCommentSentiment = (text: string): ExpressionType => {
  const lower = text.toLowerCase().trim();

  if (/happy|smile|great|awesome|love|good|fantastic|wonderful|yay|nice|excellent|cool|brilliant|joy|sweet|fun|laugh/i.test(lower)) {
    return 'happiness';
  }
  if (/sad|cry|unfortunate|grief|depressed|heartbroken|sorry for|miss you|tear|lonely|hurt|fail|hopeless/i.test(lower)) {
    return 'sadness';
  }
  if (/fear|scared|scary|ghost|monster|panic|danger|threat|horror|creepy|afraid|nightmare|run away/i.test(lower)) {
    return 'fear';
  }
  if (/wow|omg|surprise|shock|unbelievable|astonish|woah|no way|really|suddenly|plot twist|incredible/i.test(lower)) {
    return 'surprise';
  }
  if (/angry|furious|mad|hate|annoyed|rage|frustrated|irritated|stupid|idiot|worst|enemy|destroy|kill|shut up/i.test(lower)) {
    return 'anger';
  }
  if (/disgust|gross|eww|yuck|nasty|revolting|smell|rotten|sick|nauseous|trash|garbage/i.test(lower)) {
    return 'disgust';
  }
  if (/contempt|smirk|lame|boring|meh|whatever|pfft|overrated|pathetic|foolish|careless/i.test(lower)) {
    return 'contempt';
  }
  if (/embarrass|blush|oops|awkward|cringe|sorry|shy|mistake|clumsy|humiliate/i.test(lower)) {
    return 'embarrassment';
  }
  if (/pride|proud|king|queen|crown|win|champ|master|flex|achieve|hero|glory|best|legend/i.test(lower)) {
    return 'pride';
  }
  if (/confus|huh|why|what\?|how\?|doubt|perplex|puzzled|baffled|riddle|lost|weird|strange/i.test(lower) || lower.includes('?')) {
    return 'confusion';
  }

  if (text.includes('!')) return 'surprise';
  if (text.includes('...')) return 'confusion';

  return 'happiness';
};
