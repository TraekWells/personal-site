const unslug = (slug: string) => {
  return slug
    .toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default unslug;
