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
  description: 'NATIX provides professional security systems installation, consultation, and equipment for homes and businesses. Experience peace of mind with our cutting-edge security solutions.',
  keywords: 'security systems, home security, business security, security installation, security consultation, surveillance systems, access control',
  openGraph: {
    title: 'NATIX - Professional Security Systems & Solutions',
    description: 'Professional security systems installation and consultation services for your peace of mind.',
    type: 'website',
    locale: 'en_US',
    url: 'https://natix.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NATIX - Professional Security Systems & Solutions',
    description: 'Professional security systems installation and consultation services for your peace of mind.',
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