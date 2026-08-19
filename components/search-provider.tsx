"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SearchContextValue = {
  open: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const value = useMemo<SearchContextValue>(
    () => ({
      open,
      openSearch: () => setOpen(true),
      closeSearch: () => setOpen(false),
    }),
    [open]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within a SearchProvider");
  return ctx;
}
