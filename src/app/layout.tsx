
import type { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google'; // Import Dancing Script
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { UserProvider } from '@/context/user-context';
import { Providers } from '@/components/providers'; // Import the new Providers component

export const metadata: Metadata = {
  title: 'ABC De-fi', // Updated title
  description:
    'Learn crypto actions safely with interactive tutorials and gamification.',
};

// Configure Dancing Script font
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script', // Define CSS variable name
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the font variable class to the html tag
    <html lang="en" className={`${dancingScript.variable} font-sans`} suppressHydrationWarning>
      {/* Remove GeistSans variable from body, rely on font-sans which will use dancingScript */}
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers> {/* Wrap with the combined Providers component */}
            <UserProvider>
              <SidebarProvider>
                {children}
              </SidebarProvider>
              <Toaster />
            </UserProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
