// utils/getRandomPatternClass.ts

import { patternClasses, PatternClassName } from '../_types/patternClasses';

export function getRandomPatternClass(): PatternClassName {
  const randomIndex = Math.floor(Math.random() * patternClasses.length);
  return patternClasses[randomIndex];
}
