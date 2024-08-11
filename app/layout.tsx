import type { Metadata } from 'next';
import ProgressProvider from '@/contexts/progress-context';
import { inter } from '@/app/fonts';
import '@/styles/reset.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Millionaire',
    default: 'Millionaire',
  },
  description: '“Test your knowledge in ‘Who Wants to Be a Millionaire,’ the classic quiz game. Answer challenging'
    + ' questions, use lifelines, and climb the money ladder to win virtual fortunes. Can you reach the million?”',
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
