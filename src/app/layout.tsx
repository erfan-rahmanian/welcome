import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth Dashboard App',
  description: 'A simple authentication and dashboard application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
} 