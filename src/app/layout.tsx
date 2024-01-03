import type { Metadata } from "next";
import "./globals.css";
import { Container } from "./global-components/container";
import { Header } from "./global-components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background dark select-none">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className="overflow-x-hidden">
        <div>
          <Header />
          <div className="pt-[var(--navigation-height)]">{children}</div>
          <footer>
            <Container>footer</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
