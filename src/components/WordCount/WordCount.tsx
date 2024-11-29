import { Clock } from "lucide-react";
import styles from "./WordCount.module.scss";

type WordCountProps = {
  wordCount: number;
};

const WordCount = ({ wordCount }: WordCountProps) => {
  const wpm = 200;
  const averageMinutes = Math.ceil(wordCount / wpm);

  return (
    <div className={styles.wordCount}>
      <Clock size="16" />
      <p>About a {averageMinutes} minute read on average.</p>
    </div>
  );
};

export default WordCount;
