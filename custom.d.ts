import { Prisma, Tag } from '@prisma/client';



interface IElectronAPI {
  createTag: (name: string) => Prisma.Prisma__TagClient<Tag>;
  getAllTag: () => Prisma.Prisma__TagClient<Tag>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

