'use client';

import React from 'react';
import ClientLayout from '../../components/ClientLayout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}