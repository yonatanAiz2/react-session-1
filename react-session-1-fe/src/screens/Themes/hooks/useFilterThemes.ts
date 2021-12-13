import { useState } from "react";
import { FiltersState } from "../components/Filters/Filters.types";

export const useFilterThemes = (themes: Theme[]) => {
  const [filters, setFilters] = useState<FiltersState>();

  const onFiltersChange = (newState: FiltersState) => setFilters(newState);

  const filterThemes = () => {
    if (filters && filters.search) {
      return themes.filter((theme) =>
        theme.title.toLowerCase().includes(filters.search)
      );
    }

    return themes;
  };

  const filteredThemes = filterThemes();
  return { filteredThemes, onFiltersChange };
};
