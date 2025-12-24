import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  hoverColor: string;
  textColor: string;
  setHoverColor: (color: string) => void;
  resetColor: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const isDarkColor = (color: string): boolean => {
  const darkColors = ['#424242', '#333', '#000'];
  return darkColors.some(dark => color.toLowerCase().includes(dark.toLowerCase()));
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [hoverColor, setHoverColorState] = useState<string>('#fdfbf7');
  const [textColor, setTextColor] = useState<string>('#27272a');

  const setHoverColor = (color: string) => {
    setHoverColorState(color);
    if (isDarkColor(color)) {
      setTextColor('#d4d4d8');
    } else {
      setTextColor('#474749ff');
    }
  };

  const resetColor = () => {
    setHoverColorState('#fdfbf7');
    setTextColor('#27272a');
  };

  return (
    <ThemeContext.Provider value={{ hoverColor, textColor, setHoverColor, resetColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
