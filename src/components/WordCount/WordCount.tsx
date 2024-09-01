"use client";
import React from "react";

type WordCountProps = {
  wordCount: number;
};

const WordCount = ({ wordCount }: WordCountProps) => {
  const wpm = 200;
  const averageMinutes = Math.ceil(wordCount / wpm);

  return <p>About a {averageMinutes} minute read.</p>;
};

export default WordCount;
