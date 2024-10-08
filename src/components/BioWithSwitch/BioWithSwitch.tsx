"use client";
import React from "react";
import styles from "./BioWithSwitch.module.scss";
import Grid from "@/layout/Grid";
import Image from "next/image";
import Switch from "../Switch";
import bioImage from "@/../public/images/bio-image.webp";
import Icon from "../Icon";
import Link from "next/link";

const BioWithSwitch = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Grid>
      <article className={styles.bioImageWrapper}>
        <Image
          src={bioImage}
          width={400}
          className={styles.bioImage}
          alt="Traek Wells"
        />
        <div className={styles.iconWrapper}>
          <Link href="https://x.com/TraekWells" target="_blank">
            <Icon type="twitter" />
          </Link>
          <Link href="https://instagram.com/traekwells" target="_blank">
            <Icon type="instagram" />
          </Link>
          <Link href="https://dribbble.com/traekwells" target="_blank">
            <Icon type="dribbble" />
          </Link>
          <Link href="https://github.com/TraekWells" target="_blank">
            <Icon type="github" />
          </Link>
        </div>
      </article>
      <article className={styles.bioContent}>
        <Switch
          label={checked ? "Casual" : "Professional"}
          checked={checked}
          setChecked={setChecked}
        />
        {checked ? (
          <p>
            I'm a self-taught front-end engineer from the beautiful state of
            Minnesota. I love to run, play weird noises on my guitar, and learn
            about new and exciting stuff in web development.
          </p>
        ) : (
          <>
            <p>
              I have four years of professional experience{" "}
              <em>(and counting)</em>. Some of my skills are{" "}
              <strong>JavaScript</strong>, <strong>React</strong>,{" "}
              <strong>NextJS</strong>, <strong>CSS</strong>,{" "}
              <strong>UI Design</strong>, and <strong>UX Design</strong>.
            </p>
            <p>
              Most importantly, I'm a <strong>problem solver</strong> and{" "}
              <strong>people seem to like working with me</strong>.
            </p>
            <p>
              <Link
                href="https://www.linkedin.com/in/traekwells/"
                target="_blank"
              >
                Visit my outdated LinkedIn
              </Link>{" "}
              for more.
            </p>
          </>
        )}
      </article>
    </Grid>
  );
};

export default BioWithSwitch;
