import React from "react";

const useGetWordCount = () => {
  const [wordCount, setWordCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    const wpm = 250;
    const body = document.querySelector(".content > div");

    if (body?.textContent) {
      const words = body.textContent.trim().split(/\s+/).length;
      const count = Math.ceil(words / wpm);
      setWordCount(count);
    }
  }, []);
  return wordCount;
};

export default useGetWordCount;
