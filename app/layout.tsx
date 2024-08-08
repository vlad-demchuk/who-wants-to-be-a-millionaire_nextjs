import type { Metadata } from 'next';
import { inter } from '@/app/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Millionaire',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
