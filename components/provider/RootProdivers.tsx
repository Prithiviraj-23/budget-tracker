"use client";

import { ThemeProvider } from "next-themes";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
function RootProdivers({ children }: { children: React.ReactNode }) {
  const [quertClient] = useState(() => new QueryClient({}));
  return (
    <QueryClientProvider client={quertClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
	  <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default RootProdivers;
