import Image from "next/image";
import styles from "./Avatar.module.scss";

const Avatar = () => {
  return (
    <Image
      src="/images/header-image.webp"
      width={60}
      height={60}
      className={styles.avatar}
      alt="Traek Wells"
    />
  );
};

export default Avatar;
