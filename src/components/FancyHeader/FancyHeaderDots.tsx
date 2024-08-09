const FancyHeaderDots = () => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 70 70"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="fancy-header__dots"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#FFCA7F">
          <circle cx="5" cy="5" r="5"></circle>
          <circle cx="5" cy="35" r="5"></circle>
          <circle cx="5" cy="65" r="5"></circle>
          <circle cx="35" cy="5" r="5"></circle>
          <circle cx="65" cy="5" r="5"></circle>
        </g>
      </g>
    </svg>
  );
};

export default FancyHeaderDots;
