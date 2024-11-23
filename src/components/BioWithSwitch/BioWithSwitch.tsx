"use client";
import React from "react";
import styles from "./BioWithSwitch.module.scss";
import Grid from "@/layout/Grid";
import Image from "next/image";
import Switch from "../Switch";
import bioImage from "@/../public/images/bio-image.webp";
import thugLifeGlasses from "@/../public/images/thug-life-glasses.png";
import Icon from "../Icon";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const BioWithSwitch = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Grid>
      <div className={styles.bioMediaWrapper}>
        <article className={styles.bioImageWrapper}>
          <AnimatePresence>
            {checked && (
              <motion.div
                style={{ position: "relative" }}
                initial={{ opacity: 0, bottom: 10 }}
                animate={{ opacity: 1, bottom: 0 }}
                exit={{ opacity: 0, bottom: 10 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={thugLifeGlasses}
                  alt="Thug life"
                  className={styles.thugLifeGlasses}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            src={bioImage}
            width={400}
            className={styles.bioImage}
            alt="Traek Wells"
          />
        </article>
        <div className={styles.iconWrapper}>
          <Link href="https://instagram.com/ui.traek" target="_blank">
            <Icon type="instagram" />
          </Link>
          <Link href="https://dribbble.com/traekwells" target="_blank">
            <Icon type="dribbble" />
          </Link>
          <Link href="https://github.com/TraekWells" target="_blank">
            <Icon type="github" />
          </Link>
        </div>
      </div>
      <article className={styles.bioContent}>
        <Switch
          label={checked ? "Casual Bio" : "Professional Bio"}
          checked={checked}
          setChecked={setChecked}
        />
        {checked ? (
          <>
            <p>
              I'm a self-taught front-end engineer from the beautiful state of{" "}
              <strong>Minnesota</strong>. I love to run, make weird noises on my
              guitar, and learn about new and exciting stuff in web development.
            </p>
            <p>
              I used to want to be a zoologist. I still do, but I used to too.
            </p>
          </>
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
