import FancyHeaderDots from "./FancyHeaderDots";

type FancyHeaderProps = {
  children?: React.ReactNode;
};

const FancyHeader = ({ children }: FancyHeaderProps) => {
  return (
    <div className="fancy-header">
      <FancyHeaderDots />
      <h2 className="mt-0">{children}</h2>
    </div>
  );
};

export default FancyHeader;
