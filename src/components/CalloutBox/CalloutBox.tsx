import Icon, { IconOptions } from "../Icon";

type CalloutBoxProps = {
  title: string;
  body: string;
  iconType: IconOptions;
};

const CalloutBox = ({ title, body, iconType }: CalloutBoxProps) => {
  return (
    <div className="callout-block">
      <div className="callout-block__icon">
        <Icon type={iconType} />
      </div>
      <div className="callout-block__details">
        <p className="callout-block__title">{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default CalloutBox;
