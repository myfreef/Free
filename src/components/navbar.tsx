"use client";

import Link from "next/link";
import { useApp } from "./providers";

export function Navbar() {
  const { dark, lang, toggleDark, toggleLang } = useApp();

  return (
    <header className="sticky top-0 z-20 border-b border-red-100 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-red-600">Bloodhero</Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/donors">Donors</Link>
          <Link href="/register">Register</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/admin">Admin</Link>
          <button onClick={toggleLang} className="rounded-full border px-3 py-1">{lang === "en" ? "বাংলা" : "English"}</button>
          <button onClick={toggleDark} className="rounded-full border px-3 py-1">{dark ? "☀️" : "🌙"}</button>
        </nav>
      </div>
    </header>
  );
}
