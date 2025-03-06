import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'NATIX - Coming Soon',
  description: 'NATIX - Professional security systems installation and consultation services.',
  openGraph: {
    title: 'NATIX - Coming Soon',
    description: 'Professional security systems installation and consultation services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://natix.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NATIX - Coming Soon',
    description: 'Professional security systems installation and consultation services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
} 