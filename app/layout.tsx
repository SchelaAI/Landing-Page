import type { Metadata } from "next";
import "./schela.css";

export const metadata: Metadata = {
  title: "Schela — The AI Recruiting Coordinator",
  description:
    "Schela's AI reaches out to candidates, books interview slots, sends reminders, and handles rescheduling — across WhatsApp and Email, automatically.",
  icons: {
    icon: "/s.png",
    shortcut: "/s.png",
    apple: "/s.png",
    other: {
      rel: "icon",
      url: "/s.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geom:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
