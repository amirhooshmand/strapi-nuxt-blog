import type { IFormats, IMedium } from "~/types/media";

export interface IGlobalResponse {
  data: IGlobal;
  meta: IMeta;
}

export interface IGlobal {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  favicon: IFavicon;
  defaultSeo: IDefaultSeo;
}

export interface IFavicon {
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

export interface IDefaultSeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: IShareImage;
}

export interface IShareImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  format: IFormats;
  hash: string;
  ext: string;
  mime: string;
  size: 81.73;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IMeta {}
