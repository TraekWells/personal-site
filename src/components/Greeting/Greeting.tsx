import styles from "./Greeting.module.scss";

const getGreeting = (hours: number): string => {
  switch (true) {
    case hours < 12:
      return "Good Morning";
    case hours < 18:
      return "Good Afternoon";
    default:
      return "Good Evening";
  }
};

const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();
  const greeting = getGreeting(hours);

  return <p className={styles.greeting}>{greeting}</p>;
};

export default Greeting;
