import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { leagueConfig } from "../data/league.config";

export const metadata: Metadata = {
  title: leagueConfig.nameZh,
  description: leagueConfig.nameEn
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
