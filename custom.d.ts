import { 
  Prisma,
  Tag, 
  Content, 
  Note, 
  Block,
  Log
} from '@prisma/client';


type CreateLog = (
  markdown: string,
  html: string,
  blocks: Block[],
  tags: Tag[],
  contentName: string,
  noteId: number,
  contentId: number,
) => Prisma.Prisma__LogClient<Log>; 

type GetLog = (id: number) => Prisma.Prisma__LogClient<Prisma.LogGetPayload<typeof logWithRelation>>;

type GetAllLog = () => Prisma.Prisma__LogClient<Prisma.LogGetPayload<typeof logWithRelation>[]>;

const contentWithRelation = Prisma.validator<Prisma.ContentArgs>()({
  include: {
    tags: true,
    blocks: true,
    notes: true,
  },
});

const noteWithRelation = Prisma.validator<Prisma.NoteArgs>()({
  include: {
    tags: true,
    blocks: true,
  },
});

const logWithRelation = Prisma.validator<Prisma.LogArgs>()({
  include: {
    tags: true,
    blocks: true,
  },
});


interface IElectronAPI {
  createTag: (name: string) => Prisma.Prisma__TagClient<Tag>;
  getAllTag: () => Prisma.Prisma__TagClient<Tag[]>;
  createContent: (name: string, tags: Tag[], blockNumber: number) => Prisma.Prisma__ContentClient<Content>;
  getAllContent: () => Prisma.Prisma__ContentClient<Prisma.ContentGetPayload<typeof contentWithRelation>[]>;
  getContent: (id: number) => Prisma.Prisma__ContentClient<Prisma.ContentGetPayload<typeof contentWithRelation> | null>;
  createNote: (mkd: string, transformed: string, tags: Tag[], blocks: Block[], contentId: number) => Prisma.Prisma__NoteClient<Note>;
  getNote: (id: number) => Prisma.Prisma__NoteClient<Prisma.NoteGetPayload<typeof noteWithRelation> | null>;
  updateNote: (
    id: number,
    markdown: string,
    html: string,
    tags: Tag[],
    blocks: Block[],
    contentId: number,
    commitedAt: Date | null,
    updatedAt: Date
  ) => Prisma.Prisma__NoteClient<Note>;
  updateContentName: ({ id, name }: Pick<Content, 'id' | 'name'>) => Prisma.Prisma__ContentClient<Content>;
  getNoteWithContentId: (contentId: number) => Prisma.Prisma__NoteClient<Prisma.NoteGetPayload<typeof noteWithRelation>[]>;
  createLog: CreateLog;
  getLog: GetLog;
  getAllLog: GetAllLog;
  updateBlock: (block: Pick<Block, 'id' | 'iteration' | 'commitedAt' | 'level'>) => Prisma.Prisma__BlockClient<Block>;
  getAllBlock: () => Prisma.Prisma__BlockClient<Block[]>;
  upsertContentBlocks: (id: number, blockMaxUnitNumber: number, howManyBlocks: number) => Prisma.Prisma__ContentClient<Content>; 
  updateContentTags: (id: number, tags: Tag[]) => Prisma.Prisma__ContentClient<Content>;
  deleteConnectContentTags: (id: number) => Prisma.Prisma__ContentClient<Content>;
  deleteContent: (id: number) => Prisma.Prisma__ContentClient<Content>;
  markdownToHTML: (markdown: string) => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

