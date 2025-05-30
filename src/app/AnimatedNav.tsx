'use client';
import { motion } from 'framer-motion';

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

export default function AnimatedNav() {
  return (
    <>
      {/* Desktop: Vertical nav (handled in page.tsx) */}
      {/* Mobile: Floating bottom nav */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden bg-white/80 backdrop-blur-lg rounded-full shadow-2xl px-4 py-2 gap-4 border-2 border-cyan-300"
      >
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-400/80 hover:bg-cyan-600 text-white font-bold text-base shadow-md transition-all"
            aria-label={s.label}
          >
            {i + 1}
          </a>
        ))}
      </motion.nav>
    </>
  );
} 