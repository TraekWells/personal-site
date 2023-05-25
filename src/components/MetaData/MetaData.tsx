import { NextSeo } from "next-seo";

interface MetaDataProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
  createdAt: string;
}

const MetaData = ({
  title,
  description,
  url,
  image,
  type = "article",
  createdAt,
}: MetaDataProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: type,
        url: url,
        title: title,
        description: description,
        article: {
          publishedTime: createdAt,
        },
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: `${title} article card`,
          },
        ],
      }}
    />
  );
};

export default MetaData;
