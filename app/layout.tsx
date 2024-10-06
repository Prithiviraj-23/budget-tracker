import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProdivers from "@/components/provider/RootProdivers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "This budget tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body>
          <Toaster richColors position="bottom-right" />
          <RootProdivers>{children}</RootProdivers>
        </body>
      </html>
    </ClerkProvider>
  );
}
