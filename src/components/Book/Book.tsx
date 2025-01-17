import Image from "next/image";

type BookProps = {
  title: string;
  rating: number;
  image: string;
  summary: string;
  review: string;
};

const Book = ({ title, rating, image, summary, review }: BookProps) => {
  return (
    <>
      <div>{title}</div>
      <div>{rating}</div>
      <Image src={image} width={200} height={400} alt={`${title} book cover`} />
      <div>{summary}</div>
      <div>{review}</div>
    </>
  );
};

export default Book;
