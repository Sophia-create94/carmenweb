import type { Metadata } from "next";
import Link from "next/link";
import { Alegreya_Sans } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/LayoutPage.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Popup from "@/components/Popup";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

const SITE_URL = "https://www.drcarmenmueller.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kinder- & Jugendarztpraxis Dr. med. Carmen Müller | Heidelberg",
    template: "%s | Dr. med. Carmen Müller",
  },
  description:
    "Kinder- & Jugendarztpraxis Dr. med. Carmen Müller in Heidelberg. Umfassendes Leistungsspektrum, Vorsorgeuntersuchungen und einfühlsame medizinische Betreuung für Ihre Kinder. Jetzt telefonisch einen Termin vereinbaren!",
  keywords: [
    "Kinderarzt Heidelberg",
    "Kinderärztin",
    "Kinderarztpraxis",
    "Dr. Carmen Müller",
    "Jugendmedizin",
    "Vorsorgeuntersuchungen",
    "Impfungen",
    "medizinische Betreuung Kinder",
    "Sprechzeiten",
    "Terminvereinbarung",
  ],
  authors: [{ name: "Dr. med. Carmen Müller & Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Kinder- & Jugendarztpraxis Dr. med. Carmen Müller",
    title: "Kinder- & Jugendarztpraxis Dr. med. Carmen Müller",
    description:
      "Kinder- & Jugendarztpraxis in Heidelberg – einfühlsame und zuverlässige medizinische Versorgung für Ihre Kinder.",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinder- & Jugendarztpraxis Dr. med. Carmen Müller",
    description:
      "Kinder- & Jugendarztpraxis in Heidelberg – einfühlsame und zuverlässige medizinische Versorgung für Ihre Kinder.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  verification: {
    google: "rnJ24DgjsaDyHnsIEdIHwXfMQzdBMRhv4b7hDWDt5Uw",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Kinder- & Jugendarztpraxis Dr. med. Carmen Müller",
  description:
    "Facharztpraxis für Kinderheilkunde und Jugendmedizin in Heidelberg.",
  url: SITE_URL + "/",
  image: SITE_URL + "/logo.png",
  logo: SITE_URL + "/logo.png",
  telephone: "+49 6221 412450",
  faxNumber: "+49 6221 4348260",
  email: "praxisteammueller@web.de",
  medicalSpecialty: "Pediatric",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dossenheimer Landstr. 40",
    postalCode: "69121",
    addressLocality: "Heidelberg",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.4288268,
    longitude: 8.6831777,
  },
  physician: {
    "@type": "Physician",
    name: "Dr. med. Carmen Müller",
    medicalSpecialty: "Pediatric",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday"],
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday"],
      opens: "15:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={alegreya.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Popup />

        <div className="header">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="logo"
              src="/img/logo.png"
              alt="Logo Kinder- & Jugendarztpraxis Dr. med. Carmen Müller"
            />
          </Link>
          <h1 className="site-title">
            Kinder- &amp; Jugendarztpraxis <br className="break-title" /> Dr.
            med. Carmen Müller
          </h1>
        </div>

        <Navbar />

        {children}

        <Footer />

        <div className="sub-footer">
          <Link className="print" href="/about">
            Impressum
          </Link>
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
