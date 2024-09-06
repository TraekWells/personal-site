import styles from "./Note.module.scss";
import { Info } from "react-feather";

type NoteProps = {
  type: "info" | "warning" | "error";
  children: React.ReactNode;
};

const Note = ({ type = "info", children }: NoteProps) => {
  // Change the icon based on the type
  return (
    <div className={`${styles.note} ${styles[type]}`}>
      <Info color={`var(--color-${type})`} />
      {children}
    </div>
  );
};

export default Note;
