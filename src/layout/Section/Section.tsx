import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  secondary?: boolean;
}

const Section = ({ children, secondary }: SectionProps) => {
  return (
    <section
      className={`${styles.section} ${
        secondary ? `${styles["section--secondary"]}` : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
