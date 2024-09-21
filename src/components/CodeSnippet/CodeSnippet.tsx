import { Code } from "bright";
import styles from "./CodeSnippet.module.scss";

const CodeSnippet = (props: any) => {
  const language = props.children.props.className.split("-")[1];
  return (
    <div className={styles.codeSnippetWrapper}>
      <span className={styles.language}>{language}</span>
      <Code
        {...props}
        theme="dracula"
        className={styles.codeSnippet}
        lineNumbers
      />
    </div>
  );
};

export default CodeSnippet;
