
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Fraunces, Figtree } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Fabel — Discover your next favorite story',
  description: 'Hand-picked book covers from literary fiction, mystery, poetry, and more.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html
  lang="en"
  suppressHydrationWarning
  className={cn(
    figtree.variable,
    fraunces.variable,
    geistMono.variable
  )}
>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}
