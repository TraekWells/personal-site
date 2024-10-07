import Image from "next/image";
import styles from "./Avatar.module.scss";

const Avatar = () => {
  return (
    <Image
      src="/images/header-image.webp"
      width={50}
      height={50}
      className={styles.avatar}
      alt="Traek Wells"
    />
  );
};

export default Avatar;
