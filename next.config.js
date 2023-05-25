/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
module.exports = nextConfig;
