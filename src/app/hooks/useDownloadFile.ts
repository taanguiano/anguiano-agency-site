import { useCallback } from "react";
import { useMemo } from "react";

export const useDownloadFile = () => {
  const downloadURI = useCallback((uri: string, name: string) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.target = "_blank";
    link.click();
  }, []);

  return useMemo(() => {
    return {
      downloadURI,
    };
  }, [downloadURI]);
};
