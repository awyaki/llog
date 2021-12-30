import { PrismaClient, Prisma } from '@prisma/client';

console.log('seed.ts is run');

const prisma = new PrismaClient();


const markdown = `# Test data for markdown
Hello world
`;

const html = `<h2>Test data for makrdown</h2>
<p>Hello world</p>
`;

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i++;
  }
};

const makeBlocks = (n: number) => {
  return [...range(0, n)].map((n) => ({ unitNumber: n+1, level: n%6 }));
};


const contentData: Prisma.ContentCreateInput[] = [
  {
    name: 'コンパイラ原理と構造',
    tags: {
      create: [
        { name: 'コンピューターサイエンス' },
        { name: 'コンパイラ' }
      ],
    },
    blocks: {
      create: makeBlocks(400),
    },
  },
  {
    name: '現代文解釈の基礎',
    tags: {
      create: [
        { name: '現代文' },
        { name: '国語' }
      ],
    },
    blocks: {
      create: makeBlocks(360),
    },
  },
  {
    name: "Computer Systems: A Programmer's Perspective (English Edition)",
    tags: {
      create: { name: 'computer systems'}
    },
    blocks: {
      create: makeBlocks(460),
    },
  }
];

// First, create `Content` with creating tags and blocks


// Create `Note`
const noteData: Prisma.NoteCreateInput[] = [
  {
    content: {
      connect: { id: 1 }, 
    },
    origin: markdown,
    transformed: html,
    tags: {
      connectOrCreate: {
        where: { id: 1 },
        create: {
          name: 'hoge',
        },
      },
    }
  },
];


const logData: Prisma.LogCreateInput[] = [
  {
    contentName: 'コンパイラ原理と構造',
    markdown: markdown,
    html: html,
    tags: {
      create: [
        { name: 'コンピューターサイエンス' },
        { name: 'コンパイラ' }
      ],
    },
    content: {
      connect: { id: 1 }
    },
    note: {
      connect: { id: 1 }
    },
  }
];

const asyncForEeach = <T>(arr: T[], fn: (arg: T) => void) => {
  return arr.reduce((p, v) => p.then(() => fn(v)), Promise.resolve());
};

const main = async () => {
  console.log('seeding start...');
  console.log('Start creating contents');
  await asyncForEeach(contentData, async (u) => {
    const content = await prisma.content.create({ data: u });
    console.log(`Create a content with ${content.id}`);
  });

  console.log('Start creating notes');
  await asyncForEeach(noteData, async (u) => {
    const note = await prisma.note.create({ data: u });
    console.log(`Create a note with ${note.id}`);
  });

  console.log('Start creating logs');
  await asyncForEeach(logData, async (u) => {
    const log = await prisma.log.create({ data: u });
    console.log(`Create a log with ${log.id}`);
  });

  console.log('finish seeding');
};

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


