import Link from "next/link";
import styles from "./TextLinkWithIcon.module.scss";
import { ArrowLeft } from "react-feather";

type TextLinkWithIconProps = {
  href: string;
  children: React.ReactNode;
};

const TextLinkWithIcon = ({ href, children }: TextLinkWithIconProps) => {
  return (
    <span className={styles.textLinkWithIcon}>
      <ArrowLeft />
      <Link href={href}>{children}</Link>
    </span>
  );
};

export default TextLinkWithIcon;
