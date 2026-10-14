import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chuanhao Lu | Economics',
  description:
    'Chuanhao Lu is a Ph.D. student in Economics at The Chinese University of Hong Kong.',
  openGraph: {
    title: 'Chuanhao Lu | Economics',
    description:
      'Research on Industrial Organization, Applied Microeconomics, Public Economics, and International Trade.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Chuanhao Lu | Economics',
    description:
      'Research on Industrial Organization, Applied Microeconomics, Public Economics, and International Trade.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
