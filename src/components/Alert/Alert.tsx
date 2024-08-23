import style from "./Alert.module.scss";

type AlertProps = {
  children: React.ReactNode;
};

const Alert = ({ children }: AlertProps) => {
  return <div className={style.alert}>{children}</div>;
};

export default Alert;
