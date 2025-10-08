export interface TPost {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export type TTemplate = {
  id: number;
  content: string | Record<string, unknown> | unknown[];
};

export type TPostsResponse = TPost[];

export type TTemplatesResponse = TTemplate[];
