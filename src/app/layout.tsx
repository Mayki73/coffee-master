import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const inter = Comfortaa({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <style>
        {`
          :root {
            --font-sans: ${inter.style.fontFamily};
          }
        `}
      </style>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <title>Страница не найдена | Coffeeremont24</title>
        <meta
          name="description"
          content="Страница не найдена на сайте Coffeeremont24"
        />
        <link rel="icon" href="/brands/icon-coffeeremont.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
