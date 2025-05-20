import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
//import { dark } from "@clerk/themes";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "SMART-Finance.AI",
  description: "Financeiro Inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${mulish.className} antialiased`}>
        <ClerkProvider
          //appearance={{
          //  baseTheme: dark,
          //}}
        >
          <div className="flex h-full flex-col overflow-hidden">{children}</div>
        </ClerkProvider>
      </body>
    </html>
  );
}
