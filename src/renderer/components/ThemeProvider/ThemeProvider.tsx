import { createContext, useState, FC } from 'react';
import { ThemeContextType, ThemeColor } from './type';

const ThemeContext = createContext<ThemeContextType>({ theme: 'orange', setTheme: () => {}});

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeColor>('cyan');
  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
