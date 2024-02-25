import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';

import 'react-loading-skeleton/dist/skeleton.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Captor',
  description: 'Captor is a saas app, where you can chat with your documents.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}
        >
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
