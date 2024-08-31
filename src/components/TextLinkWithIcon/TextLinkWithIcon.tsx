import Link from "next/link";
import styles from "./TextLinkWithIcon.module.scss";
import Icon from "../Icon";

type TextLinkWithIconProps = {
  href: string;
  children: React.ReactNode;
};

const TextLinkWithIcon = ({ href, children }: TextLinkWithIconProps) => {
  return (
    <span className={styles.textLinkWithIcon}>
      <Icon type="arrowLeft" />
      <Link href={href}>{children}</Link>
    </span>
  );
};

export default TextLinkWithIcon;
