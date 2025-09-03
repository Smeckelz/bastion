// FILE: app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/components/Providers";

export const metadata: Metadata = {
  title: "Chronix",
  description: "Chronicle your world. Bastion + Campaign tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        {providers({ children })}
      </body>
    </html>
  );
}
