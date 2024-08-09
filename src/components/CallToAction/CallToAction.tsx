import styles from "./CallToAction.module.scss";
import Link from "next/link";
import Icon from "../Icon";

const CallToAction = () => {
  return (
    <article className={styles["call-to-action"]}>
      <div className={styles["call-to-action__content"]}>
        <h3>Let's work together</h3>
        <p>
          Elevate your online presence with a user-focused website. Reach out
          for a discovery call & let's turn your ideas into a stunning digital
          experience.
        </p>
        <div className="d-inline">
          <Link href="/contact-me" className="button button--ghost">
            Contact Me <Icon type="arrowRight" />
          </Link>
        </div>
      </div>
      <div className={styles["call-to-action__image"]}>
        <img src="../images/footer-image.jpg" alt="An image of Traek Wells" />
      </div>
    </article>
  );
};

export default CallToAction;
