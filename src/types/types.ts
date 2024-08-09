export type ProjectType = {
  slug: string;
  title: string;
  summary: string;
  previewImage: string;
  featuredImage: string;
  linkToCode?: string;
  linkToProject?: string;
  technology: string[];
  featured: boolean;
  draft: boolean;
  type: string;
}

export type BlogType = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  draft: boolean;
}

export type JournalType = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  draft: boolean;
}
