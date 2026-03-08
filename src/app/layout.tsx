import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innodify.in"),
  title: {
    default: "Innodify | AI, Web & Mobile Development Agency in Surat",
    template: "%s | Innodify",
  },
  description:
    "Innodify is a digital solutions agency in Surat, India. We build AI solutions, CRM systems, SaaS products, web & mobile apps, and eCommerce stores.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Innodify",
    title: "Innodify | AI, Web & Mobile Development Agency in Surat",
    description:
      "Innodify is a digital solutions agency in Surat, India. We build AI solutions, CRM systems, SaaS products, web & mobile apps, and eCommerce stores.",
    url: "https://innodify.in",
    images: [
      {
        url: "/innodify-logo.svg",
        width: 512,
        height: 512,
        alt: "Innodify Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innodify | AI, Web & Mobile Development Agency in Surat",
    description:
      "AI, CRM, SaaS, Web & Mobile Solutions — Your Partner for Digital Transformation",
    images: ["/innodify-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${libreBaskerville.variable} font-sans antialiased`}
      >
        <OrganizationJsonLd />
        <div className="bg-[#0e1012] min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
