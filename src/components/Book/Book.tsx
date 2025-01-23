import Image from "next/image";
import styles from "./Book.module.scss";
import BookRating from "./BookRating";

type BookProps = {
  title: string;
  author: string;
  rating?: number;
  image: string;
  summary: string;
  review: string;
};

const Book = ({ title, author, rating, image, summary, review }: BookProps) => {
  return (
    <div className={styles.book}>
      <div className={styles.bookImageContainer}>
        {rating && <BookRating rating={rating} />}
        <Image
          src={image}
          alt={`${title} book cover`}
          width={350}
          height={245}
          className={styles.bookImage}
        />
      </div>
      <div className="bookContent">
        <h3 className={styles.bookTitle}>{title}</h3>
        <small>{author}</small>
      </div>
    </div>
  );
};

export default Book;
