import { Code } from "bright";
import styles from "./CodeSnippet.module.scss";

const CodeSnippet = (props: any) => {
  return (
    <Code {...props} theme="dracula" className={styles.codeBlock} lineNumbers />
  );
};

export default CodeSnippet;
