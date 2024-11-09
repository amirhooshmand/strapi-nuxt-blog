import type { IPagination } from "~/types/pagination";
import type { IFormats } from "~/types/media";
import type { IBlock } from "~/types/block";

export interface IArticlesResponse {
  data: IArticle[];
  meta: IMeta;
}

export interface IArticle {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: ICover;
  author: IAuthor;
  category: ICategory;
  blocks: IBlock[];
}

export interface ICover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: IFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IAuthor {
  id: number;
  documentId: string;
  avatar: IAvatar;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IAvatar {
  url: string;
}

export interface ICategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IMeta {
  pagination: IPagination;
}
