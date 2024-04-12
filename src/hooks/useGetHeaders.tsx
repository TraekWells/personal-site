"use client";
import React from "react";

const useGetHeaders = () => {
  const [pageHeaders, setPageHeaders] = React.useState<Element[]>();

  React.useEffect(() => {
    const headers = Array.from(document.querySelectorAll(".content h2"));
    setPageHeaders(headers);
  }, []);

  return pageHeaders;
};

export default useGetHeaders;
