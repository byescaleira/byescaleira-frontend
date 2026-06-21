"use client";

import { useMemo, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

function seededStars(count: number, seed: number): Star[] {
  const stars: Star[] = [];
  let state = seed;
  const rand = () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };

  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: 1 + rand() * 2.5,
      opacity: 0.2 + rand() * 0.7,
      duration: 2 + rand() * 4,
      delay: rand() * 4,
    });
  }
  return stars;
}

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function StarField({ count = 120 }: { count?: number }) {
  const mounted = useMounted();
  const stars = useMemo(() => seededStars(count, 42), [count]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(59,130,246,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(20,184,166,0.08) 0%, transparent 45%), #0B0F19",
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-subtle opacity-50" />

      {/* Stars */}
      {mounted &&
        stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-starlight"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            initial={{ opacity: star.opacity * 0.4, scale: 0.8 }}
            animate={{
              opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Shooting star */}
      {mounted && (
        <motion.div
          className="absolute h-px w-24 bg-gradient-to-r from-transparent via-nebula to-transparent"
          style={{ top: "25%", left: "-10%" }}
          animate={{
            left: ["-10%", "110%"],
            top: ["25%", "35%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: 5,
            repeat: Infinity,
            repeatDelay: 12,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}
