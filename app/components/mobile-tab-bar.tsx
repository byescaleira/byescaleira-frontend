"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Layers, Briefcase, FolderOpen, Play, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Play", href: "#playground", icon: Play },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];

export function MobileTabBar() {
  const [active, setActive] = useState(tabs[0].href);

  useEffect(() => {
    const onScroll = () => {
      let current = tabs[0].href;
      for (const tab of tabs) {
        const el = document.querySelector(tab.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = tab.href;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 md:hidden"
      aria-label="Mobile section navigation"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass flex items-center justify-between rounded-[2rem] px-2 py-2 shadow-2xl shadow-black/50"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.href;
          return (
            <a
              key={tab.href}
              href={tab.href}
              className={cn(
                "group relative flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 transition-colors",
                isActive ? "text-starlight" : "text-orbit hover:text-starlight"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileTabPill"
                  className="absolute inset-0 rounded-2xl bg-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 size-5" />
              <span className="relative z-10 text-[10px] font-medium">{tab.label}</span>
            </a>
          );
        })}
      </motion.div>
    </nav>
  );
}
