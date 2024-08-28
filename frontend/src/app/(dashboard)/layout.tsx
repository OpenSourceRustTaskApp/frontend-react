'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ClientLayout from '../../components/ClientLayout';
import { useAuth } from '../../contexts/AuthContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <ClientLayout>{children}</ClientLayout>;
}