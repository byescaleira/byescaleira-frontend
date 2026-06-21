"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function StarField({ starCount = 100, orbCount = 5 }: { starCount?: number; orbCount?: number }) {
  const [stars, setStars] = useState<Star[]>([]);
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);

    const colors = [
      "rgba(59, 130, 246, 0.35)",   // nebula blue
      "rgba(20, 184, 166, 0.25)",   // cosmos teal
      "rgba(245, 158, 11, 0.15)",   // supernova gold
      "rgba(59, 130, 246, 0.25)",
      "rgba(20, 184, 166, 0.20)",
    ];
    const generatedOrbs: Orb[] = Array.from({ length: orbCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 400 + 250,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * 5,
      color: colors[i % colors.length],
    }));
    setOrbs(generatedOrbs);
  }, [starCount, orbCount]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden aurora-bg" aria-hidden="true">
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: [0, 60, -40, 20, 0],
            y: [0, -50, 30, -20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,15,25,0.3)_0%,_rgba(11,15,25,0.85)_100%)]" />

      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-starlight"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
