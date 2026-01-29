import React, { createContext, useContext, useState } from "react";

export type Filters = {
  wheelchair: boolean;
  bilingual: boolean;
  kidFriendly: boolean;
  seniors: boolean;
  youth: boolean;
  adults: boolean;
  food: boolean;
  housing: boolean;
  legal: boolean;
  healthcare: boolean;
  mentalHealth: boolean;
  employment: boolean;
  education: boolean;
  transportation: boolean;
  immigration: boolean;
  lgbtq: boolean;
  free: boolean;
  lowCost: boolean;
  appointment: boolean;
  walkIn: boolean;
  computers: boolean;
  wifi: boolean;
};

type Ctx = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filtersOpen: boolean;
  setFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchFiltersContext = createContext<Ctx | null>(null);

export function SearchFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    wheelchair: false,
    bilingual: false,
    kidFriendly: false,
    seniors: false,
    youth: false,
    adults: false,
    food: false,
    housing: false,
    legal: false,
    healthcare: false,
    mentalHealth: false,
    employment: false,
    education: false,
    transportation: false,
    immigration: false,
    lgbtq: false,
    free: false,
    lowCost: false,
    appointment: false,
    walkIn: false,
    computers: false,
    wifi: false,
  });
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <SearchFiltersContext.Provider
      value={{
        query,
        setQuery,
        filters,
        setFilters,
        filtersOpen,
        setFiltersOpen,
      }}
    >
      {children}
    </SearchFiltersContext.Provider>
  );
}

export function useSearchFilters() {
  const ctx = useContext(SearchFiltersContext);
  if (!ctx)
    throw new Error(
      "useSearchFilters must be used within SearchFiltersProvider"
    );
  return ctx;
}
