import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Bloodhero | Donate Blood, Save Lives",
  description: "Modern blood donation platform for Bangladesh."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
