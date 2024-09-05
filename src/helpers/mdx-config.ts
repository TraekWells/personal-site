import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Note from "@/components/Note";
import CodeSnippet from "@/components/CodeSnippet";
import Video from "@/components/Video";
import FancyRule from "@/components/FancyRule";

export const mdxComponents = {
  components: {
    Note,
    pre: CodeSnippet,
    Video,
    hr: FancyRule,
  },
};

export const mdxOptions = {
  options: {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  },
};
