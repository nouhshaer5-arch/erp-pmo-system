"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
