"use client";
import React from "react";
import styles from "./BioWithToggle.module.scss";
import Grid from "@/layout/Grid";
import Image from "next/image";
import Toggle from "@/components/Toggle";

const BioWithToggle = () => {
  const [mode, setMode] = React.useState<"professional" | "casual">(
    "professional"
  );
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
        <Toggle mode={mode} setMode={setMode} />
        {mode === "professional" ? (
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

export default BioWithToggle;
