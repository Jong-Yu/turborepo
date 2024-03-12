import { ReactNode, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router';

interface ProvicerProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProvicerProps) => {
  const queryClinet = useMemo(() => new QueryClient(), []);
  const router = useMemo(() => Router, []);

  return (
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={router} />
      {children}
    </QueryClientProvider>
  );
};
