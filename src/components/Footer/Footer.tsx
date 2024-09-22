import Container from "@/layout/Container";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className="column">
            <p>
              <strong>About me</strong>
            </p>
            <p>
              I'm a freelance web designer and developer, focusing on helping
              small businesses build an online presence, while putting the user
              first.
            </p>
          </div>
          <div className="column">
            <p>
              <strong>Pages</strong>
            </p>
            <ul>
              <li>
                <Link href="/blog">Writing</Link>
              </li>
              <li>
                <Link href="/about-me">About Me</Link>
              </li>
              <li>
                <Link href="/journal/impossible-list">Impossible List</Link>
              </li>
              <li>
                <Link href="/now">Now</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <p>
              <strong>Social media</strong>
            </p>
            <ul>
              <li>
                <Link href="https://twitter.com/TraekWells" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/traekwells/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/ui.traek/"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://dribbble.com/TraekWells" target="_blank">
                  Dribbble
                </Link>
              </li>
              <li>
                <Link href="https://github.com/TraekWells" target="_blank">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center">
          ©️ Traek Wells {new Date().getFullYear()}. Built with{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            NextJS
          </a>
          .{" "}
          <a
            href="https://github.com/TraekWells/personal-dev-site"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>{" "}
          🐜
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
