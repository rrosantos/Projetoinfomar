import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ScrollColorTransition() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // Cores do gradiente baseadas nas seções
  const colors = [
    'rgba(22, 138, 173, 0.05)',  // Azul oceano
    'rgba(82, 182, 154, 0.05)',  // Verde água
    'rgba(217, 237, 146, 0.05)', // Verde limão
    'rgba(144, 224, 239, 0.05)', // Azul claro
  ];

  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      `linear-gradient(180deg, ${colors[0]} 0%, transparent 100%)`,
      `linear-gradient(180deg, ${colors[1]} 0%, transparent 100%)`,
      `linear-gradient(180deg, ${colors[2]} 0%, transparent 100%)`,
      `linear-gradient(180deg, ${colors[3]} 0%, transparent 100%)`,
      `linear-gradient(180deg, ${colors[0]} 0%, transparent 100%)`,
    ]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background }}
    />
  );
}
