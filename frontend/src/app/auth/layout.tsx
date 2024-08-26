import React from 'react';
import '../globals.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-800 min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}