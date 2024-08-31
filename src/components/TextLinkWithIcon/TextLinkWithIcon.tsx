import Link from "next/link";
import styles from "./TextLinkWithIcon.module.scss";
import Icon from "../Icon";

type TextLinkWithIconProps = {
  href: string;
  children: React.ReactNode;
};

const TextLinkWithIcon = ({ href, children }: TextLinkWithIconProps) => {
  return (
    <Link href={href} className={styles.textLinkWithIcon}>
      <Icon type="arrowRight" /> {children}
    </Link>
  );
};

export default TextLinkWithIcon;
