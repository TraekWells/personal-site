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
};

export type BlogFrontmatterTypes = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  draft: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type BookType = {
  title: string;
  author: string;
  summary: string;
  review: string;
  bookCover: string;
  rating?: number;
  dateRead: Date;
  currentlyReading: boolean;
  didNotFinish: boolean;
};
