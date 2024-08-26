import React from 'react';
import Sidebar from '../components/Sidebar';
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
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}