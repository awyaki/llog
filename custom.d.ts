import { Prisma, Tag, Content } from '@prisma/client';



interface IElectronAPI {
  createTag: (name: string) => Prisma.Prisma__TagClient<Tag>;
  getAllTag: () => Prisma.Prisma__TagClient<Tag[]>;
  createContent: (name: string, tags: Tag[], blockNumber: number) => Prisma.Prisma__ContentClient<Content>;
  getAllContent: () => Prisma.Prisma__TagClient<Content[]>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

