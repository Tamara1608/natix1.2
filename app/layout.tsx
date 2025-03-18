import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'NATIX - Professional Security Systems & Solutions',
  description: 'NATIX - Professional security systems installation and consultation services.',
  openGraph: {
    title: 'NATIX - Professional Security Systems & Solutions',
    description: 'Professional security systems installation and consultation services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://natix.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NATIX - Professional Security Systems & Solutions',
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 