import MainLayout from "@/components/layout/main-layout";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tools",
    default: "Tools",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description: "Various Tools",
  authors: [
    {
      name: "BuildTheOne",
      url: "https://github.com/BuildTheOne",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
