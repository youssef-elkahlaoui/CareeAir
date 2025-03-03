import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { join } from "@prisma/client/runtime/library";
import ChatBot from "@/components/ChatBot";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });
import {Link2
} from "lucide-react";

export const metadata = {
  title: "CareeAIr",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">
              {children}
              <div className=" bottom-4 right-4 z-50">
        <ChatBot />
      </div>
              <Analytics />
              <SpeedInsights />
            </main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <a
                  href="https://youssef-elkahlaoui.rf.gd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <Link2 className="inline" /> &nbsp; By Youssef
                    El kahlaoui
                  </p>
                </a>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
