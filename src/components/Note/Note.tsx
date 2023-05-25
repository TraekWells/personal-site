import styles from "./Note.module.scss";
import Icon from "../Icon";

interface NoteProps {
  children: React.ReactNode;
}

const Note = ({ children }: NoteProps) => {
  return (
    <div className={styles["note"]}>
      <Icon type="infoCircle" />
      {children}
    </div>
  );
};

export default Note;
