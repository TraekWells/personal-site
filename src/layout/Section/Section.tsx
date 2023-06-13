import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  secondary?: boolean;
  slim?: boolean;
}

const Section = ({ children, secondary, slim }: SectionProps) => {
  return (
    <section
      className={`${styles.section} ${
        secondary ? `${styles["section--secondary"]}` : ""
      } ${slim ? `${styles["section--slim"]}` : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
