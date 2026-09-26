import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Mono, Public_Sans } from "next/font/google";

import { getSiteUrl } from "@/lib/site";

import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const title = "CopperDesk: catch the calls you miss and win the job";
const description =
  "CopperDesk answers the calls you miss, gets the caller's details, and sends them to you right away so you can lock in the job. For trade and service businesses.";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title,
  description,
  applicationName: "CopperDesk",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: "CopperDesk",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
