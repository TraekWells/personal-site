export interface ProjectType {
  // do I need this type?
  params: {
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
}

export interface BlogType {
  params: {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    draft: boolean;
  };
}

export interface JournalType {
  params: {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    draft: boolean;
  };
}
