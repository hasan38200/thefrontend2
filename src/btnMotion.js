// Shared spring "tilt" animation for all buttons
export const btnMotion = {
  whileHover: { rotate: -7, scale: 1.25 },
  whileTap: { rotate: 0, scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 12 },
};