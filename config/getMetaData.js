const type = "website";
const url = "https://traekwells.com";
const title = "Traek Wells | Front-End UI/UX Developer";
const description =
  "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.";
const image = "/img/open-graph-image.jpg";
const keywords =
  "UI, UX, Freelance Web designer, Freelance Web developer, HTML, CSS, JavaScript, React, Vue, Wordpress";

export default (meta) => {
  return [
    {
      hid: "keywords",
      name: "keywords",
      content: keywords,
    },
    {
      hid: "description",
      name: "description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: (meta && meta.type) || type,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: (meta && meta.image) || image,
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: (meta && meta.image) || image,
    },
  ];
};
