import "./globals.css";
import { Container } from "./global-components/container";
import { Header } from "./global-components/header";
import { Footer } from "./global-components/footer";

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
          <Footer />
        </div>
      </body>
    </html>
  );
}
