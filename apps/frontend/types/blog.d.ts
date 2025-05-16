export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  comments: Comment[];
}

export interface Comment {
  id: number;
  postId: number;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
