"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center border border-border bg-card p-1">
        <div className="size-8" />
      </div>
    );
  }

  const current = theme === "system" ? "system" : resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="flex items-center gap-1 border border-border bg-card p-1">
      <button
        aria-label="Light mode"
        onClick={() => setTheme("light")}
        className={`p-2 transition-all ${
          current === "light" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun className="size-4" />
      </button>
      <button
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
        className={`p-2 transition-all ${
          current === "dark" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon className="size-4" />
      </button>
      <button
        aria-label="System preference"
        onClick={() => setTheme("system")}
        className={`p-2 transition-all ${
          theme === "system" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Monitor className="size-4" />
      </button>
    </div>
  );
}
