import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Corrected import
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const fontSans = GeistSans; // Use GeistSans directly as per its documentation

export const metadata: Metadata = {
  title: "Pooja Choudhary | Android Developer",
  description: "Personal portfolio website for Pooja Choudhary, an Android Developer and Kotlin Multiplatform Specialist based in Mumbai, India.",
  keywords: "Pooja Choudhary, Android Developer, Kotlin, KMM, Jetpack Compose, Ktor, SQLDelight, Koin, Portfolio, Mumbai, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable // Apply the font variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
