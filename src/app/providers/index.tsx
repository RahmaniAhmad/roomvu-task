"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReduxProvider } from "./reduxProvider";
import { ThemeProvider } from "./themeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
