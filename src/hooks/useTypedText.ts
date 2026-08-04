import { useEffect, useState } from 'react';

export function useTypedText(phrases: string[], typingSpeed = 70, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];

    if (!deleting && text === current) {
      const timeout = window.setTimeout(() => setDeleting(true), pause);
      return () => window.clearTimeout(timeout);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((value) => (value + 1) % phrases.length);
      return;
    }

    const timeout = window.setTimeout(
      () => {
        setText((value) =>
        deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1)
        );
      },
      deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, phrases, typingSpeed, pause]);

  return text;
}