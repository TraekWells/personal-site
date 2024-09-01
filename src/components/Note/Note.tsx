import styles from "./Note.module.scss";
import Icon from "../Icon";

type NoteProps = {
  type?: "info" | "warning";
  children: React.ReactNode;
};

const Note = ({ type, children }: NoteProps) => {
  // Handle dynamic styles baased on type prop

  return (
    <div className={styles.note}>
      <Icon type="infoCircle" />
      {children}
    </div>
  );
};

export default Note;
