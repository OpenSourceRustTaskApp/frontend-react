import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'My awesome dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}