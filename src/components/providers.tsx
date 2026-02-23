"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Lang = "en" | "bn";

type AppContextType = {
  lang: Lang;
  dark: boolean;
  toggleLang: () => void;
  toggleDark: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProviders({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const value = useMemo(
    () => ({
      lang,
      dark,
      toggleLang: () => setLang((prev) => (prev === "en" ? "bn" : "en")),
      toggleDark: () => setDark((prev) => !prev)
    }),
    [lang, dark]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProviders");
  return ctx;
}
