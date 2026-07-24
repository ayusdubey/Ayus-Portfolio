"use client";

import { useEffect, useState } from 'react';

export function useTypingText(
  phrases: string[],
  typingSpeed = 65,
  deletingSpeed = 36,
  pauseDuration = 1300,
) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex % phrases.length] ?? '';

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = phrase.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText.length === phrase.length) {
          window.setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        const nextText = phrase.slice(0, Math.max(0, displayText.length - 1));
        setDisplayText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, displayText, isDeleting, pauseDuration, phraseIndex, phrases, typingSpeed]);

  return displayText;
}
