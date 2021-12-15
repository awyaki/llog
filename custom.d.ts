import { Prisma, Tag, Content, Note } from '@prisma/client';

const contentWithRelation = Prisma.validator<Prisma.ContentArgs>()({
  include: {
    tags: true,
    blocks: true,
    notes: true,
  },
});


interface IElectronAPI {
  createTag: (name: string) => Prisma.Prisma__TagClient<Tag>;
  getAllTag: () => Prisma.Prisma__TagClient<Tag[]>;
  createContent: (name: string, tags: Tag[], blockNumber: number) => Prisma.Prisma__ContentClient<Content>;
  getAllContent: () => Prisma.Prisma__ContentClient<Content[]>;
  getContent: (id: number) => Prisma.Prisma__ContentClient<Prisma.ContentGetPayload<typeof contentWithRelation> | null>;
  createNote: (mkd: string, transformed: string, tags: Tag[], blocks: Block[], contentId: number) => Prisma.Prisma__NoteClient<Note>;
  markdownToHTML: (markdown: string) => string;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

