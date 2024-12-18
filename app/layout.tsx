import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ModeToggle";
import { Chatbot } from "./components/ChatBot";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Branding & Printing Management System",
  description:
    "Integrated order and stock management for branding and printing business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header className="p-4 flex justify-end">
              <ModeToggle />
            </header>
            <main className="flex-grow">
              <Header />
              {children}
              <Footer />
              </main>
          </div>
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
