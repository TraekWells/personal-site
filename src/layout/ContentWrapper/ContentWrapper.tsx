type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <main className="prose">{children}</main>;
};

export default ContentWrapper;
