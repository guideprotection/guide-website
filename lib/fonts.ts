import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";

// Matches the original site's Google Fonts request:
// family=Newsreader:opsz,wght@6..72,400&family=Inter:wght@400;450;500;550;600&family=IBM+Plex+Mono:wght@400;500
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  variable: "--font-newsreader",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${inter.variable} ${newsreader.variable} ${plexMono.variable}`;
