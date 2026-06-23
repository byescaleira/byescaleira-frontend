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
      <div className="flex items-center border border-[#1F2937] bg-[#111827] p-1">
        <div className="size-8" />
      </div>
    );
  }

  const current = theme === "system" ? "system" : resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="flex items-center gap-1 border border-[#1F2937] bg-[#111827] p-1">
      <button
        aria-label="Light mode"
        onClick={() => setTheme("light")}
        className={`p-2 transition-all ${
          current === "light" ? "bg-[#FF6B00] text-[#0B0F19]" : "text-[#94A3B8] hover:text-[#F8FAFC]"
        }`}
      >
        <Sun className="size-4" />
      </button>
      <button
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
        className={`p-2 transition-all ${
          current === "dark" ? "bg-[#FF6B00] text-[#0B0F19]" : "text-[#94A3B8] hover:text-[#F8FAFC]"
        }`}
      >
        <Moon className="size-4" />
      </button>
      <button
        aria-label="System preference"
        onClick={() => setTheme("system")}
        className={`p-2 transition-all ${
          theme === "system" ? "bg-[#FF6B00] text-[#0B0F19]" : "text-[#94A3B8] hover:text-[#F8FAFC]"
        }`}
      >
        <Monitor className="size-4" />
      </button>
    </div>
  );
}
