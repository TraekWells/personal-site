interface TestimonalProps {
  quote: string;
  author: string;
}

const Testimonial = ({ quote, author }: TestimonalProps) => {
  return (
    <article className="testimonial">
      <p>{quote}</p>
      <div className="testimonial__author">
        <p>{author}</p>
      </div>
    </article>
  );
};

export default Testimonial;
