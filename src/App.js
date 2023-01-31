import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;