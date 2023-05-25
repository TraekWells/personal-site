import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import rehypeSlug from "rehype-slug";

const blogsDirectory = path.join(process.cwd(), "./src/posts/blog");
const journalsDirectory = path.join(process.cwd(), "./src/posts/journal");
const projectsDirectory = path.join(process.cwd(), "./src/posts/projects");

export const getAllBlogPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(blogsDirectory);
  const blogPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");
    const slug = `/blog/${id}`;

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      params: {
        id,
        slug,
        ...matterResult.data,
      },
    };
  });

  return blogPostsData;
};

export const getAllJournalPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(journalsDirectory);
  const listPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");
    const slug = `/journal/${id}`;

    // Read markdown file as string
    const fullPath = path.join(journalsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      params: {
        id,
        slug,
        ...matterResult.data,
      },
    };
  });

  return listPostsData;
};

export const getAllProjectPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(projectsDirectory);
  const reviewPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");
    const slug = `/projects/${id}`;

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, `${fileName}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      params: {
        id,
        slug,
        ...matterResult.data,
      },
    };
  });

  return reviewPostsData;
};

export async function getSingleBlogPostData(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [rehypeSlug])];

      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
}

export async function getSingleJournalPostData(id: string) {
  const fullPath = path.join(journalsDirectory, `${id}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [rehypeSlug])];

      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
}

export async function getSingleProjectPostData(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [rehypeSlug])];

      return options;
    },
  });

  return {
    slug,
    code,
    frontmatter,
  };
}
