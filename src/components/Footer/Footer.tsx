import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container container--narrow">
        <div className="d-grid-two-columns">
          <div className="d-grid__column">
            <p>
              <strong>About me</strong>
            </p>
            <p>
              I'm a freelance web designer and developer, focusing on helping
              small businesses build an online presence, while putting the user
              first.
            </p>
          </div>
          <div className="d-grid__column">
            <div className="d-grid-two-columns">
              <div className="d-grid__column">
                <p>
                  <strong>Pages</strong>
                </p>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/process">Process</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/about-me">About Me</Link>
                  </li>
                </ul>
              </div>
              <div className="d-grid__column">
                <p>
                  <strong>Social media</strong>
                </p>
                <ul className="list-unstyled">
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
                    <Link
                      href="https://dribbble.com/TraekWells"
                      target="_blank"
                    >
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
          </div>
        </div>
        <p className="text-center mt-4">
          &copy; Traek Wells {new Date().getFullYear()}. Built with{" "}
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
      </div>
    </footer>
  );
};

export default Footer;
