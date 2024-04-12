"use client";
import React from "react";

const WordCount = () => {
  const [wordCount, setWordCount] = React.useState<number | null>(null);
  const wpm = 250;

  React.useEffect(() => {
    const body = document.querySelector(".content > div");

    if (body?.textContent) {
      const words = body.textContent.trim().split(/\s+/).length;
      const count = Math.ceil(words / wpm);
      setWordCount(count);
    }
  }, [wordCount]);

  return (
    <div className="content__info">
      <p>About a {wordCount} minute read.</p>
    </div>
  );
};

export default WordCount;
