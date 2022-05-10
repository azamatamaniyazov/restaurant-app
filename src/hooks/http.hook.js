import { useState, useCallback } from "react";

export const useHttp = () => {
  const [status, setStatus] = useState("pending");

  const request = useCallback(
    async (
      url,
      method,
      body,
      headers = { "Content-Type": "application/json" }
    ) => {
      setStatus("loading");

      try {
        const response = await fetch(url, { method, headers, body });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        setStatus("error");
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setStatus("loading");
  }, []);

  return {
    request,
    clearError,
    status,
    setStatus,
  };
};
