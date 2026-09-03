import { motion } from "motion/react";

const getVariants = (direction = "up", distance = 30) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    scale: { scale: 0.95 },
    fade: {},
  };

  const initialHidden = directions[direction] || directions.up;

  return {
    hidden: {
      opacity: 0,
      ...initialHidden,
    },
    visible: (custom = {}) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: custom.duration || 0.6,
        delay: custom.delay || 0,
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren: custom.staggerChildren || 0,
        delayChildren: custom.delayChildren || 0,
      },
    }),
  };
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const childFadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  distance = 30,
  delay = 0,
  duration = 0.6,
  staggerChildren = 0,
  delayChildren = 0,
  once = true,
  amount = 0.15,
  as = "section",
  ...props
}) {
  const Component = motion[as] || motion.section;
  const variants = getVariants(direction, distance);

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      custom={{ delay, duration, staggerChildren, delayChildren }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
