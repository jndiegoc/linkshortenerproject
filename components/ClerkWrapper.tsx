"use client";

import React, { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";

type Props = {
  children: React.ReactNode;
};

export default function ClerkWrapper({ children }: Props) {
  const [baseTheme, setBaseTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const t = localStorage.getItem("theme");
      if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setBaseTheme("dark");
      } else {
        setBaseTheme("light");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <ClerkProvider
      appearance={{
        baseTheme,
      }}
    >
      {children}
    </ClerkProvider>
  );
}
