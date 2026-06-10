import type {Metadata} from 'next';
import "./globals.css";
import icon from "../../public/hero-pic-2.jpeg";

export const metadata: Metadata = {
  title: 'Sabeen Muzaffar | Software Engineer Portfolio',
  description: 'Premium software engineering portfolio showcasing high-performance digital solutions and expert cloud architecture.',
  icons: {
    icon: { url: icon.src }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
