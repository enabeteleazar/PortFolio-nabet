import { motion, type HTMLMotionProps, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
}

export function Reveal({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay },
    },
  };

  return (
    <motion.div
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
