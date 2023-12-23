import { useCallback } from "react";
import { useMemo } from "react";

export function useAnchorClick() {
  const handleAnchorClick = useCallback((section: string) => {
    const sectionElement = document.getElementById(section);
    sectionElement && sectionElement.scrollIntoView({ behavior: "smooth" });
  }, []);

  return useMemo(() => {
    return {
      handleAnchorClick,
    };
  }, [handleAnchorClick]);
}
