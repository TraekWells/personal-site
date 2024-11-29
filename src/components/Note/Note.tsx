import { Info } from "lucide-react";
import styles from "./Note.module.scss";

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
