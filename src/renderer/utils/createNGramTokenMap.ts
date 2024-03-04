const diviedStringIntoNGram = (s: string, n: number) => {
  const arrayOfStr = Array.from(s);
  const limit = arrayOfStr.length - n;

  const tokenArray = [];

  for (let i = 0; i <= limit; i++) {
    let token = "";

    for (let j = i; j < i + n; j++) {
      token += arrayOfStr[j];
    }

    tokenArray.push(token);
  }

  return tokenArray;
};

/*
 * @param {String} str - strings that is trasformed into array of string with n-gram.
 * @return {Set} - set of string with n-gram
 *
 * produce set of n-gram
 *
 * ex.
 * input: 'hello'
 *
 * output: Set(14) {
 *                'h', 'e', 'l', 'o',
 *                'he', 'el', 'll', 'lo',
 *                'hel', 'ell', 'llo',
 *                'hell', 'ello',
 *                'hello'
 *                }
 *
 *
 **/

const diviedStringIntoUniToNGram = (s: string) => {
  const N = s.length;
  const tokenArray = [];

  for (let i = 1; i <= N; i++) {
    const subTokenArray = diviedStringIntoNGram(s, i);
    tokenArray.push(...subTokenArray);
  }

  return tokenArray;
};

/*
 * produce Map of token to id which of the obj has the token.
 **/

type CreateNGramTokenMap = (
  arg: { id: number; text: string }[],
) => Map<string, Set<number>>;

export const createNGramTokenMap: CreateNGramTokenMap = (objs) => {
  const tokenMap = new Map<string, Set<number>>();

  const createBiGramTokenMapWithId = (id: number, s: string) => {
    const tokens = diviedStringIntoUniToNGram(s);

    for (const token of tokens) {
      if (tokenMap.has(token)) {
        const ids = tokenMap.get(token) ?? new Set();
        tokenMap.set(token, ids.add(id));
      } else {
        const ids = new Set<number>();
        tokenMap.set(token, ids.add(id));
      }
    }
  };

  for (const o of objs) {
    const { id, text } = o;
    createBiGramTokenMapWithId(id, text);
  }

  return tokenMap;
};
