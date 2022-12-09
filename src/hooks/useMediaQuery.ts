import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const match = window.matchMedia(query);
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    match.addEventListener("change", handleChange);

    return () => match.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};
