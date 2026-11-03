import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROFILE } from "@/lib/data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = `${PROFILE.name} | ${PROFILE.headline}`;
const description =
  "Computer Science graduate (FAST-NUCES, 2026) working across software engineering, full-stack development, applied AI/ML and automated quality assurance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${PROFILE.name}` },
  description,
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  keywords: [
    "Muhammad Yousuf Rehan",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "Machine Learning",
    "QA Automation",
    "Playwright",
    "Karachi",
  ],
  openGraph: { title, description, type: "website", locale: "en_US", siteName: PROFILE.name },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
