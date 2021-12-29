import { 
  Prisma,
  Tag, 
  Content, 
  Note, 
  Block,
  BlockForLog,
  TagForLog
} from '@prisma/client';


type CreateLog = (
  markdown: string,
  html: string,
  blocks: BlockForLog[],
  tags: TagForLog[],
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
  getAllContent: () => Prisma.Prisma__ContentClient<Content[]>;
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
  getNoteWithContentId: (contentId: number) => Prisma.Prisma__NoteClient<Prisma.NoteGetPayload<typeof noteWithRelation>[]>;
  createLog: CreateLog;
  getLog: GetLog;
  getAllLog: GetAllLog;
  markdownToHTML: (markdown: string) => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

