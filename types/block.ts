export interface IBlock {
  __component: string;
  id: number;
  body?: string;
  title?: string;
  file?: IFile;
}

export interface IFile {
  url: string;
}
