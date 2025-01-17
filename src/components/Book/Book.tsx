import Image from "next/image";
import styles from "./Book.module.scss";
import { Star } from "lucide-react";

type BookProps = {
  title: string;
  author: string;
  rating: number;
  image: string;
  summary: string;
  review: string;
};

const Book = ({ title, author, rating, image, summary, review }: BookProps) => {
  return (
    <div className={styles.book}>
      <div className={styles.bookImageContainer}>
        <Image
          src={image}
          alt={`${title} book cover`}
          width={400}
          height={200}
          className={styles.bookImage}
        />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
      <div className={styles.rating}>
        {Array.from({ length: rating }).map((_, index) => {
          return <Star key={index} className={styles.star} />;
        })}
      </div>
    </div>
  );
};

export default Book;
