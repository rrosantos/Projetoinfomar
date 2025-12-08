import { motion } from 'motion/react';

// Componente de bolhas animadas
export function FloatingBubbles() {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-[#168aad]/20 to-[#52b69a]/10 backdrop-blur-sm border border-white/30"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: -100,
          }}
          animate={{
            y: [-100, -window.innerHeight - 100],
            x: [0, Math.sin(bubble.id) * 100],
            opacity: [0, 0.6, 0.6, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Componente de peixes nadando
export function SwimmingFish() {
  const fish = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    emoji: i % 4 === 0 ? '🐠' : i % 4 === 1 ? '🐟' : i % 4 === 2 ? '🦈' : '🐡',
    top: Math.random() * 80 + 10,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {fish.map((f) => (
        <motion.div
          key={f.id}
          className="absolute text-2xl md:text-4xl opacity-30"
          style={{
            top: `${f.top}%`,
            left: -100,
          }}
          animate={{
            x: [0, window.innerWidth + 200],
            y: [0, Math.sin(f.id) * 50],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {f.emoji}
        </motion.div>
      ))}
    </div>
  );
}

// Componente de ondas de fundo
export function BackgroundWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-50">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(22, 138, 173, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 80% 60%, rgba(82, 182, 154, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
