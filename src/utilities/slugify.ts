const slugify = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
};

export default slugify;
