import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Legenda que destaca uma palavra por vez, como nos vídeos curtos. */
function Captions({ text }: { text: string }) {
  const words = text.split(' ');
  const [on, setOn] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      if (ref.current && ref.current.offsetParent === null) return; // oculto
      setOn((i) => (i + 1) % words.length);
    }, 520);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <div className="caps" ref={ref}>
      {words.map((w, i) => (
        <span key={i} className={i === on ? 'on' : undefined}>
          {w}
        </span>
      ))}
    </div>
  );
}

interface PhoneProps {
  variant: 'p1' | 'p2' | 'p3';
  label: string;
  caption: string;
}

/** Celular com um corte legendado (ilustração conceitual). */
export default function Phone({ variant, label, caption }: PhoneProps) {
  return (
    <div className={`phone ${variant}`}>
      <div className="ph-top">
        <i />
        {label}
      </div>
      <Captions text={caption} />
      <div className="ph-bar">
        <i />
      </div>
    </div>
  );
}
