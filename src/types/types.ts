export interface ProjectType {
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

export interface BlogType {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  draft: boolean;
}

export interface JournalType {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  draft: boolean;
}
