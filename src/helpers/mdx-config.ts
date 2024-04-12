import rehypeSlug from "rehype-slug";
import Note from "@/components/Note";
import CodeSnippet from "@/components/CodeSnippet";
import Video from "@/components/Video";

export const mdxComponents = {
  components: {
    Note,
    pre: CodeSnippet,
    Video,
  },
};

export const mdxOptions = {
  options: {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  },
};
