import Container from "@/layout/Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className="column">
            <p className="eyebrowify">
              <strong>About me</strong>
            </p>
            <p>
              Front-end web developer, trying to keep my skills sharp and
              relevant to stay employed. Trying to be a good person.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
