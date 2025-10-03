export interface TPost {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export type TPostsResponse = TPost[];