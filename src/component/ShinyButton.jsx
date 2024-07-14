import "./ShinyButton.css";

import { motion } from "framer-motion";

const ShinyButton = () => {
  return (
    <motion.button
      className="px-6 py-2 rounded-md relative radial-gradient"
      initial={{ "--x": "100%", scale: 1 }}
      whileTap={{ scale: 0.97 }}
      animate={{ "--x": "-100%" }}
      transition={{
        repeat: Infinity, // Répéter à l'infini
        repeatType: "loop", // Type de répétition en boucle
        repeatDelay: 1, // Délai entre les répétitions
        type: "spring", // Type de transition 'spring'
        stiffness: 20, // Rigidité du ressort
        damping: 15, // Amortissement
        mass: 2, // Masse du ressort
        // Animation pour l'échelle
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}

      // Définit la variable CSS inline
      style={{ "--x": "100%" }}
    >

      {/* Texte du bouton */}
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        Start now
      </span>

      {/* Overlay pour l'effet brillant */}
      <span className="block absolute inset-0 rounded-md p-px overlay" />
    </motion.button>
  );
};

export default ShinyButton;
