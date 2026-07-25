import { Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const siteUrl = "https://shpynda.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Іван Шпинда — Full-stack розробник",
    template: "%s — Іван Шпинда",
  },
  description:
    "Full-stack розробник з 5-річним досвідом роботи з React, Vue.js, TypeScript та Node.js. Створюю веб-сайти від дизайн-прототипу до продакшену.",
  keywords: [
    "Іван Шпинда",
    "Full-stack розробник",
    "React",
    "Vue.js",
    "TypeScript",
    "Node.js",
    "Next.js",
    "портфоліо розробника",
  ],
  authors: [{ name: "Іван Шпинда", url: "https://github.com/ivan-shpynda" }],
  creator: "Іван Шпинда",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Іван Шпинда — Full-stack розробник",
    description: "Створюю веб сайти від дизайн-прототипу до продакшену.",
    url: siteUrl,
    siteName: "Іван Шпинда",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Іван Шпинда — Full-stack розробник",
    description: "Створюю веб сайти від дизайн-прототипу до продакшену.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const THEME_INIT_SCRIPT = `
(function () {
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (prefersDark ? 'dark' : 'light');
  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="uk"
      className={`${inter.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
