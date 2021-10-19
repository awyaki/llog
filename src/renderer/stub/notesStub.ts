import { createMakeBlock } from './blocksStub';
import { Note } from '../components/Note/type';

const makeBlocks1 = createMakeBlock();
const makeBlocks2 = createMakeBlock();
const makeBlocks3 = createMakeBlock();


const notes: Note[] = [
  { 
    id: 1, 
    contentsId: 1, 
    contentsName: 'ECMA-262 9.1 Environment Records', 
    body: 'Environment Record is a specification type used to define the association of Identifiers to specific variables and functions, based upon the lexical nesting structure of ECMAScript code. Usually an Environment Record is associated with some specific syntactic structure of ECMAScript code such as a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement. Each time such code is evaluated, a new Environment Record is created to record the identifier bindings that are created by that code.', 
    blocks: makeBlocks1(4), 
    tags: [{ id: '1', name: 'ECMAScript 2021' }],
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: 2,
    contentsId: 2,
    contentsName: 'ECMA-262 5 Notational Conventions',
    body: 'A context-free grammar consists of a number of productions. Each production has an abstract symbol called a nonterminal as its left-hand side, and a sequence of zero or more nonterminal and terminal symbols as its right-hand side. For each grammar, the terminal symbols are drawn from a specified alphabet.',
    blocks: makeBlocks2(5),
    tags: [{ id: '1', name: 'ECMAScript 2021' }],
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  { 
    id: 3,
    contentsId: 3,
    contentsName: 'ECMA-262 5.1.5 Grammar Notation',
    body: 'Terminal symbols are shown in fixed width font, both in the productions of the grammars and throughout this specification whenever the text directly refers to such a terminal symbol. These are to appear in a script exactly as written. All terminal symbol code points specified in this way are to be understood as the appropriate Unicode code points from the Basic Latin range, as opposed to any similar-looking code points from other Unicode ranges. A code point in a terminal symbol cannot be expressed by a \\ UnicodeEscapeSequence.',
    blocks: makeBlocks3(5),
    tags: [{ id: '1', name: 'ECMAScript 2021' }],
    createdAt: new Date(),
    modifiedAt: new Date(),
  }
];



export { notes };


