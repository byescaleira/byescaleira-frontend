"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Layers, Briefcase, FolderOpen, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
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
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 backdrop-blur-xl md:hidden"
      aria-label="Mobile section navigation"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between px-2 py-2"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.href;
          return (
            <a
              key={tab.href}
              href={tab.href}
              className={cn(
                "group relative flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors",
                isActive ? "text-primary" : "text-orbit hover:text-muted-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileTabPill"
                  className="absolute inset-0 border border-primary/30 bg-primary/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={cn("relative z-10 size-5")} />
              <span className={cn("relative z-10 text-[10px] font-black uppercase tracking-wider")}>
                {tab.label}
              </span>
            </a>
          );
        })}
      </motion.div>
    </nav>
  );
}
