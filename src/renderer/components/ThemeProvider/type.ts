import { Dispatch, SetStateAction } from 'react'
type ThemeColor = 'orange' | 'cyan';

type ThemeContextType = {
  theme: ThemeColor; 
  setTheme: Dispatch<SetStateAction<ThemeColor>>;
};

export type { ThemeColor, ThemeContextType };
