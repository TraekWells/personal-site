import React from "react";
import Tooltip from "../Tooltip";
import { CircleHelp } from "lucide-react";
import styles from "./WordWithHint.module.scss";

type WordWithHintProps = {
  children: React.ReactNode;
  message: string;
};

const WordWithHint = ({ children, message }: WordWithHintProps) => {
  return (
    <Tooltip unstyled message={message} classList={styles.wordWithHint}>
      {children} <CircleHelp size={18} color="var(--color-primary)" />
    </Tooltip>
  );
};

export default WordWithHint;
