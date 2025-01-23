import { Star } from "lucide-react";
import styles from "./BookRating.module.scss";

type BookRatingProps = {
  rating: number;
};

const BookRating = ({ rating }: BookRatingProps) => {
  return (
    <div className={styles.bookRating}>
      <Star className={styles.star} size={16} />
      <span>{rating}</span>
    </div>
  );
};

export default BookRating;
