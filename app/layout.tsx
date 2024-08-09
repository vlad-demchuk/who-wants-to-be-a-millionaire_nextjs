import type { Metadata } from 'next';
import { inter } from '@/app/fonts';
import '@/styles/reset.css';
import '@/styles/globals.css';
import ProgressProvider from '@/contexts/progress-context';

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
      <body className={inter.className}>
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
