"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import GeneralProvider from "../../context/GenralContext";

export const queryClient = new QueryClient();

function Providers({ children }: any) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GeneralProvider>{children}</GeneralProvider>
      </QueryClientProvider>
    </div>
  );
}

export default Providers;
