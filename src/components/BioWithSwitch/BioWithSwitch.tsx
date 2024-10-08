"use client";
import React from "react";
import styles from "./BioWithSwitch.module.scss";
import Grid from "@/layout/Grid";
import Image from "next/image";
import Switch from "../Switch";

const BioWithSwitch = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Grid>
      <Image
        src="/images/header-image.webp"
        height={350}
        width={350}
        className={styles.bioImage}
        alt="Traek Wells"
      />
      <article className={styles.bio}>
        <Switch
          label={checked ? "Casual" : "Professional"}
          checked={checked}
          setChecked={setChecked}
        />
        {checked && "professional" ? (
          <p>
            I'm a freelance User Interface designer and developer who always
            puts the user first.
          </p>
        ) : (
          <p>
            But seriously, I’m a front-end engineer from Minnesota. Currently,
            I’m focused learning and implementing modern web features.
          </p>
        )}
      </article>
    </Grid>
  );
};

export default BioWithSwitch;
