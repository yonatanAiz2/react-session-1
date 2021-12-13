import { createContext, useContext, useState } from "react";

const initialTheme: Colors = {
  primary: "blueviolet",
  secondary: "orangered",
  text: "#333",
  background: "#eee",
};

interface Props {
  theme: Colors;
  updateTheme: (theme: Theme) => void;
  resetTheme: () => void;
}

interface ContextProps {
  children: (theme: Colors) => React.ReactNode | React.ReactNode;
}

const AppThemeContext = createContext<Props>({} as Props);

const AppThemeContextProvider = ({ children }: ContextProps) => {
  const [theme, setTheme] = useState(initialTheme);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const resetTheme = () => setTheme(initialTheme);

  return (
    <AppThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children(theme)}
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeContextProvider;
