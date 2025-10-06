import { useEffect, useState } from 'react';

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    // Generate initial bubbles
    const initialBubbles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5
    }));
    setBubbles(initialBubbles);

    // Add new bubble periodically
    const interval = setInterval(() => {
      setBubbles(prev => [...prev, {
        id: Date.now(),
        delay: 0
      }]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {bubbles.map((bubble) => {
        const size = Math.random() * 80 + 40;
        return (
          <div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              bottom: '-120px',
              background: `radial-gradient(circle at 25% 25%, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(255, 255, 255, 0.6) 20%,
                rgba(173, 216, 230, 0.4) 50%, 
                rgba(135, 206, 235, 0.2) 100%)`,
              border: '2px solid rgba(255, 255, 255, 0.6)',
              boxShadow: `
                0 8px 32px rgba(173, 216, 230, 0.4),
                inset -10px -10px 20px rgba(255, 255, 255, 0.8),
                inset 10px 10px 20px rgba(173, 216, 230, 0.3),
                0 0 20px rgba(255, 255, 255, 0.5)
              `,
              animation: `bubble-float-pop ${7 + Math.random() * 4}s ease-out forwards`,
              animationDelay: `${bubble.delay}s`,
              filter: 'blur(0.5px)',
            }}
          />
        );
      })}
    </div>
  );
};

export default BubbleAnimation;
