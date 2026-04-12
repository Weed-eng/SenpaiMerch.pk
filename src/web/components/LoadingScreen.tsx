import { useEffect, useState } from 'react';

interface Props {
  onDone: () => void;
}

export default function LoadingScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Simulate load progress, then wait for sketchfab iframe message or just time
    const steps = [
      { target: 30, delay: 200 },
      { target: 55, delay: 600 },
      { target: 75, delay: 900 },
      { target: 90, delay: 1400 },
      { target: 100, delay: 2200 },
    ];

    let t: ReturnType<typeof setTimeout>;

    steps.forEach(({ target, delay }) => {
      t = setTimeout(() => setProgress(target), delay);
    });

    // Start exit after progress hits 100
    const exitTimer = setTimeout(() => {
      setLeaving(true);
      setTimeout(onDone, 700); // match the CSS transition
    }, 2200 + 400);

    return () => {
      clearTimeout(t);
      clearTimeout(exitTimer);
    };
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#0a0a0a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: '0',
      opacity: leaving ? 0 : 1,
      transform: leaving ? 'scale(1.02)' : 'scale(1)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      pointerEvents: leaving ? 'none' : 'all',
    }}>
      {/* Logo */}
      <img
        src="/logo-white.png"
        alt="Senpai Merch"
        style={{
          height: '52px', width: 'auto',
          marginBottom: '48px',
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      />

      {/* Progress bar track */}
      <div style={{
        width: 'clamp(200px, 30vw, 320px)',
        height: '2px',
        background: 'rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '20px',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          background: '#e31c1c',
          width: `${progress}%`,
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>

      {/* Label */}
      <p style={{
        fontFamily: 'DM Sans', fontWeight: 600, fontSize: '11px',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.25)',
        transition: 'opacity 0.3s ease',
      }}>
        {progress < 100 ? 'Loading Experience...' : 'Ready'}
      </p>
    </div>
  );
}
