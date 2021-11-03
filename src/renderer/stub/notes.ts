import { Note } from './types';
export const notes: Note[] = [{ 
  id: 1, 
  modefiedAt: new Date(),
  blocks: [{ id: 1, unitNumber: 22, level: 2 }, { id: 2, unitNumber: 23, level: 2 }, { id: 3, unitNumber: 24, level: 1 }],
  tags: [{ id: 1, name: 'インタープリタ' }],
  html: `コンパイラやインタープリタは，実現の対象となるプログラミング言語（対象言語）を機械語に変換したり実行したりするプログラムである．プログラミング言語処理系の開発は，これらのプログラムを，既存言語（実装言語）記述することによってなされる．コンパイラやインタープリタの原理と構造を解説する上で，その対象言語と実装言語には種々の選択肢がありうる．本書では，対象言語としてMLの小さなサブセットであるCoreML言語を定義し，そのインタープリタと抽象機械語コードへのコンパイラを開発する．`, 
}, {
  id: 2,
  modefiedAt: new Date(),
  blocks: [{ id: 1, unitNumber: 1, level: 4 }, { id: 2, unitNumber: 2, level: 3 }, { id: 3, unitNumber: 3, level: 4 }],
  tags: [{ id: 3, name: 'front end' }],
  html: `Vue (発音は / v j u ː / 、 view と同様）はユーザーインターフェイスを構築するためのプログレッシブフレームワークです。他の一枚板(モノリシック: monolithic)なフレームワークとは異なり、Vue は少しずつ適用していけるように設計されています。中核となるライブラリは view 層だけに焦点を当てています。そのため、使い始めるのも、他のライブラリや既存のプロジェクトに統合するのも、とても簡単です。また、モダンなツールやサポートライブラリと併用することで、洗練されたシングルページアプリケーションの開発も可能です。`, 
}];
