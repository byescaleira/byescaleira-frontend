"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center rounded-full border border-border bg-muted p-1">
        <div className="size-8" />
      </div>
    );
  }

  const current = theme === "system" ? "system" : resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-muted/50 p-1 backdrop-blur-md">
      <button
        aria-label="Light mode"
        onClick={() => setTheme("light")}
        className={`rounded-full p-2 transition-all ${
          current === "light" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun className="size-4" />
      </button>
      <button
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
        className={`rounded-full p-2 transition-all ${
          current === "dark" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon className="size-4" />
      </button>
      <button
        aria-label="System preference"
        onClick={() => setTheme("system")}
        className={`rounded-full p-2 transition-all ${
          theme === "system" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Monitor className="size-4" />
      </button>
    </div>
  );
}
