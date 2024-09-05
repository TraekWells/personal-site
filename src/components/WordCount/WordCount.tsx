type WordCountProps = {
  wordCount: number;
};

const WordCount = ({ wordCount }: WordCountProps) => {
  const wpm = 200;
  const averageMinutes = Math.ceil(wordCount / wpm);

  return <p>About a {averageMinutes} minute read on average.</p>;
};

export default WordCount;
